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
<path d="M18.75 22A3.25 3.25 0 0 0 22 18.75v-8a3.25 3.25 0 0 0-3.25-3.25H17.5V9h1.25c.966 0 1.75.784 1.75 1.75v8a1.75 1.75 0 0 1-1.75 1.75h-8A1.75 1.75 0 0 1 9 18.75V17.5H7.5v1.25A3.25 3.25 0 0 0 10.75 22h8Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13.25 16.5a3.25 3.25 0 0 0 3.25-3.25v-8A3.25 3.25 0 0 0 13.25 2h-8A3.25 3.25 0 0 0 2 5.25v8a3.25 3.25 0 0 0 3.25 3.25h8ZM15 13.25A1.75 1.75 0 0 1 13.25 15h-.78L15 12.47v.78Zm0-2.781L10.469 15h-2L15 8.469v2ZM6.348 15H5.25c-.231 0-.452-.045-.655-.127L14.873 4.595c.082.203.127.424.127.655v1.098L6.348 15Zm-2.77-1.23a1.75 1.75 0 0 1-.078-.52v-1.281L11.969 3.5h1.281c.18 0 .355.027.52.078L3.577 13.77ZM3.5 9.847V7.969L7.969 3.5h1.879L3.5 9.848Zm0-4V5.25c0-.966.784-1.75 1.75-1.75h.598L3.5 5.848Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPositionForward',
    mixins: [icon]
};
</script>