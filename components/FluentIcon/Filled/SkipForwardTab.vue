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
<path d="M22 3.25a1 1 0 1 0-2 0v2.729c-1.068-1.08-2.378-1.971-3.954-2.46a11.435 11.435 0 0 0-7.394.197c-2.364.88-4.604 2.664-5.779 4.807a1 1 0 0 0 1.754.961c.911-1.662 2.74-3.156 4.722-3.893a9.435 9.435 0 0 1 6.106-.16c1.474.456 2.697 1.39 3.682 2.569H15.75a1 1 0 1 0 0 2H21a1 1 0 0 0 1-1V3.25ZM6 15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4Zm2 .5v3a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSkipForwardTab',
    mixins: [icon]
};
</script>