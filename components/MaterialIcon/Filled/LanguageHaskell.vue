<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-language-haskell" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M2.08,19L6.75,12L2.08,5H5.58L10.25,12L5.58,19H2.08M6.75,19L11.42,12L6.75,5H10.25L19.59,19H16.09L13.17,14.63L10.25,19H6.75M18.03,14.92L16.5,12.58H21.92V14.92H18.03M15.7,11.42L14.14,9.08H21.92V11.42H15.7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledLanguageHaskell.svg',
  mixins: [icon]
};
</script>