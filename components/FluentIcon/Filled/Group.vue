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
<path d="M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" :fill="fill" :fill-opacity="opacity" />

<path d="M7.83 6a2.995 2.995 0 0 0 0-2h4.67A2.5 2.5 0 0 1 15 6.5V9h2.5a2.5 2.5 0 0 1 2.5 2.5v4.67a2.997 2.997 0 0 0-2 0V11.5a.5.5 0 0 0-.5-.5H15v1.5a2.5 2.5 0 0 1-2.5 2.5H11v2.5a.5.5 0 0 0 .5.5h4.67a2.997 2.997 0 0 0 0 2H11.5A2.5 2.5 0 0 1 9 17.5V15H6.5A2.5 2.5 0 0 1 4 12.5V7.83a2.995 2.995 0 0 0 2 0v4.67a.5.5 0 0 0 .5.5H9v-1.5A2.5 2.5 0 0 1 11.5 9H13V6.5a.5.5 0 0 0-.5-.5H7.83ZM13 12.5V11h-1.5a.5.5 0 0 0-.5.5V13h1.5a.5.5 0 0 0 .5-.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledGroup',
    mixins: [icon]
};
</script>