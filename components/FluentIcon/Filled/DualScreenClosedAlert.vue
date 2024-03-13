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
<path d="M16.499 2h.002A4.01 4.01 0 0 1 20.5 5.999v2.52l1.384 1.66A.5.5 0 0 1 21.5 11h-10a.5.5 0 0 1-.384-.82L12.5 8.519v-2.52A4.01 4.01 0 0 1 16.499 2ZM5.75 5h5.853a5.016 5.016 0 0 0-.103.996v2.16L10.348 9.54A1.5 1.5 0 0 0 11.5 12h2.17A3.001 3.001 0 0 0 17 13.959v4.791A2.25 2.25 0 0 1 14.75 21h-9a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 5.75 5Zm9.754 7.732a1.984 1.984 0 0 1-.727-.732h3.446a1.984 1.984 0 0 1-2.719.732Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDualScreenClosedAlert',
    mixins: [icon]
};
</script>