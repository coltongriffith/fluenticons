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
<path d="M13 6.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0ZM12.81 13 4 13a2 2 0 0 0-2 2V16.5l.005.23C2.165 20.044 5.778 21 8.5 21c1.03 0 2.189-.137 3.239-.487A6.472 6.472 0 0 1 11 17.5c0-1.746.689-3.332 1.81-4.5ZM17.5 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM17.5 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5Zm0 7.125a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPeopleError',
    mixins: [icon]
};
</script>