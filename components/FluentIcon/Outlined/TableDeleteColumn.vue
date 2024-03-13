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
<path d="M22 3.75a.75.75 0 0 0-.75-.75h-1A3.25 3.25 0 0 0 17 6.25v11.5A3.25 3.25 0 0 0 20.25 21h1a.75.75 0 0 0 0-1.5h-1a1.75 1.75 0 0 1-1.75-1.75V15.5h2.75a.75.75 0 0 0 0-1.5H18.5v-4h2.75a.75.75 0 0 0 0-1.5H18.5V6.25c0-.966.784-1.75 1.75-1.75h1a.75.75 0 0 0 .75-.75ZM2 3.75A.75.75 0 0 1 2.75 3h1A3.25 3.25 0 0 1 7 6.25v11.5A3.25 3.25 0 0 1 3.75 21h-1a.75.75 0 0 1 0-1.5h1a1.75 1.75 0 0 0 1.75-1.75V15.5H2.75a.75.75 0 0 1 0-1.5H5.5v-4H2.75a.75.75 0 0 1 0-1.5H5.5V6.25A1.75 1.75 0 0 0 3.75 4.5h-1A.75.75 0 0 1 2 3.75ZM10.94 12l-1.47 1.47a.75.75 0 1 0 1.06 1.06L12 13.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L13.06 12l1.47-1.47a.75.75 0 1 0-1.06-1.06L12 10.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L10.94 12Z" :fill="fill" :fill-opacity="opacity" />

<path d="M11.25 8.727c.026.023.051.047.076.072l.674.674.674-.674c.025-.025.05-.049.076-.072V2.75a.75.75 0 0 0-1.5 0v5.977ZM11.25 15.523v5.727a.75.75 0 0 0 1.5 0v-5.727a1.826 1.826 0 0 1-.076-.072L12 14.777l-.674.674-.076.072Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTableDeleteColumn',
    mixins: [icon]
};
</script>