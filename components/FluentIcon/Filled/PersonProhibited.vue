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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.477 1.999a6.47 6.47 0 0 0-1.023 3.5c0 1.645.61 3.146 1.616 4.29-.801.142-1.674.212-2.616.212-2.89 0-5.128-.657-6.691-2a3.75 3.75 0 0 1-1.305-2.844v-.907A2.25 2.25 0 0 1 4.254 14l7.769-.001Zm8.786 1.253-5.557 5.557a4 4 0 0 0 5.557-5.557ZM17.5 13.5a4 4 0 0 0-3.31 6.247l5.558-5.556A3.982 3.982 0 0 0 17.5 13.5ZM10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPersonProhibited',
    mixins: [icon]
};
</script>