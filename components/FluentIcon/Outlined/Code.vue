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
<path d="m8.066 18.943 6.5-14.5a.75.75 0 0 1 1.404.518l-.036.096-6.5 14.5a.75.75 0 0 1-1.404-.518l.036-.096 6.5-14.5-6.5 14.5ZM2.22 11.47l4.25-4.25a.75.75 0 0 1 1.133.976l-.073.085L3.81 12l3.72 3.719a.75.75 0 0 1-.976 1.133l-.084-.073-4.25-4.25a.75.75 0 0 1-.073-.976l.073-.084 4.25-4.25-4.25 4.25Zm14.25-4.25a.75.75 0 0 1 .976-.073l.084.073 4.25 4.25a.75.75 0 0 1 .073.976l-.073.085-4.25 4.25a.75.75 0 0 1-1.133-.977l.073-.084L20.19 12l-3.72-3.72a.75.75 0 0 1 0-1.06Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCode',
    mixins: [icon]
};
</script>