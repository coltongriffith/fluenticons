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
<path d="m20.947 12.97-3.753-9.496c-.236-.595-1.043-.63-1.345-.104l-.05.105-3.747 9.5a.75.75 0 0 0 1.352.643l.043-.092.997-2.526h4.113l.995 2.52a.75.75 0 0 0 .876.454l.098-.031a.75.75 0 0 0 .452-.876l-.03-.098Zm-4.45-7.178L17.964 9.5h-2.928l1.461-3.708ZM12 7.75a.75.75 0 0 1-.75.75H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06L5.56 7h5.69a.75.75 0 0 1 .75.75Zm9 9.5a.75.75 0 0 1-.75.75H5.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 1.06l-.72.72h14.69a.75.75 0 0 1 .75.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextDirectionHorizontalLeft',
    mixins: [icon]
};
</script>