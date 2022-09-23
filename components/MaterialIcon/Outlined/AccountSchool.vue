<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-account-school-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M18 10.5V6L15.89 7.06C15.96 7.36 16 7.67 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 7.67 8.04 7.36 8.11 7.06L5 5.5L12 2L19 5.5V10.5H18M12 9L10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8L12 9M14.75 5.42L12.16 4.1L9.47 5.47L12.07 6.79L14.75 5.42M12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13M12 14.9C9 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedAccountSchool',
  mixins: [icon]
};
</script>