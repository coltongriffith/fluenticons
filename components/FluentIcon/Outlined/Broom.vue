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
<path d="M22.452 1.923a.75.75 0 0 1 0 1.06l-6.928 6.929a5.751 5.751 0 0 1-.496 7.567l-.832.832-2.787 4.18a.75.75 0 0 1-1.154.115L1.769 14.12a.75.75 0 0 1 .115-1.154l4.18-2.787.832-.832a5.751 5.751 0 0 1 7.567-.496l6.929-6.928a.75.75 0 0 1 1.06 0ZM7.603 10.762l6.01 6.01.354-.353a4.25 4.25 0 0 0-6.01-6.01l-.354.353Zm-1.156.965-2.97 1.98 7.191 7.191 1.98-2.97-6.201-6.201Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBroom',
    mixins: [icon]
};
</script>