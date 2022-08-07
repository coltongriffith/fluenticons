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
<path d="m14.298 2.984 6.718 6.718a3.25 3.25 0 0 1 0 4.596l-6.718 6.717a3.25 3.25 0 0 1-4.596 0l-6.718-6.717a3.25 3.25 0 0 1 0-4.596l6.718-6.718a3.25 3.25 0 0 1 4.596 0Zm-.707 4.236-.084-.073a.75.75 0 0 0-.883-.007l-.094.08-.072.084a.75.75 0 0 0-.008.883l.08.094.719.718H11.75l-.168.006a2.75 2.75 0 0 0-2.577 2.57L9 11.75V15l.007.101a.75.75 0 0 0 1.486 0L10.5 15v-3.25l.006-.128a1.25 1.25 0 0 1 1.116-1.116l.128-.006h1.5l-.72.72-.072.084a.75.75 0 0 0 1.049 1.05l.084-.073 2-2 .073-.084a.75.75 0 0 0 .007-.883l-.08-.094-2-2-.084-.073.084.073Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDirections',
    mixins: [icon]
};
</script>