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
<path d="M18 3h-3a1 1 0 0 0-1 1v15.25a1 1 0 0 0 1 1h3.875a4.875 4.875 0 0 0 2.44-9.097A4.75 4.75 0 0 0 18 3Zm0 7.5h-2V5h2a2.75 2.75 0 1 1 0 5.5Zm-2 7.75V12.5h2.875a2.875 2.875 0 0 1 0 5.75H16ZM7.257 3a1 1 0 0 1 .934.66l5.5 15.25a1 1 0 0 1-1.881.68L10.515 16h-6.72l-1.359 3.603a1 1 0 0 1-1.871-.706l5.75-15.25A1 1 0 0 1 7.257 3ZM4.55 14h5.245L7.229 6.89 4.55 14Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextCaseUppercase',
    mixins: [icon]
};
</script>