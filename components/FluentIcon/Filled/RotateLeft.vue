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
<path d="M14.5 15a.75.75 0 0 1 0-1.5h.5c2.485 0 4.5-1.567 4.5-3.5 0-1.874-1.895-3.405-4.275-3.496L15 6.5H8.061l1.72 1.72a.75.75 0 0 1-.977 1.133L8.72 9.28l-3-3a.75.75 0 0 1 0-1.06l3-3 .084-.073A.75.75 0 0 1 9.78 3.28L8.062 5H15c3.314 0 6 2.239 6 5s-2.686 5-6 5h-.5ZM3.5 10.367a.5.5 0 0 0-.5.5V20a1 1 0 0 0 1 1h16.138a.5.5 0 0 0 .251-.933L3.751 10.434a.5.5 0 0 0-.251-.067Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledRotateLeft',
    mixins: [icon]
};
</script>