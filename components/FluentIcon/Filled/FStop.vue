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
<path d="M13.442 6.57a3 3 0 0 1 3.94-2.33l.59.205a1 1 0 0 0 .656-1.89l-.592-.205a5 5 0 0 0-6.566 3.883l-.728 4.267H7a1 1 0 0 0 0 2h3.4l-.69 4.042a3 3 0 0 1-4.403 2.123l-.075-.041a1 1 0 0 0-.964 1.752l.076.042c3.012 1.657 6.76-.15 7.338-3.54l.747-4.378H16a1 1 0 1 0 0-2h-3.23l.672-3.93Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFStop',
    mixins: [icon]
};
</script>