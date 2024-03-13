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
<path d="M16 16.25a3.25 3.25 0 0 1-3.25 3.25h-7.5A3.25 3.25 0 0 1 2 16.25v-8.5A3.25 3.25 0 0 1 5.25 4.5h7.5A3.25 3.25 0 0 1 16 7.75v8.5Zm5.762-10.357a1 1 0 0 1 .238.648v10.918a1 1 0 0 1-1.648.762L17 15.37V8.628l3.352-2.849a1 1 0 0 1 1.41.114Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledVideo',
    mixins: [icon]
};
</script>