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
<path d="M19.25 3c.966 0 1.75.784 1.75 1.75v2c0 .698-.408 1.3-1 1.581v9.919A3.75 3.75 0 0 1 16.25 22h-8.5A3.75 3.75 0 0 1 4 18.25V8.332A1.75 1.75 0 0 1 3 6.75v-2C3 3.784 3.784 3 4.75 3h14.5Zm-.75 5.5h-13v9.75a2.25 2.25 0 0 0 2.25 2.25h8.5a2.25 2.25 0 0 0 2.25-2.25V8.5Zm-8.5 3h4a.75.75 0 0 1 .102 1.493L14 13h-4a.75.75 0 0 1-.102-1.493L10 11.5h4-4Zm9.25-7H4.75a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h14.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArchive',
    mixins: [icon]
};
</script>