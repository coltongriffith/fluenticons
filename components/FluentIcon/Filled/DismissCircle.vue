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
<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.53 6.47-.084-.073a.75.75 0 0 0-.882-.007l-.094.08L12 10.939l-2.47-2.47-.084-.072a.75.75 0 0 0-.882-.007l-.094.08-.073.084a.75.75 0 0 0-.007.882l.08.094L10.939 12l-2.47 2.47-.072.084a.75.75 0 0 0-.007.882l.08.094.084.073a.75.75 0 0 0 .882.007l.094-.08L12 13.061l2.47 2.47.084.072a.75.75 0 0 0 .882.007l.094-.08.073-.084a.75.75 0 0 0 .007-.882l-.08-.094L13.061 12l2.47-2.47.072-.084a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073.084.073Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDismissCircle',
    mixins: [icon]
};
</script>