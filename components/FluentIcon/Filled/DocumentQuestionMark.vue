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
<path d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.498V4a2 2 0 0 1 2-2h6Zm1.5.5V8a.5.5 0 0 0 .5.5h5.5l-6-6ZM1 17.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0Zm4.75 3.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM4.5 16a2 2 0 1 1 4 0c0 .73-.212 1.14-.754 1.708l-.264.27-.116.124C7.083 18.421 7 18.63 7 19a.5.5 0 0 1-1 0c0-.73.212-1.14.754-1.708l.264-.27.116-.124c.283-.319.366-.527.366-.898a1 1 0 1 0-2 0 .5.5 0 0 1-1 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentQuestionMark',
    mixins: [icon]
};
</script>