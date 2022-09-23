<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-alphabetical-off" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M22.11 21.46L16 15.31L14 13.31L13.65 13L10 9.34L2.39 1.73L1.11 3L10 11.89V15A2 2 0 0 0 12 17H14A1.92 1.92 0 0 0 14.89 16.78L20.84 22.73M12 15V13.89L13.11 15M16 12.78L14.22 11A2 2 0 0 1 16 12.78M20.2 17L18 14.8V13A2 2 0 0 1 20 11H22V13H20V15H22V17M6 11H4A2 2 0 0 0 2 13V15A2 2 0 0 0 4 17H8V13A2 2 0 0 0 6 11M6 15H4V13H6M12 8.8L10.2 7H12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAlphabeticalOff.svg',
  mixins: [icon]
};
</script>