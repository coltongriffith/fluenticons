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
<path d="M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6.81a6.488 6.488 0 0 1-1.636-3h-.424a.75.75 0 0 1 0-1.5H11c0-.516.06-1.018.174-1.5h-.424a.75.75 0 0 1 0-1.5h.982A6.518 6.518 0 0 1 12.81 13h-2.06a.75.75 0 0 1 0-1.5h4.246A6.48 6.48 0 0 1 17.5 11c.886 0 1.73.177 2.5.498V10h-6a2 2 0 0 1-2-2Zm-5 4.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm0 3a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5Zm9.5 9.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5.78.418a.5.5 0 0 1-.219-.489L17 13.5a.5.5 0 1 1 1 0L18.001 17h2.496a.5.5 0 0 1 0 1H17.56a.507.507 0 0 1-.34-.082Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDocumentBulletListClock',
    mixins: [icon]
};
</script>