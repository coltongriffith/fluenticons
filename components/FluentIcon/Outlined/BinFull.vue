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
<path d="M17.38 2.344a.75.75 0 0 1-.224 1.037L5.304 11H9.5v-.75c0-.966.784-1.75 1.75-1.75h3.25v-.75c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75V11h.25a.75.75 0 0 1 .75.75v7A3.25 3.25 0 0 1 18.75 22H5.25A3.25 3.25 0 0 1 2 18.75v-7a.75.75 0 0 1 .344-.63l14-9a.75.75 0 0 1 1.037.224ZM19.5 11V7.75a.25.25 0 0 0-.25-.25h-3a.25.25 0 0 0-.25.25V11h3.5Zm-5 0v-1h-3.25a.25.25 0 0 0-.25.25V11h3.5Zm-11 1.5v6.25c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V12.5h-17Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBinFull',
    mixins: [icon]
};
</script>