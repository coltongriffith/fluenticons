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
<path d="M9.282 8c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 9.282 16H3.75A1.75 1.75 0 0 1 2 14.25v-4.5a1.75 1.75 0 0 1 1.606-1.744L3.75 8h5.532ZM20.25 8c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 20.25 16h-5.532a1.75 1.75 0 0 1-1.75-1.75v-4.5c0-.966.784-1.75 1.75-1.75h5.532ZM9.282 9.5H3.75l-.057.007a.25.25 0 0 0-.193.243v4.5c0 .138.112.25.25.25h5.532a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Zm10.968 0h-5.532a.25.25 0 0 0-.25.25v4.5c0 .138.112.25.25.25h5.532a.25.25 0 0 0 .25-.25v-4.5a.25.25 0 0 0-.25-.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMatchAppLayout',
    mixins: [icon]
};
</script>