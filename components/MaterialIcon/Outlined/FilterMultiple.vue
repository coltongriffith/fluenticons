<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-filter-multiple-outline" viewBox="0 0 24 24">
    <linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="`rotate(${angle})`"
    >
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient
      v-if="fill === 'url(#g2)'"
      id="g2"
      cx="50%"
      cy="50%"
      r="50%"
    >
      <stop :stop-color="start" offset="0%" />
      <stop :stop-color="end" offset="100%" />
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M3.47 5C3.25 5 3.04 5.08 2.87 5.21C2.43 5.55 2.35 6.18 2.69 6.61L2.69 6.62L7 12.14V18.05L10.64 21.71C11 22.1 11.66 22.1 12.05 21.71L12.05 21.71C12.44 21.32 12.44 20.69 12.06 20.3L9 17.22V11.45L4.27 5.39C4.08 5.14 3.78 5 3.47 5M21.62 3.22C21.43 3.08 21.22 3 21 3H7C6.78 3 6.57 3.08 6.38 3.22C5.95 3.56 5.87 4.19 6.21 4.62L11 10.75V15.87C10.96 16.16 11.06 16.47 11.29 16.7L15.3 20.71C15.69 21.1 16.32 21.1 16.71 20.71C16.94 20.5 17.04 20.18 17 19.88V10.75L21.79 4.62C22.13 4.19 22.05 3.56 21.62 3.22M15 10.05V17.58L13 15.58V10.06L9.04 5H18.96L15 10.05Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedFilterMultiple',
  mixins: [icon]
};
</script>