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
<path d="M8.31 10.248a.75.75 0 1 0-1.12-.997l-2 2.25a.75.75 0 0 0 0 .997l2 2.25a.75.75 0 1 0 1.12-.996l-.89-1.002h9.16l-.89 1.002a.75.75 0 1 0 1.12.996l2-2.25.01-.012a.747.747 0 0 0-.012-.987L16.81 9.251a.75.75 0 1 0-1.12.997l.89 1.002H7.42l.89-1.002Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12.754 4.001v.002h7.498c.966 0 1.75.784 1.75 1.75v12.495a1.75 1.75 0 0 1-1.75 1.75h-8.998v-.002H3.757a1.75 1.75 0 0 1-1.75-1.75V5.751c0-.967.783-1.75 1.75-1.75h8.997Zm7.498 1.502h-7.498V10.5h-1.5V5.5H3.757a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.497V13.5h1.5v4.998h7.498a.25.25 0 0 0 .25-.25V5.754a.25.25 0 0 0-.25-.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDualScreenSpan',
    mixins: [icon]
};
</script>