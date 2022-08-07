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
<path d="m11.698 12.974 2.682 2.237-2.876 3.117v-5.193l.194-.161Zm1.171-.976 3.077-2.564a.75.75 0 0 0 .071-1.085l-4.711-5.104a.75.75 0 0 0-1.302.508v5.855l-1.12-.934a.75.75 0 1 0-.96 1.152l2.08 1.735v.871l-2.08 1.734a.75.75 0 0 0 .96 1.152l1.12-.934v5.863a.75.75 0 0 0 1.302.508l4.711-5.106a.75.75 0 0 0-.07-1.085l-3.078-2.566Zm-1.17-.977-.195-.162V5.672l2.876 3.115-2.682 2.234Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBluetooth',
    mixins: [icon]
};
</script>