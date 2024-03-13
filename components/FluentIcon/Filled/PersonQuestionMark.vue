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
<path d="M12.022 14A6.47 6.47 0 0 0 11 17.5c0 1.63.6 3.12 1.592 4.261-.796.16-1.66.24-2.592.24-3.42 0-5.944-1.072-7.486-3.237a2.75 2.75 0 0 1-.51-1.595v-.92a2.249 2.249 0 0 1 2.249-2.25h7.77Zm5.478-2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 7.75a.625.625 0 1 0 0 1.25.625.625 0 0 0 0-1.25Zm0-5.876c-1.048 0-1.864.817-1.853 1.954a.5.5 0 1 0 1-.01c-.006-.579.36-.944.853-.944.473 0 .854.392.854.95 0 .192-.056.342-.224.56l-.094.117-.1.113-.265.29-.136.157c-.384.457-.535.793-.535 1.31a.5.5 0 1 0 1 0c0-.203.059-.359.239-.59l.085-.104.1-.116.267-.29.134-.155c.378-.45.529-.783.529-1.293 0-1.103-.823-1.95-1.854-1.95ZM10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPersonQuestionMark',
    mixins: [icon]
};
</script>