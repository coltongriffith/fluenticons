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
<path d="M22.452 1.923a.75.75 0 0 1 0 1.06L16.14 9.296a6.814 6.814 0 0 0-1.067-1.053l6.32-6.32a.75.75 0 0 1 1.06 0ZM15.028 9.347a5.75 5.75 0 0 0-8.132 0l-.244.244 8.132 8.132.244-.244a5.75 5.75 0 0 0 0-8.132ZM1.884 12.966l3.613-2.409 8.32 8.321-2.408 3.613a.75.75 0 0 1-1.154.115L1.769 14.12a.75.75 0 0 1 .115-1.154Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBroom',
    mixins: [icon]
};
</script>