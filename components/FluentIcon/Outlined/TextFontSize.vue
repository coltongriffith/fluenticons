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
<path d="M10.212 17.11 15.043 3.5c.223-.627 1.07-.664 1.365-.111l.049.11 5.5 15.5a.75.75 0 0 1-1.373.596l-.04-.094L18.945 15h-6.394l-1.58 4.452a.75.75 0 0 1-.354.452l-.093.044a.75.75 0 0 1-.929-.33l-.044-.092L8.556 17H4.443l-.995 2.52a.75.75 0 0 1-.876.454l-.098-.031a.75.75 0 0 1-.452-.876l.03-.098 3.754-9.495c.236-.595 1.043-.63 1.345-.104l.05.105 3.011 7.635L15.043 3.5l-4.831 13.61Zm-3.71-5.318L5.037 15.5h2.928l-1.461-3.708Zm9.248-5.8L13.084 13.5h5.33L15.75 5.992Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextFontSize',
    mixins: [icon]
};
</script>