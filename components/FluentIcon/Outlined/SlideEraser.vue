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
<path d="M2 6.75C2 5.23 3.23 4 4.748 4h14.488a2.749 2.749 0 0 1 2.748 2.75v5.783l-.8-.8a2.494 2.494 0 0 0-.699-.494V6.75c0-.69-.56-1.25-1.249-1.25H4.748c-.69 0-1.25.56-1.25 1.25v10.497c0 .69.56 1.25 1.25 1.25h7.259c.017.533.204 1.062.56 1.499h-7.82A2.749 2.749 0 0 1 2 17.245V6.75Zm18.477 5.689a1.498 1.498 0 0 0-2.12 0l-3.108 3.11 4.204 4.205 3.108-3.11a1.5 1.5 0 0 0 0-2.12l-2.084-2.085Zm-7.033 4.916 1.099-1.1 4.203 4.206-1.099 1.1a1.498 1.498 0 0 1-2.12 0l-2.083-2.085a1.5 1.5 0 0 1 0-2.121Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSlideEraser',
    mixins: [icon]
};
</script>