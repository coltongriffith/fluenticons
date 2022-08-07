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
<path d="M16 2a6 6 0 0 1 4.396 10.084l-.19.194-8.727 8.727-.053.05-.056.045a3.721 3.721 0 0 1-5.253-5.242l.149-.164.015-.011 7.29-7.304a1 1 0 0 1 1.416 1.413l-7.29 7.304-.012.008a1.721 1.721 0 0 0 2.289 2.553l.122-.1.001.001 8.702-8.7.159-.165a4 4 0 0 0-5.753-5.554l-.155.16-.018.012-9.326 9.33a1 1 0 0 1-1.414-1.415L11.6 3.913l.046-.043A5.985 5.985 0 0 1 16 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAttach',
    mixins: [icon]
};
</script>