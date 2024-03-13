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
<path d="M11.754 10.617a11.24 11.24 0 0 1-.56 1.963c-.148.38-.321.752-.522 1.11-.525.933-1.24 1.76-2.174 2.355C7.563 16.639 6.408 17 5 17a1 1 0 1 1 0-2c1.982 0 3.176-.953 3.928-2.29.05-.088.097-.176.142-.267.226-.452.405-.94.543-1.443.181-.659.291-1.342.346-2H5a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1c0 .362-.014.748-.047 1.147l-.001.018c-.039.47-.103.958-.198 1.452ZM7.516 11a4.978 4.978 0 0 1-.33.73c-.255.451-.532.747-.83.936-.286.182-.7.334-1.356.334a3 3 0 1 0 0 6c3.65 0 6.07-1.938 7.415-4.33C13.66 12.457 14 9.886 14 8v10a3 3 0 1 0 6 0v-5.041a3 3 0 0 0 0-5.918V5a3 3 0 1 0-6 0v3a3 3 0 0 0-3-3H5a3 3 0 0 0 0 6h2.516ZM19.5 11H18v7a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0v4h1.5a1 1 0 1 1 0 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextEffectsGa',
    mixins: [icon]
};
</script>