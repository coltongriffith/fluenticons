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
<path d="M17.75 16a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5h9ZM2.72 9.22a.75.75 0 0 1 .976-.073l.084.073 2 2a.75.75 0 0 1 .073.976l-.073.084-2 2a.75.75 0 0 1-1.133-.976l.073-.084 1.47-1.47-1.47-1.47a.75.75 0 0 1 0-1.06ZM20.75 11a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1 0-1.5h12Zm-3-5a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5h9Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextIndentIncreaseLtr',
    mixins: [icon]
};
</script>