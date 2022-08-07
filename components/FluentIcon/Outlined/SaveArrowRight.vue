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
<path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h9.964a3.25 3.25 0 0 1 2.299.952l2.035 2.035c.61.61.952 1.437.952 2.299v3.736a6.471 6.471 0 0 0-1.5-.709V8.287c0-.465-.184-.91-.513-1.238l-2.035-2.035a1.75 1.75 0 0 0-.952-.49V7.25a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.25 2.25 0 0 1 7 7.25V4.5H5.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25H6v-5.25A2.25 2.25 0 0 1 8.25 12h5.784a6.534 6.534 0 0 0-1.658 1.5H8.25a.75.75 0 0 0-.75.75v5.25h3.813c.173.534.412 1.037.709 1.5H5.75A2.75 2.75 0 0 1 3 18.25V5.75ZM8.5 4.5v2.75c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V4.5h-6Zm14.5 13a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-8.5-.5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L19.293 17H14.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSaveArrowRight',
    mixins: [icon]
};
</script>