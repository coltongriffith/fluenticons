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
<path d="M7.25 3.5a4.25 4.25 0 0 1 4.245 4.044l.005.206V18.5a2.5 2.5 0 0 1-4.995.164L6.5 18.5V9a.75.75 0 0 1 1.493-.102L8 9v9.5a1 1 0 0 0 1.993.117L10 18.5V7.75a2.75 2.75 0 0 0-5.495-.168L4.5 7.75V17a.75.75 0 0 1-1.493.102L3 17V7.75A4.25 4.25 0 0 1 7.25 3.5Zm9 12.5a.75.75 0 0 1 .102 1.493l-.102.007h-2.5a.75.75 0 0 1-.102-1.493L13.75 16h2.5Zm4-3a.75.75 0 0 1 .102 1.493l-.102.007h-6.5a.75.75 0 0 1-.102-1.493L13.75 13h6.5Zm0-3a.75.75 0 0 1 .102 1.493l-.102.007h-6.5a.75.75 0 0 1-.102-1.493L13.75 10h6.5Zm0-3a.75.75 0 0 1 .102 1.493l-.102.007h-6.5a.75.75 0 0 1-.102-1.493L13.75 7h6.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAttachText',
    mixins: [icon]
};
</script>