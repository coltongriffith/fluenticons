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
<path d="M4.748 4A2.748 2.748 0 0 0 2 6.75v10.496c0 1.518 1.23 2.749 2.748 2.749h7.82a2.5 2.5 0 0 1 .17-3.347l4.913-4.916a2.497 2.497 0 0 1 3.532 0l.8.8V6.75c0-1.518-1.23-2.749-2.747-2.749H4.748Zm15.729 8.439a1.498 1.498 0 0 0-2.12 0l-3.108 3.11 4.204 4.205 3.108-3.11a1.5 1.5 0 0 0 0-2.12l-2.084-2.085Zm-7.033 4.916 1.099-1.1 4.203 4.206-1.099 1.1a1.498 1.498 0 0 1-2.12 0l-2.083-2.085a1.5 1.5 0 0 1 0-2.121Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSlideEraser',
    mixins: [icon]
};
</script>