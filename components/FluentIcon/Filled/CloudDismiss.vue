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
<path d="M6.087 7.75a5.752 5.752 0 0 1 11.326 0h.087a4 4 0 0 1 3.962 4.552 6.501 6.501 0 0 0-11.42 3.448H6a4 4 0 0 1 0-8h.087ZM16.5 22a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Zm-2.354-7.854a.5.5 0 0 1 .708 0l1.646 1.647 1.646-1.647a.5.5 0 0 1 .708.708L17.207 16.5l1.647 1.646a.5.5 0 0 1-.708.708L16.5 17.207l-1.646 1.647a.5.5 0 0 1-.708-.708l1.647-1.646-1.647-1.646a.5.5 0 0 1 0-.708Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCloudDismiss',
    mixins: [icon]
};
</script>