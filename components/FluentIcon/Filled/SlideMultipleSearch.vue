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
<path d="M5.25 3A3.25 3.25 0 0 0 2 6.25v6.007a5.477 5.477 0 0 1 2.5-1.166V8.75A3.25 3.25 0 0 1 7.75 5.5H19v-.25A2.25 2.25 0 0 0 16.75 3H5.25Zm14.5 17.5h-7.775l-1.55-1.55A5.5 5.5 0 0 0 5.5 11V8.75A2.25 2.25 0 0 1 7.75 6.5h12A2.25 2.25 0 0 1 22 8.75v9.5a2.25 2.25 0 0 1-2.25 2.25Zm-11.643-.332a4.5 4.5 0 1 1 1.06-1.06l2.613 2.612a.75.75 0 1 1-1.06 1.06l-2.613-2.612ZM2.5 16.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSlideMultipleSearch',
    mixins: [icon]
};
</script>