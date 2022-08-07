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
<path d="M5.843 4.56a8.707 8.707 0 0 1 12.514 12.106l-.2.207c-.915.915-2.445 2.41-4.593 4.486a2.25 2.25 0 0 1-3.128 0l-3.85-3.749c-.284-.28-.532-.526-.743-.737a8.707 8.707 0 0 1 0-12.314Zm9.187 3.126-.084-.073a.75.75 0 0 0-.882-.007l-.094.08L12 9.656l-1.97-1.97-.084-.073a.75.75 0 0 0-.882-.007l-.094.08-.073.084a.75.75 0 0 0-.007.882l.08.094 1.969 1.97-1.97 1.97-.072.084a.75.75 0 0 0-.007.883l.08.093.084.073a.75.75 0 0 0 .882.007l.094-.08L12 11.777l1.97 1.97.084.072a.75.75 0 0 0 .882.007l.094-.08.073-.084a.75.75 0 0 0 .007-.882l-.08-.094-1.969-1.97 1.97-1.97.072-.084a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073.084.073Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLocationDismiss',
    mixins: [icon]
};
</script>