<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-sina-weibo" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M9.82,13.87C10.89,13.87 11.77,14.74 11.77,15.82A1.95,1.95 0 0,1 9.82,17.77C8.74,17.77 7.87,16.89 7.87,15.82C7.87,14.74 8.74,13.87 9.82,13.87M14.5,3.34L15.18,3.31C18.94,3.31 22,6.37 22,10.13L21.95,10.95L20.76,10.58L20.78,10.13C20.78,7.04 18.27,4.53 15.18,4.53L14.83,4.54L14.5,3.34M15.32,6.23C17.38,6.3 19.05,8 19.08,10.06L17.84,9.68C17.65,8.56 16.78,7.68 15.67,7.5L15.32,6.23M2,15.41C1.97,14.8 2.07,12.64 4.95,9.97C8.35,6.81 9.82,7.05 9.82,7.05C9.82,7.05 13,6.75 11.06,10.46H11.13C11.6,9.96 12.62,9.21 14.69,9C16.77,8.79 16.77,10.5 16.5,11.7C18.38,12.64 19.56,14.03 19.56,15.58C19.56,18.4 15.63,20.69 10.78,20.69H10.65L10.5,20.69C7,20.69 4,19.42 2.71,17.59C2.25,16.97 2,16.29 2,15.58V15.41M9.82,11.92C6.59,11.92 3.97,13.67 3.97,15.82C3.97,17.97 6.59,19.72 9.82,19.72C13.05,19.72 15.67,17.97 15.67,15.82C15.67,13.67 13.05,11.92 9.82,11.92Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSinaWeibo.svg',
  mixins: [icon]
};
</script>