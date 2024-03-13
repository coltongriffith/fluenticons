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
<path d="M6.087 9a5.752 5.752 0 0 1 11.326 0h.087a4 4 0 0 1 3.894 4.919l-1.407-1.406a1.571 1.571 0 0 0-.043-.043A2.5 2.5 0 0 0 17.5 10.5h-.756a.75.75 0 0 1-.75-.713 4.25 4.25 0 0 0-8.489 0 .75.75 0 0 1-.749.713H6a2.5 2.5 0 0 0 0 5h3.168a1.755 1.755 0 0 0 0 1.5H6a4 4 0 0 1 0-8h.087Zm7.693 5.28a.75.75 0 1 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L12.56 17h6.88l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22h-6.88l1.22-1.22Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCloudSwap',
    mixins: [icon]
};
</script>