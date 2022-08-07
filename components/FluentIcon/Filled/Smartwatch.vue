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
<path d="M9.5 2a2 2 0 0 0-2 2v1.29C7.963 5.104 8.47 5 9 5h6c.53 0 1.037.103 1.5.29V4a2 2 0 0 0-2-2h-5ZM9 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1V9a3 3 0 0 0-3-3H9Zm0 13c-.53 0-1.037-.103-1.5-.29V20a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1.29c-.463.187-.97.29-1.5.29H9Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSmartwatch',
    mixins: [icon]
};
</script>