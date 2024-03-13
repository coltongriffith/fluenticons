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
<path d="M4 5.25A3.25 3.25 0 0 1 7.25 2h5.464a3.25 3.25 0 0 1 2.299.952l4.035 4.035c.61.61.952 1.437.952 2.299v9.464A3.25 3.25 0 0 1 16.75 22h-9.5A3.25 3.25 0 0 1 4 18.75V5.25ZM7.75 14H12v-3.25H9.25a1.5 1.5 0 0 0-1.5 1.5V14Zm0 1.5v1.25a1.5 1.5 0 0 0 1.5 1.5H12V15.5H7.75Zm5.75 2.75h1.25a1.5 1.5 0 0 0 1.5-1.5v-4.5a1.5 1.5 0 0 0-1.5-1.5H13.5v7.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSim',
    mixins: [icon]
};
</script>