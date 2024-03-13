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
<path d="M7.998 5.75A3.752 3.752 0 1 1 12.5 9.427V11.5h3.25A2.25 2.25 0 0 1 18 13.75v.824a3.754 3.754 0 0 1-.748 7.43 3.752 3.752 0 0 1-.752-7.429v-.825a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v.824a3.754 3.754 0 0 1-.748 7.43 3.752 3.752 0 0 1-.752-7.429v-.825a2.25 2.25 0 0 1 2.25-2.25H11V9.427A3.754 3.754 0 0 1 7.998 5.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledOrganization',
    mixins: [icon]
};
</script>