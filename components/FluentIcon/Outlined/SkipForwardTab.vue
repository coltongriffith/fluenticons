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
<path d="M21.5 3.75a.75.75 0 0 0-1.5 0v3.4c-1.154-1.388-2.65-2.563-4.528-3.145a11.185 11.185 0 0 0-7.233.192c-2.316.862-4.504 2.61-5.646 4.693a.75.75 0 1 0 1.315.72c.944-1.722 2.825-3.252 4.854-4.007a9.685 9.685 0 0 1 6.266-.165c1.702.527 3.071 1.664 4.13 3.062H15.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 .75-.75v-5.5ZM8 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5H8Zm-2 .5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSkipForwardTab',
    mixins: [icon]
};
</script>