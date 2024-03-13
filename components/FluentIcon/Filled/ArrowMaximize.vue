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
<path d="m12.497 3.002 7.555.001.121.014.088.02.104.034.09.04.063.036.063.042.064.05.063.058.094.11.072.11.053.114.035.105.016.065.01.053.01.148v7.504a1 1 0 0 1-1.993.117l-.007-.117v-5.09L6.413 19h5.088a1 1 0 0 1 .993.884L12.5 20a1 1 0 0 1-.884.994l-.116.006L3.94 21l-.096-.01-.077-.015-.077-.022-.07-.026-.09-.042-.089-.053-.091-.07.032.027a1.006 1.006 0 0 1-.166-.166l-.051-.07-.04-.064-.032-.064-.034-.082-.025-.08-.024-.111-.007-.061-.004-.09v-7.503a1 1 0 0 1 1.993-.117l.007.117v5.088L17.583 5.002h-5.086a1 1 0 0 1-.993-.883l-.007-.117a1 1 0 0 1 1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowMaximize',
    mixins: [icon]
};
</script>