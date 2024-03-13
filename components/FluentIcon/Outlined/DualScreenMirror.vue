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
<path d="M17.17 9.414a.75.75 0 0 0-1.341 0l-2.25 4.5a.75.75 0 0 0 .67 1.086h4.5a.75.75 0 0 0 .672-1.086l-2.25-4.5ZM15.464 13.5l1.037-2.073 1.036 2.073h-2.073ZM7.5 9a.75.75 0 0 1 .67.414l2.25 4.5A.75.75 0 0 1 9.75 15h-4.5a.75.75 0 0 1-.671-1.086l2.25-4.5A.75.75 0 0 1 7.499 9Zm0 2.427L6.463 13.5h2.073L7.5 11.427Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12.754 4.001v.002h7.498c.966 0 1.75.784 1.75 1.75v12.495a1.75 1.75 0 0 1-1.75 1.75h-8.998v-.002H3.757a1.75 1.75 0 0 1-1.75-1.75V5.751c0-.967.783-1.75 1.75-1.75h8.997Zm7.498 1.502h-7.498v12.995h7.498a.25.25 0 0 0 .25-.25V5.754a.25.25 0 0 0-.25-.25Zm-8.998-.002H3.757a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.497V5.501Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDualScreenMirror',
    mixins: [icon]
};
</script>