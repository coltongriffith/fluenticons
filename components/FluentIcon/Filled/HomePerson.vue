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
<path d="M10.55 2.533a2.25 2.25 0 0 1 2.9 0l6.75 5.694c.508.428.8 1.057.8 1.72v2.819A3 3 0 0 0 16.762 17h-.514c-.706 0-1.336.325-1.748.833V14.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v5a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 3 19.75V9.947c0-.663.292-1.292.8-1.72l6.75-5.694ZM17 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-.75 3c-.69 0-1.25.56-1.25 1.25v.003l.001.298.008.106a2.99 2.99 0 0 0 .519 1.38c.546.78 1.586 1.463 3.472 1.463s2.926-.683 3.472-1.463a2.99 2.99 0 0 0 .519-1.38l.008-.106c.003-.07.002-.142.002-.213L23 19.25c0-.69-.56-1.25-1.25-1.25h-5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledHomePerson',
    mixins: [icon]
};
</script>