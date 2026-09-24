<template>
  <div class="container mx-auto px-4 sm:px-8 py-8">
    <div class="max-w-3xl">
      <h1 class="text-3xl sm:text-4xl font-bold mb-4">Sponsor Fluenticons</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-10">
        Developers come here to find a Microsoft Fluent UI icon and copy the code. One sponsor at a
        time gets a clearly labeled spot across the site, in front of people who are building
        something right now.
      </p>

      <dl class="grid grid-cols-3 border-y dark:border-gray-700 divide-x dark:divide-gray-700 mb-3">
        <div v-for="stat in stats" :key="stat.label" class="py-5 px-4 first:pl-0">
          <dt class="text-sm text-gray-500 dark:text-gray-400">{{ stat.label }}</dt>
          <dd class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">{{ stat.value }}</dd>
        </div>
      </dl>
      <p class="text-xs text-gray-500 mb-12">Monthly averages from Google Analytics, updated {{ kit.updated }}.</p>

      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-3">Who visits</h2>
        <p class="text-gray-600 dark:text-gray-300">
          Front-end and .NET developers and product designers working in Microsoft's Fluent design
          system: React with <code class="rounded bg-gray-100 dark:bg-gray-800 px-1 py-0.5 text-sm">@fluentui/react-icons</code>,
          Blazor, WinUI and WPF, Power Apps, Flutter and Figma. Most arrive from search looking for a
          specific icon and leave with code in their clipboard. Coding agents also query the
          <NuxtLink to="/ai/" class="underline">Fluent Icons MCP server</NuxtLink>.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-3">Where your product appears</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          The same card runs sitewide for the month. This is how it looks:
        </p>
        <div class="rounded-xl border dark:border-gray-700 bg-slate-50 dark:bg-[#0B1120] p-6 sm:p-8 mb-6">
          <SponsorSlot variant="hero" placement="preview" :preview="example" />
        </div>
        <ul class="space-y-3 text-gray-700 dark:text-gray-200">
          <li v-for="p in placements" :key="p.title" class="flex gap-3">
            <FluentSvg ui="checkmark_24_regular" class="h-5 w-5 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span><strong class="font-semibold">{{ p.title }}</strong> <span class="text-gray-600 dark:text-gray-300">{{ p.detail }}</span></span>
          </li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-3">How it works</h2>
        <ul class="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
          <li>One sponsor per month. No other ads run while you're booked.</li>
          <li>Labeled “Sponsor”, with <code class="rounded bg-gray-100 dark:bg-gray-800 px-1 py-0.5 text-sm">rel="sponsored"</code> links tagged with UTM parameters so you can see the traffic in your own analytics.</li>
          <li>No third-party scripts or tracking pixels. The card is part of the page, so ad blockers don't hide it.</li>
          <li>At the end of the month you get a report of impressions and clicks by placement.</li>
        </ul>
      </section>

      <section class="rounded-xl ring-1 ring-gray-900/10 dark:ring-white/10 p-6 sm:p-8 mb-8">
        <h2 class="text-2xl font-bold mb-1">${{ kit.price }} per month</h2>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Founding sponsors: ${{ kit.foundingPrice }} per month with a {{ kit.foundingMonths }}-month booking.
        </p>
        <a
          :href="mailto"
          class="inline-flex items-center px-4 py-2 font-semibold text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900"
          @click="track('sponsor_inquiry_click')"
        >
          Email to book a month
        </a>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Send your product name, a one-line description (up to 70 characters), the link and a square
          logo. Or write to {{ kit.email }}.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import site from "~/site.js";
import { track } from "../utils/analytics";

const kit = site.sponsorKit;

const stats = [
  { label: "Users", value: kit.users },
  { label: "Sessions", value: kit.sessions },
  { label: "Icon pages", value: kit.iconPages },
];

const placements = [
  { title: "Homepage,", detail: "beside the search and icon grid." },
  { title: "Every icon page,", detail: `${kit.iconPages} pages that rank for icon searches.` },
  { title: "The icon editor,", detail: "open while people pick and copy icons." },
  { title: "Copy confirmations,", detail: "a one-line credit on the first copy of each visit and every few after." },
  { title: "Guides,", detail: "after each article." },
];

const example = {
  name: "Your product",
  tagline: "One line about what you make, up to 70 characters.",
  cta: "Your call to action",
};

const mailto = `mailto:${kit.email}?subject=${encodeURIComponent("Sponsoring Fluenticons")}`;

useSeo({
  title: "Sponsor",
  description: `Reach about ${kit.users} developers a month building with Microsoft's Fluent UI icons. One labeled sponsor at a time, $${kit.price} per month.`,
  path: "/sponsor",
});
</script>
