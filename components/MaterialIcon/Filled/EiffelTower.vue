<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-eiffel-tower" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M8.21 17C8.65 16.15 9.06 15.16 9.44 14H9V12H10C10.61 9.4 11 6.13 11 2H13C13 6.13 13.4 9.4 14 12H15V14H14.56C14.94 15.16 15.35 16.15 15.79 17H17L17 19L19 22H16.58C15.81 20.24 14.05 19 12 19C9.95 19 8.19 20.24 7.42 22H5L7 19L6.97 17H8.21M12.59 14H11.41C11.07 15.13 10.69 16.13 10.28 17H13.72C13.32 16.13 12.93 15.13 12.59 14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledEiffelTower.svg',
  mixins: [icon]
};
</script>