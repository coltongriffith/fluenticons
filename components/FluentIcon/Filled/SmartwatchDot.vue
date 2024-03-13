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
<path d="M14.5 2a2 2 0 0 1 1.79 1.105 3.487 3.487 0 0 0-.231 2.037A4.005 4.005 0 0 0 15 5H9c-.53 0-1.037.103-1.5.29V4a2 2 0 0 1 2-2h5Zm.5 4c.589 0 1.138.17 1.602.463.25.368.567.686.935.935C17.83 7.862 18 8.411 18 9v1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6ZM9 19c-.53 0-1.037-.103-1.5-.29V20a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-1.29c-.463.187-.97.29-1.5.29H9ZM22 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSmartwatchDot',
    mixins: [icon]
};
</script>