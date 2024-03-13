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
<path d="M7 18h13a.75.75 0 0 1 .102 1.493L20 19.5H7a.75.75 0 0 1-.102-1.493L7 18Zm10-3a.75.75 0 0 1 .102 1.493L17 16.5H4a.75.75 0 0 1-.102-1.493L4 15h13Zm3-3a.75.75 0 0 1 .102 1.493L20 13.5H7a.75.75 0 0 1-.102-1.493L7 12h13ZM6 5a2.75 2.75 0 0 1 2.55 1.717.75.75 0 0 1-1.346.655l-.045-.091A1.25 1.25 0 1 0 6 9h11.5a.75.75 0 0 1 .102 1.493l-.102.007H6A2.75 2.75 0 0 1 6 5Zm14 1a.75.75 0 0 1 .102 1.493L20 7.5h-9a.75.75 0 0 1-.102-1.493L11 6h9Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedReadingList',
    mixins: [icon]
};
</script>