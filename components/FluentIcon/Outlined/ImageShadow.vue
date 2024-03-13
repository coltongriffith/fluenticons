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
<path d="M13.996 6.748a1.248 1.248 0 1 1-2.496 0 1.248 1.248 0 0 1 2.496 0ZM2 5.25A3.25 3.25 0 0 1 5.25 2h9a3.25 3.25 0 0 1 3.25 3.25v9a3.25 3.25 0 0 1-3.25 3.25h-9A3.25 3.25 0 0 1 2 14.25v-9ZM5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v9c0 .231.045.451.126.653l4.587-4.29a2.25 2.25 0 0 1 3.074 0l4.587 4.29c.081-.201.126-.422.126-.653v-9a1.75 1.75 0 0 0-1.75-1.75h-9Zm9.517 12.422-4.505-4.214a.75.75 0 0 0-1.025 0l-4.504 4.214c.163.05.337.078.517.078h9c.18 0 .354-.027.517-.078ZM6.499 18.75v-.25H14.5a4 4 0 0 0 4-4v-8h.249a3.25 3.25 0 0 1 3.25 3.25v7c0 2.9-2.35 5.25-5.25 5.25h-7a3.25 3.25 0 0 1-3.25-3.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedImageShadow',
    mixins: [icon]
};
</script>