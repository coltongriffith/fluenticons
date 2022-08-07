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
<path d="M16.25 5.18a.75.75 0 0 0 .142 1.051 7.251 7.251 0 0 1-3.599 12.976l.677-.677a.75.75 0 0 0-.977-1.133l-.084.073-2 2a.75.75 0 0 0-.073.976l.073.084 2 2a.75.75 0 0 0 1.133-.976l-.072-.084-.75-.75A8.75 8.75 0 0 0 17.301 5.04a.75.75 0 0 0-1.051.141Zm-5.72-3.71a.75.75 0 0 0 0 1.06l.75.75a8.75 8.75 0 0 0-4.85 15.47.75.75 0 1 0 .956-1.157 7.251 7.251 0 0 1 3.82-12.8l-.676.677a.75.75 0 1 0 1.061 1.06l2-2a.75.75 0 0 0 0-1.06l-2-2a.75.75 0 0 0-1.06 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowSync',
    mixins: [icon]
};
</script>