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
<path d="m3.28 2.22 18.5 18.5a.75.75 0 0 1-1.06 1.06l-1.264-1.263A3.234 3.234 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25c0-.626.177-1.21.483-1.706L2.22 3.28a.75.75 0 1 1 1.06-1.06Zm15.058 17.179L4.6 5.662a1.747 1.747 0 0 0-.101.588v11.5c0 .966.783 1.75 1.75 1.75h11.5c.206 0 .404-.036.588-.101Zm-5.253-9.496 1.012 1.012a.752.752 0 0 0 .183-.135l5.22-5.22v4.69a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0 0 1.5h4.69l-5.22 5.22a.75.75 0 0 0-.135.183Zm7.914 7.914-1.5-1.5V13.75a.75.75 0 0 1 1.5 0v4.067ZM6.183 3.001 7.682 4.5h2.568a.75.75 0 0 0 0-1.5H6.183Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedOpenOff',
    mixins: [icon]
};
</script>