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
<path d="M12 2a2.75 2.75 0 0 0-.75 5.396v3.854a.75.75 0 0 0 1.5 0V7.396A2.751 2.751 0 0 0 12 2ZM5.5 4A2.5 2.5 0 0 0 3 6.5v12a2.5 2.5 0 0 0 5 0V15h1.5v3.5a2.5 2.5 0 0 0 5 0V15H19a2 2 0 0 0 2-2V6.5a2.5 2.5 0 0 0-5 0V10h-2.25v1.5h3.75v-5a1 1 0 1 1 2 0V13a.5.5 0 0 1-.5.5h-6v5a1 1 0 1 1-2 0v-5H6.5v5a1 1 0 1 1-2 0v-12a1 1 0 0 1 2 0v5h3.75V10H8V6.5A2.5 2.5 0 0 0 5.5 4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTransmission',
    mixins: [icon]
};
</script>