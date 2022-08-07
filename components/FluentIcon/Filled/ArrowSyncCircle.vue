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
<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm3.27-11.25H14a.75.75 0 0 0 0 1.5h2.75a.75.75 0 0 0 .75-.75V8.25a.75.75 0 0 0-1.5 0V9a4.991 4.991 0 0 0-4-2c-1.537 0-2.904.66-3.827 1.77a.75.75 0 0 0 1.154.96C9.963 8.963 10.907 8.5 12 8.5c1.492 0 2.767.934 3.27 2.25Zm-7.27 5V15a5.013 5.013 0 0 0 7.821.237.75.75 0 1 0-1.142-.972 3.513 3.513 0 0 1-5.842-.765H10a.75.75 0 0 0 0-1.5H7.25a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowSyncCircle',
    mixins: [icon]
};
</script>