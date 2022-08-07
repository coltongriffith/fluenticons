<template>
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<linearGradient v-if="fill === 'url(#g1)'" id="g1" :gradientTransform="`rotate(${angle})`">
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient v-if="fill === 'url(#g2)'" id="g2" cx = "50%" cy = "50%" r = "50%">
      <stop :stop-color="start" offset = "0%"/>
      <stop :stop-color="end" offset = "100%"/>
    </radialGradient>
<path d="M13.5 14.001a1.5 1.5 0 0 1 1.493 1.356L15 15.5v.17a1.75 1.75 0 0 0-1.988.345l-2.5 2.501a1.75 1.75 0 0 0 0 2.475l.683.681c-.897.233-1.84.327-2.695.327-2.722 0-6.335-.956-6.495-4.27L2 17.5v-2a1.5 1.5 0 0 1 1.356-1.493L3.5 14l10 .001Z" :fill="fill" :fill-opacity="opacity" />

<path d="m14.78 17.783-1.219 1.22h6.878l-1.22-1.22a.75.75 0 0 1 1.061-1.06l2.5 2.502a.75.75 0 0 1 0 1.06l-2.5 2.499a.75.75 0 0 1-1.06-1.061l1.22-1.22h-6.88l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.498a.75.75 0 0 1 0-1.061l2.5-2.501a.75.75 0 1 1 1.06 1.06Z" :fill="fill" :fill-opacity="opacity" />

<path d="M20.988 16.016 22 17.03V15.5l-.007-.145A1.5 1.5 0 0 0 20.5 14h-5.012l.113.162c.25.387.399.844.399 1.338v2l-.007.28a5.52 5.52 0 0 1-.015.223h2.19a1.75 1.75 0 0 1 2.82-1.987ZM8.5 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM17.5 5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPeopleSwap',
    mixins: [icon]
};
</script>