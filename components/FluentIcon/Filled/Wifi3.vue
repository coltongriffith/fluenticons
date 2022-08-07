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
<path d="M10.938 16.446a1.501 1.501 0 1 1 2.123 2.123 1.501 1.501 0 0 1-2.123-2.123Zm-2.603-2.742a5.233 5.233 0 0 1 7.4 0c.46.461.838 1.025 1.101 1.625a1 1 0 0 1-1.832.803 3.356 3.356 0 0 0-.683-1.013 3.233 3.233 0 0 0-4.572 0 3.255 3.255 0 0 0-.672 1 1 1 0 1 1-1.832-.802 5.25 5.25 0 0 1 1.09-1.613Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWifi3',
    mixins: [icon]
};
</script>