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
<path d="M6 3.75a.75.75 0 0 1 1.5 0v14.69l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V3.75Zm5.553 9.22 3.753-9.496c.236-.595 1.043-.63 1.345-.104l.05.105 3.747 9.5a.75.75 0 0 1-1.352.643l-.044-.092L18.056 11h-4.113l-.995 2.52a.75.75 0 0 1-.876.454l-.097-.031a.75.75 0 0 1-.453-.876l.03-.098Zm4.45-7.178L14.536 9.5h2.928l-1.461-3.708ZM16.25 14a.75.75 0 0 0-.75.75v3.69l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72v-3.69a.75.75 0 0 0-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextDirectionVertical',
    mixins: [icon]
};
</script>