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
<path d="M16 9.5c0 .659-.238 1.232-.621 1.682a3.5 3.5 0 1 1-4.757 0A2.561 2.561 0 0 1 10 9.5c0-1.64 1.473-2.75 3-2.75s3 1.11 3 2.75Zm-3-.75c-.682 0-1 .457-1 .75s.318.75 1 .75c.682 0 1-.457 1-.75s-.318-.75-1-.75Zm-1.5 5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM7.75 17a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm9.543-4.707a1 1 0 0 1 1.414 0l.793.793.793-.793a1 1 0 0 1 1.414 1.414l-.793.793.793.793a1 1 0 0 1-1.414 1.414l-.793-.793-.793.793a1 1 0 0 1-1.414-1.414l.793-.793-.793-.793a1 1 0 0 1 0-1.414ZM6 7.902a1 1 0 0 0-1.854-.52l-.073.12c-.403.667-.842 1.393-2.087 2.14a1 1 0 1 0 1.029 1.716c.377-.227.703-.457.985-.686V16a1 1 0 0 0 2 0V7.902Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledMultiplier18x',
    mixins: [icon]
};
</script>