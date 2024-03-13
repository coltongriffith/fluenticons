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
<path d="M4.692 4.017C3.318 3.825 2 4.875 2 6.317v11.368c0 1.44 1.318 2.49 2.691 2.298.197-.027.41-.056.636-.084A54.303 54.303 0 0 1 12 19.5c3.19 0 5.732.262 7.31.483 1.372.193 2.69-.858 2.69-2.298V6.316c0-1.44-1.318-2.491-2.692-2.299-1.576.221-4.117.483-7.308.483s-5.732-.262-7.308-.483ZM19 18.43a52.22 52.22 0 0 0-3.5-.325V15H18a1 1 0 0 1 1 1v2.429Zm-5-.395a59.332 59.332 0 0 0-4 0V15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3.034Zm-5.5.07a52.216 52.216 0 0 0-3.5.325V16a1 1 0 0 1 1-1h2.5v3.104ZM12 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-3.5-.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm10 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledVideo360',
    mixins: [icon]
};
</script>