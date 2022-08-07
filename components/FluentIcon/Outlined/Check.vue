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
<path d="M21.78 5.78a.75.75 0 0 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06l7.5-7.5Zm.167 1.248c.035.169.053.343.053.522v6.9A2.55 2.55 0 0 1 19.45 17H4.55A2.55 2.55 0 0 1 2 14.45v-6.9A2.55 2.55 0 0 1 4.55 5h14.475l-1.5 1.5H4.55c-.58 0-1.05.47-1.05 1.05v6.9c0 .58.47 1.05 1.05 1.05h14.9c.58 0 1.05-.47 1.05-1.05V8.475l1.447-1.447ZM4.5 9.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCheck',
    mixins: [icon]
};
</script>