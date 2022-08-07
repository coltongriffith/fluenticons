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
<path d="M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75ZM8.5 3.75A.75.75 0 0 1 9.25 3h8.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21h-8.5a.75.75 0 0 1-.75-.75V3.75ZM10 10v4h4v-4h-4Zm0 5.5v4h4v-4h-4Zm5.5 0v4h2.25a1.75 1.75 0 0 0 1.75-1.75V15.5h-4Zm0-5.5v4h4v-4h-4Zm4-1.5V6.25a1.75 1.75 0 0 0-1.75-1.75H15.5v4h4Zm-9.5-4v4h4v-4h-4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTableStackLeft',
    mixins: [icon]
};
</script>