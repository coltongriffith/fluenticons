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
<path d="M21.25 13a.75.75 0 0 1 .743.648l.007.102v5a3.25 3.25 0 0 1-3.066 3.245L18.75 22h-4.668c.536-.385.973-.9 1.265-1.499l3.403-.001a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-5a.75.75 0 0 1 .75-.75Zm-9.5-4A3.25 3.25 0 0 1 15 12.25v6.5A3.25 3.25 0 0 1 11.75 22h-6.5A3.25 3.25 0 0 1 2 18.75v-6.5A3.25 3.25 0 0 1 5.25 9h6.5Zm-5.689 4.103a.5.5 0 0 0-.061.24v4.315a.5.5 0 0 0 .74.439l3.955-2.158a.5.5 0 0 0 0-.878L6.74 12.903a.5.5 0 0 0-.678.2ZM18.75 2a3.25 3.25 0 0 1 3.245 3.066L22 5.25v5a.75.75 0 0 1-1.493.102l-.007-.102v-5a1.75 1.75 0 0 0-1.606-1.744L18.75 3.5h-5a.75.75 0 0 1-.102-1.493L13.75 2h5Zm-8.5 0a.75.75 0 0 1 .102 1.493l-.102.007h-5a1.75 1.75 0 0 0-1.744 1.606L3.5 5.25v3.402c-.6.292-1.114.73-1.5 1.266V5.25a3.25 3.25 0 0 1 3.066-3.245L5.25 2h5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledResizeVideo',
    mixins: [icon]
};
</script>