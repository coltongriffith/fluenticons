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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-2.476 3.024a.5.5 0 0 0 0 .707l1.769 1.77-1.767 1.766a.5.5 0 1 0 .707.708l1.767-1.767 1.77 1.769a.5.5 0 1 0 .707-.707L18.208 17.5l1.771-1.77a.5.5 0 0 0-.707-.707l-1.771 1.77-1.77-1.77a.5.5 0 0 0-.707 0ZM11.019 17H3l-.117.007A1 1 0 0 0 3 19h8.174a6.52 6.52 0 0 1-.155-2ZM11.498 15H3a1 1 0 0 1-.117-1.993L3 13h9.81c-.553.575-1 1.252-1.312 2ZM3 11a1 1 0 0 1-.117-1.993L3 9h18a1 1 0 0 1 .117 1.993L21 11H3ZM21 5H3l-.117.007A1 1 0 0 0 3 7h18l.117-.007A1 1 0 0 0 21 5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextGrammarDismiss',
    mixins: [icon]
};
</script>