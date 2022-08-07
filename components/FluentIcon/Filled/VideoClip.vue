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
<path d="M6.25 4h11.5a3.25 3.25 0 0 1 3.245 3.066L21 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L17.75 20H6.25a3.25 3.25 0 0 1-3.245-3.066L3 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245L6.25 4h11.5-11.5Zm3.803 5.585A.5.5 0 0 0 10 9.81v4.382a.5.5 0 0 0 .724.447l4.382-2.19a.5.5 0 0 0 0-.895l-4.382-2.191a.5.5 0 0 0-.671.223Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledVideoClip',
    mixins: [icon]
};
</script>