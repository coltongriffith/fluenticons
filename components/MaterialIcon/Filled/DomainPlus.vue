<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-domain-plus" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 7V3H2V21H13.35A5.8 5.8 0 0 1 13 19H12V17H13.35A5 5 0 0 1 14 15.69V15H12V13H14V11H12V9H20V13.09A5.58 5.58 0 0 1 22 13.81V7M6 19H4V17H6M6 15H4V13H6M6 11H4V9H6M6 7H4V5H6M10 19H8V17H10M10 15H8V13H10M10 11H8V9H10M10 7H8V5H10M16 13H18V11H16M16 11V13H18V11M16 11V13H18V11M20 15V18H23V20H20V23H18V20H15V18H18V15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledDomainPlus.svg',
  mixins: [icon]
};
</script>