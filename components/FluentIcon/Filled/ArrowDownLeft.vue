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
<path d="m4.999 17.585 14.292-14.29a1 1 0 0 1 1.498 1.32l-.084.094L6.413 19h5.088a1 1 0 0 1 .993.884L12.5 20a1 1 0 0 1-.884.994l-.116.006L3.94 21l-.096-.01-.077-.015-.077-.022-.07-.026-.09-.042-.089-.053-.091-.07.032.027a1.006 1.006 0 0 1-.166-.166l-.051-.07-.04-.064-.032-.064-.034-.082-.025-.08-.024-.111-.007-.061-.004-.09v-7.503a1 1 0 0 1 1.993-.117l.007.117v5.088l14.292-14.29L5 17.585Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowDownLeft',
    mixins: [icon]
};
</script>