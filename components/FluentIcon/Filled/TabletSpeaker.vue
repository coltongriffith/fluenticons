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
<path d="M22.143 3.302c-.328-.547-.665-.921-.913-1.128a.75.75 0 0 0-.96 1.152c.127.106.353.357.587.747.401.67.643 1.475.643 2.427s-.242 1.758-.643 2.427c-.234.39-.46.641-.587.747a.75.75 0 0 0 .96 1.152c.248-.207.585-.58.913-1.128C22.68 8.805 23 7.736 23 6.5s-.32-2.305-.857-3.198Zm-2.269 1.094a3.075 3.075 0 0 0-.674-.746.75.75 0 0 0-.9 1.2c.062.046.19.175.326.379.234.35.374.77.374 1.271 0 .5-.14.92-.374 1.271a1.681 1.681 0 0 1-.326.379l-.084.073A.75.75 0 0 0 19.2 9.35c.189-.141.435-.388.674-.746A3.734 3.734 0 0 0 20.5 6.5c0-.812-.235-1.517-.626-2.104ZM17 3.75a.75.75 0 0 0-1.314-.494L14.16 5h-1.41a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h1.41l1.526 1.744A.75.75 0 0 0 17 9.25v-5.5ZM12 4h1.534H4.25A2.25 2.25 0 0 0 2 6.25v11.502a2.25 2.25 0 0 0 2.25 2.25h15.499a2.25 2.25 0 0 0 2.25-2.25v-6.27c-.044.04-.087.077-.129.112a1.75 1.75 0 0 1-2.855-1.114 1.755 1.755 0 0 1-1.238-.275c-.54.955-1.942 1.25-2.804.33L13.533 9H12a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm-1.75 11.5h3.5a.75.75 0 1 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTabletSpeaker',
    mixins: [icon]
};
</script>