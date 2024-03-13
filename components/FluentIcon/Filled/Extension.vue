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
<path d="M13 2a2.47 2.47 0 0 1 2.47 2.47l-.001.53H19a1 1 0 0 1 1 1l-.001 3.499-1.53.001a2.47 2.47 0 0 0-2.464 2.307L16 11.97v.06a2.47 2.47 0 0 0 2.307 2.465l.163.005 1.529-.001.001 3.504a1 1 0 0 1-1 1l-3.531-.001v.528a2.47 2.47 0 1 1-4.939 0v-.528H7a1 1 0 0 1-1-1l-.001-3.531h-.53a2.47 2.47 0 0 1 0-4.94H6L6 6a1 1 0 0 1 1-1h3.53v-.53A2.47 2.47 0 0 1 13 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledExtension',
    mixins: [icon]
};
</script>