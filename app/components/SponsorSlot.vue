<template>
  <div v-if="s" ref="root" :class="$attrs.class">
    <a
      :href="link"
      target="_blank"
      rel="sponsored noopener"
      class="group flex gap-4 rounded-xl ring-1 ring-gray-900/10 dark:ring-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      :class="shell"
      @click="onClick"
    >
      <span
        class="flex-shrink-0 rounded-lg bg-white ring-1 ring-gray-900/5 dark:ring-white/10 overflow-hidden flex-center"
        :class="variant === 'compact' ? 'h-9 w-9' : 'h-11 w-11'"
      >
        <img v-if="s.logo" :src="s.logo" alt="" width="44" height="44" class="h-full w-full object-contain" />
        <span v-else class="h-full w-full flex-center bg-blue-600 text-white text-sm font-semibold">{{ initials(s.name) }}</span>
      </span>

      <span class="min-w-0 flex-1" :class="variant === 'inline' && 'sm:flex sm:items-center sm:gap-6'">
        <span class="block min-w-0 sm:flex-1">
          <span class="flex items-baseline gap-2">
            <span class="font-semibold text-gray-900 dark:text-white truncate">{{ s.name }}</span>
            <span class="text-[11px] text-gray-400 dark:text-gray-500 flex-shrink-0">Sponsor</span>
          </span>
          <span
            class="block text-gray-600 dark:text-gray-300 leading-snug mt-0.5"
            :class="variant === 'compact' ? 'text-xs' : 'text-sm'"
          >
            {{ s.tagline }}
          </span>
        </span>
        <span
          v-if="variant !== 'compact' && s.cta"
          class="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline underline-offset-2"
          :class="variant === 'inline' && 'sm:mt-0 sm:flex-shrink-0'"
        >
          {{ s.cta }}<FluentSvg ui="open_24_regular" class="h-3.5 w-3.5" />
        </span>
      </span>

    </a>
    <NuxtLink
      v-if="variant === 'hero' && site.sponsorPage && !preview"
      :to="site.sponsorPage"
      class="mt-2 inline-block text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:underline"
    >
      Advertise here
    </NuxtLink>
  </div>

  <!-- No sponsor booked: the hero advertises the spot itself, in the same
       card a sponsor gets, so it doubles as a preview. -->
  <div v-else-if="variant === 'hero' && site.sponsorPage" :class="$attrs.class">
    <NuxtLink
      :to="site.sponsorPage"
      class="group flex gap-4 w-full max-w-sm p-4 rounded-xl ring-1 ring-gray-900/10 dark:ring-white/10 bg-white/80 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      @click="track('sponsor_house_click')"
    >
      <span
        class="flex-shrink-0 h-11 w-11 rounded-lg border border-dashed border-blue-300 dark:border-blue-500/50 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex-center transition-colors group-hover:border-blue-400"
      >
        <FluentSvg ui="megaphone_loud_24_regular" class="h-5 w-5" />
      </span>
      <span class="min-w-0 flex-1">
        <span class="flex items-baseline gap-2">
          <span class="font-semibold text-gray-900 dark:text-white">Your product here</span>
          <span class="text-[11px] text-emerald-600 dark:text-emerald-400 flex-shrink-0">Spot open</span>
        </span>
        <span class="block text-sm text-gray-600 dark:text-gray-300 leading-snug mt-0.5">
          {{ pitch }}
        </span>
        <span class="mt-2 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline underline-offset-2">
          Become a sponsor
        </span>
      </span>
    </NuxtLink>
  </div>
</template>

<script setup>
import site from "~/site.js";
import { track } from "../utils/analytics";

defineOptions({ inheritAttrs: false });

const props = defineProps({
  // hero: homepage card · inline: icon pages and guides · compact: editor sidebar
  variant: { type: String, default: "inline" },
  // Where it's shown, sent with every event and as utm_content.
  placement: { type: String, required: true },
  // Render this sponsor instead of the booked one, without events (sponsor page).
  preview: { type: Object, default: null },
});

const { sponsor, href, click, impression } = useSponsor();
const kit = site.sponsorKit || {};
const pitch = kit.users
  ? `Reach ${kit.users} developers a month building with ${kit.iconSet}.`
  : `Reach developers building with ${kit.iconSet}.`;
const s = computed(() => props.preview || sponsor);
const link = computed(() => (props.preview ? props.preview.url || "#" : href(props.placement)));

const shell = computed(
  () =>
    ({
      hero: "w-full max-w-sm p-4 bg-white/80 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 shadow-sm",
      inline: "p-4 sm:px-5 bg-gray-50 dark:bg-gray-800/60 hover:bg-gray-100 dark:hover:bg-gray-800",
      compact: "p-3 gap-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/60",
    })[props.variant]
);

function onClick() {
  if (!props.preview) click(props.placement);
}

// One impression per placement per page view, once half the card is on screen.
const root = ref(null);
let observer;
onMounted(() => {
  if (props.preview || !sponsor || !root.value || !("IntersectionObserver" in window)) return;
  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;
      impression(props.placement);
      observer.disconnect();
    },
    { threshold: 0.5 }
  );
  observer.observe(root.value);
});
onBeforeUnmount(() => observer?.disconnect());
</script>
