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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM12 2c5.524 0 10.002 4.478 10.002 10.002 0 .263-.01.524-.03.782a6.502 6.502 0 0 0-10.88 3.626 4.487 4.487 0 0 1-2.63-1.625.75.75 0 1 0-1.178.928 5.993 5.993 0 0 0 3.73 2.21c.1 1.564.754 2.98 1.769 4.05-.258.02-.52.03-.783.03-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999Zm5.5 12-.09.008a.5.5 0 0 0-.402.402L17 14.5V17L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001.09-.008a.5.5 0 0 0 .402-.402l.008-.09-.008-.09a.5.5 0 0 0-.402-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403L17.5 14ZM9 8.751a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 8.75Zm6 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledEmojiAdd',
    mixins: [icon]
};
</script>