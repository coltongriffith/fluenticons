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
<path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v5.762a3.279 3.279 0 0 0-2.607.95L15.355 15H11.25a.75.75 0 1 0 0 1.5h2.605l-1.365 1.365a3.685 3.685 0 0 0-.97 1.712L11.166 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25Zm4.75 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.5-1.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm0 3.75a.75.75 0 1 0 0 1.5h5.5a.75.75 0 1 0 0-1.5h-5.5Zm-4.5.75a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm1 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm11.35-4.08-5.903 5.902a2.686 2.686 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.685 2.685 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextBulletListSquareEdit',
    mixins: [icon]
};
</script>