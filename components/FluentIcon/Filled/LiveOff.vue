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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l2.202 2.203c-3.392 3.93-3.223 9.872.506 13.601a1 1 0 0 0 1.415-1.414A8.004 8.004 0 0 1 5.84 6.902l1.521 1.52a5.922 5.922 0 0 0 .533 7.763A1 1 0 0 0 9.31 14.77a3.922 3.922 0 0 1-.513-4.913l1.836 1.836a1.5 1.5 0 0 0 1.838 1.838l8.25 8.25a.75.75 0 0 0 1.06-1.061L3.28 2.22ZM19.028 15.846l1.461 1.462c2.414-3.861 1.943-9.012-1.415-12.37a1 1 0 1 0-1.414 1.415 8.006 8.006 0 0 1 1.368 9.493Z" :fill="fill" :fill-opacity="opacity" />

<path d="m15.93 12.748 1.59 1.591a5.922 5.922 0 0 0-1.252-6.527 1 1 0 1 0-1.415 1.414 3.916 3.916 0 0 1 1.077 3.522Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLiveOff',
    mixins: [icon]
};
</script>