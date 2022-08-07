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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM13.75 2A2.25 2.25 0 0 1 16 4.25v6.924A6.503 6.503 0 0 0 11.02 18H8.75a.75.75 0 0 0-.102 1.493l.102.007h2.5l.062-.003A6.496 6.496 0 0 0 12.81 22L6.25 22A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2h7.5Zm2.75 12a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h3.002a.5.5 0 0 0 0-1H17v-3.5a.5.5 0 0 0-.5-.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPhoneScreenTime',
    mixins: [icon]
};
</script>