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
<path d="M19 17.975v-.136c1.174-.49 2-1.649 2-3V6.25A3.25 3.25 0 0 0 17.75 3h-8.5a3.251 3.251 0 0 0-3.093 2.25h-.201c-.912 0-1.688.321-2.222.954C3.216 6.817 3 7.634 3 8.5v8.75c0 1.06.383 2.014 1.11 2.7.726.683 1.733 1.045 2.89 1.045h3.92l4.076.005h.002c.976.005 1.943-.2 2.693-.68.78-.5 1.309-1.295 1.309-2.345ZM5.956 6.75H6v8.088a3.25 3.25 0 0 0 3.25 3.25h8.246c-.032.418-.242.73-.614.968-.433.278-1.09.448-1.878.444H15l-4.082-.005H7c-.843 0-1.46-.26-1.86-.637-.398-.374-.64-.918-.64-1.608V8.5c0-.635.16-1.067.38-1.329.205-.242.532-.421 1.076-.421Zm6.066-.25h4.728a.75.75 0 0 1 .75.75v4.729a.75.75 0 0 1-1.5 0V9.06l-5.22 5.22a.75.75 0 1 1-1.06-1.061L14.94 8h-2.918a.75.75 0 1 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWindowNew',
    mixins: [icon]
};
</script>