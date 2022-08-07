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
<path d="M19.248 7.504a2.752 2.752 0 1 0 0-5.504H4.75a2.752 2.752 0 0 0 0 5.504h14.498ZM17.248 14.504a2.752 2.752 0 1 0 0-5.504H6.75a2.752 2.752 0 0 0 0 5.504h10.498ZM17 18.752A2.752 2.752 0 0 0 14.248 16H9.75a2.752 2.752 0 0 0 0 5.504h4.498A2.752 2.752 0 0 0 17 18.752Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDataFunnel',
    mixins: [icon]
};
</script>