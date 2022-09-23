<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-account-cash-outline" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M16 11.5C16 10.12 17.12 9 18.5 9S21 10.12 21 11.5 19.88 14 18.5 14 16 12.88 16 11.5M13 3V20H24V3H13M22 16C20.9 16 20 16.9 20 18H17C17 16.9 16.11 16 15 16V7C16.11 7 17 6.11 17 5H20C20 6.11 20.9 7 22 7V16M7 6C8.1 6 9 6.9 9 8S8.1 10 7 10 5 9.1 5 8 5.9 6 7 6M7 4C4.79 4 3 5.79 3 8S4.79 12 7 12 11 10.21 11 8 9.21 4 7 4M7 14C3.13 14 0 15.79 0 18V20H11V18H2C2 17.42 3.75 16 7 16C8.83 16 10.17 16.45 11 16.95V14.72C9.87 14.27 8.5 14 7 14Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedAccountCash',
  mixins: [icon]
};
</script>