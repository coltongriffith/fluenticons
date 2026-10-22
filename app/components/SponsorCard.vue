<template>
  <div v-if="ads.length || variant === 'hero'" :class="$attrs.class">
    <!-- The running sponsors (app/sponsor.ts), stacked, or the sponsor page's example. -->
    <div v-if="ads.length" class="flex flex-col" :class="variant === 'compact' ? 'gap-2' : 'gap-3'">
      <a
        v-for="s in ads"
        :key="s.slug || 'example'"
        :ref="(el) => watchAd(s, el)"
        :data-hidden-in="s.hiddenIn?.join(' ')"
        :href="real ? href(s, placement) : '#'"
        v-bind="real ? { target: '_blank', rel: 'sponsored noopener' } : {}"
        class="group flex gap-4 rounded-xl ring-1 ring-gray-900/10 dark:ring-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        :class="shell"
        @click="onClick($event, s)"
        @auxclick.middle="real && click(s, placement)"
      >
        <span class="flex-shrink-0 rounded-lg bg-white ring-1 ring-gray-900/5 dark:ring-white/10 overflow-hidden flex-center" :class="box">
          <picture v-if="s.logo" class="contents">
            <!-- An animated logo holds still for visitors who turn off animations. -->
            <source v-if="s.logoStill" :srcset="s.logoStill" media="(prefers-reduced-motion: reduce)" />
            <img
              :src="s.logo"
              :alt="s.logoAlt || ''"
              :width="boxPx"
              :height="boxPx"
              class="h-full w-full object-contain"
            />
          </picture>
          <span v-else class="h-full w-full flex-center bg-blue-600 text-white text-sm font-semibold">{{ initials(s.name) }}</span>
        </span>

        <span class="min-w-0 flex-1" :class="variant === 'inline' && 'sm:flex sm:items-center sm:gap-6'">
          <span class="block min-w-0 sm:flex-1">
            <span class="flex items-baseline gap-2">
              <span class="font-semibold text-gray-900 dark:text-white">{{ s.headline || s.name }}</span>
              <span class="text-[11px] text-gray-400 dark:text-gray-500 flex-shrink-0">Sponsor</span>
            </span>
            <span class="block text-gray-600 dark:text-gray-300 leading-snug mt-0.5" :class="text">
              {{ s.tagline }}
            </span>
          </span>
          <!-- With ctaColor, the call to action is a link in the sponsor's color. -->
          <span
            v-if="variant !== 'compact' && s.ctaText && s.ctaColor"
            class="sponsor-cta mt-2 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--cta-light)] dark:text-[color:var(--cta)] group-hover:underline underline-offset-2"
            :class="variant === 'inline' && 'sm:mt-0 sm:flex-shrink-0'"
            :style="{ '--cta': s.ctaColor, '--cta-light': readableOnWhite(s.ctaColor) }"
          >
            {{ s.ctaText }} <span aria-hidden="true">→</span>
          </span>
          <span
            v-else-if="variant !== 'compact' && s.ctaText"
            class="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline underline-offset-2"
            :class="variant === 'inline' && 'sm:mt-0 sm:flex-shrink-0'"
          >
            {{ s.ctaText }}<FluentSvg ui="open_24_regular" class="h-3.5 w-3.5" />
          </span>
        </span>
      </a>
    </div>

    <!-- No sponsor running: the homepage hero advertises the spot itself, in
         the same card a sponsor gets, so it doubles as a preview. The other
         placements show nothing. -->
    <NuxtLink
      v-else
      :to="site.sponsorPage"
      class="group flex gap-4 rounded-xl ring-1 ring-gray-900/10 dark:ring-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      :class="shell"
      @click="track('sponsor_house_click', { placement })"
    >
      <span
        class="flex-shrink-0 rounded-lg border border-dashed border-blue-300 dark:border-blue-500/50 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-center transition-colors group-hover:border-blue-400"
        :class="box"
      >
        <FluentSvg ui="megaphone_loud_24_regular" :class="variant === 'compact' ? 'h-4 w-4' : 'h-5 w-5'" />
      </span>
      <span class="min-w-0 flex-1" :class="variant === 'inline' && 'sm:flex sm:items-center sm:gap-6'">
        <span class="block min-w-0 sm:flex-1">
          <span class="flex items-baseline gap-2">
            <span class="font-semibold text-gray-900 dark:text-white">Your product here</span>
            <span class="text-[11px] text-emerald-600 dark:text-emerald-400 flex-shrink-0">Spot open</span>
          </span>
          <span class="block text-gray-600 dark:text-gray-300 leading-snug mt-0.5" :class="text">
            {{ pitch }}
          </span>
        </span>
        <span
          v-if="variant !== 'compact'"
          class="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline underline-offset-2"
          :class="variant === 'inline' && 'sm:mt-0 sm:flex-shrink-0'"
        >
          Become a sponsor
        </span>
      </span>
    </NuxtLink>

    <NuxtLink
      v-if="variant === 'hero' && real && site.sponsorPage && placement !== 'sponsor_page'"
      :to="site.sponsorPage"
      class="mt-2 inline-block text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:underline"
    >
      Advertise here
    </NuxtLink>
  </div>
</template>

<script setup>
import site from "~/site.js";
import { track } from "../utils/analytics";
import { readableOnWhite } from "../utils/sponsor";

defineOptions({ inheritAttrs: false });

const props = defineProps({
  // hero: homepage · inline: icon pages and guides · compact: icon editor
  variant: { type: String, default: "inline" },
  // Where it's shown: the placement sent with every event and as utm_content.
  placement: { type: String, required: true },
  // Shown when no sponsor is running, instead of "Your product here", with no
  // link or events (the sponsor page's example card).
  example: { type: Object, default: null },
  // At most this many sponsors (the sponsor page shows one as an example).
  max: { type: Number, default: Infinity },
});

const { sponsors, href, click, impression, geoReady } = useSponsor();
const route = useRoute();
const kit = site.sponsorKit || {};
const pitch = kit.users
  ? `Reach ${kit.users} developers a month building with ${kit.iconSet}.`
  : `Reach developers building with ${kit.iconSet}.`;

// The running sponsors, else the example (if any), else the placeholder. With
// two or more, the one on top changes from page to page (fixed per page, so
// nothing moves after the page loads), and `max` limits how many are shown.
const real = computed(() => sponsors.value.length > 0);
const ads = computed(() => {
  if (!real.value) return props.example ? [props.example] : [];
  const list = sponsors.value;
  const shift = [...route.path].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 0) % list.length;
  return [...list.slice(shift), ...list.slice(0, shift)].slice(0, props.max);
});

// Fixed logo box so nothing moves when the logo loads.
const boxPx = computed(() => (props.variant === "compact" ? 36 : 44));
const box = computed(() => (props.variant === "compact" ? "h-9 w-9" : "h-11 w-11"));
const text = computed(() => (props.variant === "compact" ? "text-xs" : "text-sm"));
const shell = computed(
  () =>
    ({
      hero: "w-full max-w-sm p-4 bg-white/80 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 shadow-sm",
      inline: "p-4 sm:px-5 bg-gray-50 dark:bg-gray-800/60 hover:bg-gray-100 dark:hover:bg-gray-800",
      compact: "p-3 gap-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/60",
    })[props.variant]
);

function onClick(event, s) {
  if (real.value) click(s, props.placement);
  else event.preventDefault(); // the example card isn't a link
}

// One impression per sponsor per placement per page view, once half its card
// is on screen. Cards can appear after hydration (a start date passed since
// the build), so each is observed as it mounts. A sponsor with `hiddenIn` is
// observed only once the visitor's country is known (it's invisible until
// then). No events in preview mode.
const seen = new Set();
let observer;
function watchAd(s, el) {
  if (!el || !real.value || !s.slug || seen.has(s.slug) || typeof IntersectionObserver === "undefined") return;
  if (s.hiddenIn?.length && !geoReady.value) return;
  observer ||= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const ad = entry.target.__sponsor;
        if (!entry.isIntersecting || !ad || seen.has(ad.slug)) continue;
        seen.add(ad.slug);
        impression(ad, props.placement);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.5 }
  );
  if (el.__sponsor?.slug === s.slug) return;
  el.__sponsor = s;
  observer.observe(el);
}
onBeforeUnmount(() => observer?.disconnect());
</script>
