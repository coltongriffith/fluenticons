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
<path d="M12 2c5.523 0 10 4.477 10 10 0 .427-.027.847-.078 1.26a3.504 3.504 0 0 0-1.47-2.165A8.501 8.501 0 0 0 3.5 12a8.5 8.5 0 0 0 9.5 8.442V21.5c0 .152.014.302.04.447A10.12 10.12 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2Zm8.487 10.482A2.5 2.5 0 0 0 16 14v1h-.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H21v-1a2.49 2.49 0 0 0-.513-1.518Zm-2.38 7.438a1 1 0 1 1 .787-1.84 1 1 0 0 1-.787 1.84ZM17.5 14a1 1 0 1 1 2 0v1h-2v-1Zm-6.75-.56 4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084-5 5a.75.75 0 0 1-.976.073l-.084-.073-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073 1.97 1.97Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCheckmarkLock',
    mixins: [icon]
};
</script>