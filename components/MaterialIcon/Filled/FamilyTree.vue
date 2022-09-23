<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-family-tree" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 1A2.5 2.5 0 0 0 9.5 3.5A2.5 2.5 0 0 0 11 5.79V7H7A2 2 0 0 0 5 9V9.71A2.5 2.5 0 0 0 3.5 12A2.5 2.5 0 0 0 5 14.29V15H4A2 2 0 0 0 2 17V18.21A2.5 2.5 0 0 0 .5 20.5A2.5 2.5 0 0 0 3 23A2.5 2.5 0 0 0 5.5 20.5A2.5 2.5 0 0 0 4 18.21V17H8V18.21A2.5 2.5 0 0 0 6.5 20.5A2.5 2.5 0 0 0 9 23A2.5 2.5 0 0 0 11.5 20.5A2.5 2.5 0 0 0 10 18.21V17A2 2 0 0 0 8 15H7V14.29A2.5 2.5 0 0 0 8.5 12A2.5 2.5 0 0 0 7 9.71V9H17V9.71A2.5 2.5 0 0 0 15.5 12A2.5 2.5 0 0 0 17 14.29V15H16A2 2 0 0 0 14 17V18.21A2.5 2.5 0 0 0 12.5 20.5A2.5 2.5 0 0 0 15 23A2.5 2.5 0 0 0 17.5 20.5A2.5 2.5 0 0 0 16 18.21V17H20V18.21A2.5 2.5 0 0 0 18.5 20.5A2.5 2.5 0 0 0 21 23A2.5 2.5 0 0 0 23.5 20.5A2.5 2.5 0 0 0 22 18.21V17A2 2 0 0 0 20 15H19V14.29A2.5 2.5 0 0 0 20.5 12A2.5 2.5 0 0 0 19 9.71V9A2 2 0 0 0 17 7H13V5.79A2.5 2.5 0 0 0 14.5 3.5A2.5 2.5 0 0 0 12 1M12 2.5A1 1 0 0 1 13 3.5A1 1 0 0 1 12 4.5A1 1 0 0 1 11 3.5A1 1 0 0 1 12 2.5M6 11A1 1 0 0 1 7 12A1 1 0 0 1 6 13A1 1 0 0 1 5 12A1 1 0 0 1 6 11M18 11A1 1 0 0 1 19 12A1 1 0 0 1 18 13A1 1 0 0 1 17 12A1 1 0 0 1 18 11M3 19.5A1 1 0 0 1 4 20.5A1 1 0 0 1 3 21.5A1 1 0 0 1 2 20.5A1 1 0 0 1 3 19.5M9 19.5A1 1 0 0 1 10 20.5A1 1 0 0 1 9 21.5A1 1 0 0 1 8 20.5A1 1 0 0 1 9 19.5M15 19.5A1 1 0 0 1 16 20.5A1 1 0 0 1 15 21.5A1 1 0 0 1 14 20.5A1 1 0 0 1 15 19.5M21 19.5A1 1 0 0 1 22 20.5A1 1 0 0 1 21 21.5A1 1 0 0 1 20 20.5A1 1 0 0 1 21 19.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledFamilyTree.svg',
  mixins: [icon]
};
</script>