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
<path d="m2.147 2.3.073-.084a.75.75 0 0 1 .976-.073l.084.073 18.5 18.509a.75.75 0 0 1 .073.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073-6.603-6.605-6.321 6.59c-.51.53-1.376.086-1.287-.606l.018-.096L8.294 14H5.75a.75.75 0 0 1-.742-.86l.02-.096 1.545-5.412L2.22 3.276a.75.75 0 0 1-.073-.976l.073-.084-.073.084ZM8.75 2h7a.75.75 0 0 1 .737.89l-.025.097L14.79 8h4.459a.75.75 0 0 1 .61 1.187l-.069.082-3.596 3.746-8.677-8.682.51-1.79a.75.75 0 0 1 .612-.535L8.75 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFlashOff',
    mixins: [icon]
};
</script>