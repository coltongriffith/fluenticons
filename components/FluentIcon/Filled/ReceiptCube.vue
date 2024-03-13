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
<path d="M7.25 2A2.25 2.25 0 0 0 5 4.25v7.136a2.5 2.5 0 0 1 2.118.055l1.286.643A.747.747 0 0 1 8.75 12h5.5a.75.75 0 0 1 0 1.5h-3.157A2.5 2.5 0 0 1 12 15.427V18.5h6.25a3.25 3.25 0 0 0 3.25-3.25V12H18V4.25A2.25 2.25 0 0 0 15.75 2h-8.5Zm11 15H18v-3.5h2v1.75A1.75 1.75 0 0 1 18.25 17ZM8 5.75A.75.75 0 0 1 8.75 5h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 8 5.75Zm0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 8 9.25ZM1 19.573v-4.146a1.5 1.5 0 0 1 .83-1.342l3.5-1.75a1.5 1.5 0 0 1 1.34 0l3.5 1.75a1.5 1.5 0 0 1 .83 1.342v4.146a1.5 1.5 0 0 1-.83 1.342l-3.5 1.75a1.5 1.5 0 0 1-1.34 0l-3.5-1.75A1.5 1.5 0 0 1 1 19.573Zm1.553-4.047a.5.5 0 0 0 .223.671L5.5 17.56V20.5a.5.5 0 1 0 1 0v-2.941l2.724-1.362a.5.5 0 1 0-.448-.894L6 16.69l-2.776-1.388a.5.5 0 0 0-.671.223Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledReceiptCube',
    mixins: [icon]
};
</script>