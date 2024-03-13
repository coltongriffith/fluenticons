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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-5.478 2a6.474 6.474 0 0 0-.708 1.5h-7.06a.75.75 0 0 0-.75.75v.907c0 .656.286 1.279.783 1.706C5.545 19.945 7.44 20.501 10 20.501c.599 0 1.162-.03 1.688-.091.25.5.563.964.93 1.38-.803.141-1.676.21-2.618.21-2.89 0-5.128-.656-6.691-2a3.75 3.75 0 0 1-1.305-2.843v-.907A2.25 2.25 0 0 1 4.254 14h7.768Zm8.787 1.252-5.557 5.557a4 4 0 0 0 5.557-5.557ZM17.5 13.5a4 4 0 0 0-3.31 6.247l5.558-5.556A3.982 3.982 0 0 0 17.5 13.5ZM10 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPersonProhibited',
    mixins: [icon]
};
</script>