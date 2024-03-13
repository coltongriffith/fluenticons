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
<path d="M7.75 3.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0V6.5H8A.75.75 0 1 0 8 5h-.25V3.75Zm14.25 0a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0V6.5h.25a.75.75 0 0 0 0-1.5H22V3.75ZM14.25 3a.75.75 0 0 1 .75.75V5h.25a.75.75 0 0 1 0 1.5H15v4.75a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75ZM1 4.75A.75.75 0 0 1 1.75 4h3a.75.75 0 0 1 .75.75c0 1.69-.838 4.277-3.445 5.435a.75.75 0 1 1-.61-1.37C3.002 8.124 3.726 6.71 3.935 5.5H1.75A.75.75 0 0 1 1 4.75Zm10.965-.024a.75.75 0 0 0-1.43-.452l-1.5 4.75a.75.75 0 0 0 .862.962l2.5-.5a.75.75 0 0 0-.294-1.471l-1.255.25 1.117-3.539Zm4.535.044a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H18v2.77l1.068-.267a.75.75 0 0 1 .364 1.455l-2 .5a.75.75 0 0 1-.932-.728V4.77Zm-5.3 13.369-1.92-1.92a.75.75 0 0 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.106-.05l5-6a.75.75 0 0 0-1.152-.96L11.2 18.139Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextProofingToolsGaNaDa',
    mixins: [icon]
};
</script>