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
<path d="M12 2.35c-.482 0-.964.25-1.212.753L8.43 7.88l-5.273.766c-1.107.161-1.55 1.522-.748 2.303l3.815 3.72-.9 5.25c-.15.873.544 1.582 1.331 1.582.208 0 .422-.05.63-.159l4.714-2.478 4.715 2.479c.99.52 2.148-.32 1.96-1.424l-.902-5.25 3.816-3.72c.8-.78.359-2.142-.748-2.303l-5.273-.766-2.358-4.777a1.335 1.335 0 0 0-1.21-.753Zm0 14.994V4.042l2.257 4.573a1.35 1.35 0 0 0 1.016.738l5.05.734-3.654 3.562a1.35 1.35 0 0 0-.388 1.195l.862 5.03-4.516-2.375a1.35 1.35 0 0 0-.627-.155Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledStarHalf',
    mixins: [icon]
};
</script>