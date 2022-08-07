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
<path d="M7.25 2A2.25 2.25 0 0 0 5 4.25v7.136a2.5 2.5 0 0 1 1.5-.159V4.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75V17H12v1.5h6.25a3.25 3.25 0 0 0 3.25-3.25V12H18V4.25A2.25 2.25 0 0 0 15.75 2h-8.5Zm11 15H18v-3.5h2v1.75A1.75 1.75 0 0 1 18.25 17Zm-7.632-3.809c.172.086.33.19.475.309h3.157a.75.75 0 0 0 0-1.5h-5.5a.747.747 0 0 0-.346.084l2.214 1.107ZM8.75 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM1 19.573v-4.146a1.5 1.5 0 0 1 .83-1.342l3.5-1.75a1.5 1.5 0 0 1 1.34 0l3.5 1.75a1.5 1.5 0 0 1 .83 1.342v4.146a1.5 1.5 0 0 1-.83 1.342l-3.5 1.75a1.5 1.5 0 0 1-1.34 0l-3.5-1.75A1.5 1.5 0 0 1 1 19.573Zm1.553-4.047a.5.5 0 0 0 .223.671L5.5 17.56V20.5a.5.5 0 1 0 1 0v-2.941l2.724-1.362a.5.5 0 1 0-.448-.894L6 16.69l-2.776-1.388a.5.5 0 0 0-.671.223Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedReceiptCube',
    mixins: [icon]
};
</script>