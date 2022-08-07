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
<path d="M13.195 6.528a3.25 3.25 0 0 1 4.268-2.524l.592.205a.75.75 0 1 0 .49-1.418l-.59-.205a4.75 4.75 0 0 0-6.238 3.69l-.722 4.224H6.75a.75.75 0 0 0 0 1.5h3.99l-.783 4.584c-.376 2.202-2.812 3.377-4.77 2.3l-.075-.041a.75.75 0 0 0-.723 1.314l.075.042c2.862 1.574 6.422-.144 6.971-3.363L12.261 12h3.99a.75.75 0 0 0 0-1.5h-3.734l.678-3.972Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedFStop',
    mixins: [icon]
};
</script>