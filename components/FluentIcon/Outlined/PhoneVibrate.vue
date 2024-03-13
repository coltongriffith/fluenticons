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
<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2h7.5Zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75Zm-2.501 14a.75.75 0 0 1 .002 1.5l-2.5.004a.75.75 0 0 1-.002-1.5l2.5-.004Zm7.403-9.37.044.091.583 1.457a2.75 2.75 0 0 1-.244 2.514l-.11.157-.15.202a1.25 1.25 0 0 0-.207 1.077l.046.137.582 1.457a.75.75 0 0 1-1.348.649l-.044-.093-.583-1.456a2.75 2.75 0 0 1 .244-2.514l.11-.157.15-.202a1.25 1.25 0 0 0 .207-1.077l-.046-.137-.582-1.456a.75.75 0 0 1 1.288-.74l.06.09Zm-16.5 0 .044.091.583 1.457a2.75 2.75 0 0 1-.244 2.514l-.11.157-.15.202a1.25 1.25 0 0 0-.207 1.077l.046.137.582 1.457a.75.75 0 0 1-1.348.649l-.044-.093-.583-1.456a2.75 2.75 0 0 1 .244-2.514l.11-.157.15-.202a1.25 1.25 0 0 0 .207-1.077l-.046-.137-.582-1.456a.75.75 0 0 1 1.287-.74l.061.09Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPhoneVibrate',
    mixins: [icon]
};
</script>