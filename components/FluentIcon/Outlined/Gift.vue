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
<path d="M14.5 2a3.25 3.25 0 0 1 2.739 5h2.511c.69 0 1.25.56 1.25 1.25v3.5a1.25 1.25 0 0 1-1 1.225v5.775a3.25 3.25 0 0 1-3.066 3.245L16.75 22h-9.5a3.25 3.25 0 0 1-3.245-3.066L4 18.75v-5.775c-.57-.116-1-.62-1-1.225v-3.5C3 7.56 3.56 7 4.25 7h2.511a3.25 3.25 0 0 1 5.24-3.827A3.24 3.24 0 0 1 14.5 2Zm-3.25 10.999H5.5v5.751a1.75 1.75 0 0 0 1.606 1.744l.144.006h4v-7.501Zm7.25 0h-5.75V20.5h4a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-5.751ZM11.25 8.5H4.5v3l6.75-.001V8.5Zm8.25 3v-3h-6.75v2.999l6.75.001Zm-5-8a1.75 1.75 0 0 0-1.75 1.75v1.749h1.774l.12-.005A1.75 1.75 0 0 0 14.5 3.5Zm-5 0a1.75 1.75 0 0 0-.144 3.494l.12.005h1.774V5.25l-.006-.144A1.75 1.75 0 0 0 9.5 3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedGift',
    mixins: [icon]
};
</script>