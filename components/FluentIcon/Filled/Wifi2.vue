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
<path d="M10.96 16.44a1.501 1.501 0 1 1 2.122 2.122 1.501 1.501 0 0 1-2.123-2.122Zm-2.604-2.742a5.233 5.233 0 0 1 7.4 0c.46.461.838 1.025 1.101 1.625a1 1 0 1 1-1.832.803 3.358 3.358 0 0 0-.683-1.013 3.233 3.233 0 0 0-4.572 0 3.254 3.254 0 0 0-.672 1 1 1 0 1 1-1.832-.802 5.25 5.25 0 0 1 1.09-1.613ZM6.31 10.707a8.128 8.128 0 0 1 11.495 0 8.353 8.353 0 0 1 1.503 2.085 1 1 0 0 1-1.78.91 6.357 6.357 0 0 0-1.137-1.581 6.128 6.128 0 0 0-9.8 1.562 1 1 0 1 1-1.785-.902 8.08 8.08 0 0 1 1.504-2.074Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWifi2',
    mixins: [icon]
};
</script>