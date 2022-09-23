<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-pinwheel" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12,12C12,9 14.5,6.5 17.5,6.5C20.5,6.5 23,9 23,12H12M12,12C12,15 9.5,17.5 6.5,17.5C3.5,17.5 1,15 1,12H12M12,12C9,12 6.5,9.5 6.5,6.5C6.5,3.5 9,1 12,1V12M12,12C15,12 17.5,14.5 17.5,17.5C17.5,20.5 15,23 12,23V12Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledPinwheel.svg',
  mixins: [icon]
};
</script>