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
<path d="M19.25 11.002c.966 0 1.75.783 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-4.5a1.75 1.75 0 0 1-1.75-1.75v-6.5c0-.967.784-1.75 1.75-1.75h4.5Zm-9.982 4.012c.967 0 1.75.784 1.75 1.75v2.488a1.75 1.75 0 0 1-1.75 1.75H4.754a1.75 1.75 0 0 1-1.75-1.75v-2.488c0-.966.783-1.75 1.75-1.75h4.514ZM9.254 3c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.607 1.744L9.254 13h-4.5a1.75 1.75 0 0 1-1.75-1.75v-6.5c0-.966.783-1.75 1.75-1.75h4.5Zm9.996 0c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 19.25 9h-4.5A1.75 1.75 0 0 1 13 7.25v-2.5c0-.966.784-1.75 1.75-1.75h4.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledGlance',
    mixins: [icon]
};
</script>