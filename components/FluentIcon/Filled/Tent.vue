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
<path d="M12.262 2.202a.75.75 0 0 0-1.042.018l-1.7 1.7a19.934 19.934 0 0 1-3.84 2.997c-.393.236-.66.638-.725 1.092L3.6 17.5h-.85a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5h-.85l-1.35-9.455a1.559 1.559 0 0 0-.797-1.148 20.816 20.816 0 0 1-4.235-3.056l-1.756-1.64Zm1.834 12.916c.49.87 1.123 1.726 1.65 2.382H8.284c.535-.658 1.172-1.522 1.63-2.404.622-1.198 1.324-2.988 1.862-4.45.07-.193.14-.38.205-.562.059.17.121.347.186.528.522 1.456 1.227 3.258 1.928 4.506Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTent',
    mixins: [icon]
};
</script>