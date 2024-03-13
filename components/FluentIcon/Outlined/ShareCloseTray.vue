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
<path d="M2 17.75A2.25 2.25 0 0 0 4.25 20h15.5A2.25 2.25 0 0 0 22 17.75V6.25A2.25 2.25 0 0 0 19.75 4H4.25A2.25 2.25 0 0 0 2 6.25v11.5Zm2.25.75a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75H4.25ZM12 16.755a.75.75 0 0 0 .53-.22l3.255-3.255a.75.75 0 1 0-1.06-1.06l-1.975 1.974V7.747a.75.75 0 0 0-1.5 0v6.445L9.28 12.22a.75.75 0 1 0-1.06 1.06l3.25 3.255c.14.14.33.22.53.22Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShareCloseTray',
    mixins: [icon]
};
</script>