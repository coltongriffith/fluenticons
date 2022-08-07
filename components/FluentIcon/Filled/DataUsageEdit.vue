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
<path d="M20 4.747a2.75 2.75 0 0 0-2.75-2.75H4.75A2.75 2.75 0 0 0 2 4.747v12.5a2.75 2.75 0 0 0 2.75 2.75h6.666l.105-.42c.162-.648.497-1.24.97-1.712l2.158-2.159a.713.713 0 0 1-.149-.435V6.729a.74.74 0 0 1 .75-.73.74.74 0 0 1 .75.73v7.626l2.393-2.393A3.27 3.27 0 0 1 20 11.08V4.747Zm-14 4C6 8.334 6.336 8 6.75 8s.75.334.75.747v6.506a.748.748 0 0 1-.75.747.748.748 0 0 1-.75-.747V8.747Zm4.25 2.983a.73.73 0 0 1 .725-.733.73.73 0 0 1 .74.719l.035 3.547a.73.73 0 0 1-.725.734.73.73 0 0 1-.74-.72l-.035-3.547Zm8.85.94-5.903 5.902a2.686 2.686 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.686 2.686 0 0 0 1.248-.707l5.902-5.902a2.286 2.286 0 0 0-3.232-3.233Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDataUsageEdit',
    mixins: [icon]
};
</script>