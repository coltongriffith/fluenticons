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
<path d="M12 5a8 8 0 0 0-5.662 13.652 1 1 0 1 1-1.416 1.413A9.972 9.972 0 0 1 2 13C2 7.477 6.477 3 12 3s10 4.477 10 10a9.972 9.972 0 0 1-2.922 7.065 1 1 0 0 1-1.416-1.413A8 8 0 0 0 12 5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12 11a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" :fill="fill" :fill-opacity="opacity" />

<path d="M8 13a4 4 0 1 1 6.828 2.828 1 1 0 0 0 1.415 1.415 6 6 0 1 0-8.485 0 1 1 0 1 0 1.414-1.415A3.984 3.984 0 0 1 8 13Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCommunication',
    mixins: [icon]
};
</script>