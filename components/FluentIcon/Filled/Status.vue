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
<path d="M12 3c1.248 0 2.436.254 3.516.713l-1.155 1.166a7.5 7.5 0 1 0 4.781 4.826l1.165-1.174A9 9 0 1 1 12 3Zm9.163-.427.138.128c.938.938.941 2.456.008 3.398l-6.755 6.816a1 1 0 0 1-.41.25l-4.348 1.37a.2.2 0 0 1-.25-.251l1.371-4.353a1 1 0 0 1 .244-.403l6.758-6.819a2.387 2.387 0 0 1 3.244-.136Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledStatus',
    mixins: [icon]
};
</script>