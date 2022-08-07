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
<path d="M12 2a2.75 2.75 0 0 0-.75 5.396v3.854a.75.75 0 0 0 1.5 0V7.396A2.751 2.751 0 0 0 12 2Zm-1.25 2.75a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0ZM3 6.5a2.5 2.5 0 0 1 5 0V10h2.25v1.5H6.5v-5a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0v-5H11v5a1 1 0 1 0 2 0v-5h6a.5.5 0 0 0 .5-.5V6.5a1 1 0 1 0-2 0v5h-3.75V10H16V6.5a2.5 2.5 0 0 1 5 0V13a2 2 0 0 1-2 2h-4.5v3.5a2.5 2.5 0 0 1-5 0V15H8v3.5a2.5 2.5 0 0 1-5 0v-12Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTransmission',
    mixins: [icon]
};
</script>