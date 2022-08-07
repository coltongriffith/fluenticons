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
<path d="M13.209 3.103c-.495-1.004-1.926-1.004-2.421 0L8.43 7.88l-5.273.766c-1.107.161-1.55 1.522-.748 2.303l3.815 3.72-.9 5.25c-.19 1.103.968 1.944 1.959 1.424l2.944-1.549.304-1.217c.07-.277.17-.543.299-.794l-3.976 2.09.862-5.029a1.35 1.35 0 0 0-.388-1.195l-3.654-3.562 5.05-.734c.44-.063.82-.34 1.016-.738l2.258-4.576 2.259 4.576a1.35 1.35 0 0 0 1.016.738l4.45.647a3.272 3.272 0 0 1 2.052.725c.529-.793.072-1.932-.935-2.079l-5.273-.766-2.358-4.777Z" :fill="fill" :fill-opacity="opacity" />

<path d="m18.1 11.67-5.896 5.902a2.686 2.686 0 0 0-.706 1.247l-.457 1.831a1.086 1.086 0 0 0 1.317 1.318l1.829-.457a2.681 2.681 0 0 0 1.246-.707l5.896-5.902a2.287 2.287 0 0 0 0-3.232 2.281 2.281 0 0 0-3.229 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedStarEdit',
    mixins: [icon]
};
</script>