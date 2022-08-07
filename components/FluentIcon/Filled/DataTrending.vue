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
<path d="M5.25 4.25a1 1 0 0 0-2 0v14a2.5 2.5 0 0 0 2.5 2.5h14a1 1 0 1 0 0-2h-14a.5.5 0 0 1-.5-.5v-14ZM14 7a1 1 0 0 1 1-1h4.502a1 1 0 0 1 1 1l-.002 4.5a1 1 0 1 1-2 0V9.414l-4.543 4.543a1 1 0 0 1-1.414 0l-1.793-1.793-2.543 2.543a1 1 0 0 1-1.414-1.414l3.25-3.25a1 1 0 0 1 1.414 0l1.793 1.793L17.086 8H15a1 1 0 0 1-1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDataTrending',
    mixins: [icon]
};
</script>