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
<path d="M8.254 8.003c.967 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 19.253v-9.5c0-.966.784-1.75 1.75-1.75h4.504Zm0 1.5H3.75a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h4.504a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25ZM6.252 17a.75.75 0 0 1 .102 1.493l-.102.007h-.5a.75.75 0 0 1-.102-1.493L5.752 17h.5Zm14.997-.5a.75.75 0 0 1 .102 1.493L21.25 18H11v-1.5h10.25ZM18.25 5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.25 16H11v-1.5h7.25a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25H5.75a.25.25 0 0 0-.25.25L5.499 7H4v-.25C4 5.784 4.784 5 5.75 5h12.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPhoneLaptop',
    mixins: [icon]
};
</script>