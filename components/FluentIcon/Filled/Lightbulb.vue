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
<path d="m15.538 18.999-.29 1.259a2.25 2.25 0 0 1-2.02 1.735l-.173.007h-2.111a2.25 2.25 0 0 1-2.147-1.577l-.046-.167-.29-1.257h7.077ZM12 2.001a7.25 7.25 0 0 1 7.25 7.25c0 2.136-.936 4.093-2.765 5.84a.25.25 0 0 0-.071.125l-.528 2.283H8.114l-.526-2.283a.25.25 0 0 0-.071-.124C5.687 13.344 4.75 11.387 4.75 9.25A7.25 7.25 0 0 1 12 2.001Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLightbulb',
    mixins: [icon]
};
</script>