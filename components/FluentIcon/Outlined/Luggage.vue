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
<path d="M7 10.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M9 3.5h-.25a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 0 1.5H15V5h1.75A3.25 3.25 0 0 1 20 8.25v9a3.25 3.25 0 0 1-3 3.24v.76a.75.75 0 0 1-1.5 0v-.75h-7v.75a.75.75 0 0 1-1.5 0v-.76a3.25 3.25 0 0 1-3-3.24v-9A3.25 3.25 0 0 1 7.25 5H9V3.5Zm1.5 0V5h3V3.5h-3ZM16.75 19a1.75 1.75 0 0 0 1.75-1.75v-9a1.75 1.75 0 0 0-1.75-1.75h-9.5A1.75 1.75 0 0 0 5.5 8.25v9c0 .966.784 1.75 1.75 1.75h9.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedLuggage',
    mixins: [icon]
};
</script>