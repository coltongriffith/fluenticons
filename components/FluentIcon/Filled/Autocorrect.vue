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
<path d="M13.594 4.723a3 3 0 0 1 .948.947l2.872 4.58H21.5a1 1 0 0 1 0 2l-2.75-.002a5 5 0 1 1-4-1.999h.303l-.284-.452-1.922-3.064a1 1 0 0 0-1.626-.095l-.068.095L3.597 18.78a1 1 0 0 1-1.75-.96l.056-.103L9.459 5.67a3 3 0 0 1 4.135-.947Zm1.156 7.527a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAutocorrect',
    mixins: [icon]
};
</script>