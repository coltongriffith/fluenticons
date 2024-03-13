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
<path d="m14.298 2.984 6.718 6.718a3.25 3.25 0 0 1 0 4.596l-6.718 6.717a3.25 3.25 0 0 1-4.596 0l-6.718-6.717a3.25 3.25 0 0 1 0-4.596l6.718-6.718a3.25 3.25 0 0 1 4.596 0Zm-3.536 1.06-6.717 6.718a1.75 1.75 0 0 0 0 2.475l6.717 6.718a1.75 1.75 0 0 0 2.475 0l6.718-6.718a1.75 1.75 0 0 0 0-2.475l-6.718-6.717a1.75 1.75 0 0 0-2.475 0Zm1.696 3.26.072-.084a.75.75 0 0 1 .977-.073l.084.073 2 2a.75.75 0 0 1 .073.977l-.073.084-2 2a.75.75 0 0 1-1.133-.977l.072-.084.72-.72h-1.5a1.25 1.25 0 0 0-1.244 1.122l-.006.128V15a.75.75 0 0 1-1.493.101L9 15v-3.25a2.75 2.75 0 0 1 2.582-2.745L11.75 9h1.498l-.718-.72a.75.75 0 0 1-.072-.976l.072-.084-.072.084Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDirections',
    mixins: [icon]
};
</script>