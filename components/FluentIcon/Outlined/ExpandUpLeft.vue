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
<path d="M11 3.75a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V5.56l5.22 5.22a.75.75 0 0 0 1.06-1.06L5.56 4.5h4.69a.75.75 0 0 0 .75-.75Zm8.5 2.5a1.75 1.75 0 0 0-1.75-1.75h-4a.75.75 0 1 1 0-1.5h4A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75v-4a.75.75 0 0 1 1.5 0v4c0 .966.784 1.75 1.75 1.75H12v-4.75A2.75 2.75 0 0 1 14.75 12h4.75V6.25Zm0 7.25h-4.75c-.69 0-1.25.56-1.25 1.25v4.75h4.25a1.75 1.75 0 0 0 1.75-1.75V13.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedExpandUpLeft',
    mixins: [icon]
};
</script>