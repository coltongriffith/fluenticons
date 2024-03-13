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
<path d="M20 21.25a.75.75 0 0 1-.75.75h-6.5A3.75 3.75 0 0 1 9 18.25V4.585l-3.72 3.72a.75.75 0 0 1-.976.072l-.084-.072a.75.75 0 0 1-.073-.977l.073-.084 5-5a.75.75 0 0 1 .976-.073l.084.073 5 5a.75.75 0 0 1-.976 1.133l-.084-.072-3.72-3.72V18.25a2.25 2.25 0 0 0 2.096 2.244l.154.006h6.5a.75.75 0 0 1 .75.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowEnterUp',
    mixins: [icon]
};
</script>