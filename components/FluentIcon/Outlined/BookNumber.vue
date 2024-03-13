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
<path d="m11.024 7.57-.223.91H9.73l-.102.007a.75.75 0 0 0-.648.743l.007.102a.75.75 0 0 0 .743.648h.703l-.388 1.586-.796.001-.102.007a.75.75 0 0 0-.648.743l.007.102a.75.75 0 0 0 .743.648h.429l-.123.506-.018.1a.75.75 0 0 0 .568.807l.1.018a.75.75 0 0 0 .807-.568l.21-.864h1.539l-.118.518-.016.1a.75.75 0 0 0 .58.799l.1.016a.75.75 0 0 0 .799-.58l.194-.853.94.001.102-.007a.75.75 0 0 0 .649-.743l-.007-.102a.75.75 0 0 0-.743-.648h-.597l.363-1.587h.72l.102-.007a.75.75 0 0 0 .648-.743l-.007-.101a.75.75 0 0 0-.743-.649h-.376l.13-.564.016-.1a.75.75 0 0 0-.58-.798l-.1-.016a.75.75 0 0 0-.798.58l-.207.898h-1.468l.136-.553.018-.1a.75.75 0 0 0-1.475-.256Zm.954 2.41h1.49l-.362 1.586H11.59l.388-1.586Z" :fill="fill" :fill-opacity="opacity" />

<path d="M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2H6.5ZM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1V18Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBookNumber',
    mixins: [icon]
};
</script>