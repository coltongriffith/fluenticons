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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2-.09.007a.5.5 0 0 0-.402.402L17 14.5V17L14.498 17l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402l.09.008H17v2.503l.008.09a.5.5 0 0 0 .402.402l.09.008.09-.008a.5.5 0 0 0 .402-.402l.008-.09V18l2.504.001.09-.008a.5.5 0 0 0 .402-.402l.008-.09-.008-.09a.5.5 0 0 0-.403-.402l-.09-.008H18v-2.5l-.008-.09a.5.5 0 0 0-.402-.403L17.5 14Zm-6.481 4c.054.704.22 1.377.48 2H7a1 1 0 0 1-.117-1.993L7 18h4.019Zm.479-3a6.462 6.462 0 0 0-.48 2H4a1 1 0 0 1-.117-1.993L4 15h7.498Zm2.537-3a6.534 6.534 0 0 0-2.013 2H7a1 1 0 0 1-.117-1.993L7 12h7.035ZM6 5a3 3 0 0 1 2.78 1.873 1 1 0 0 1-1.803.857l-.05-.105A1 1 0 1 0 6 9h11.5a1 1 0 0 1 .117 1.993L17.5 11H6a3 3 0 0 1 0-6Zm14 1a1 1 0 0 1 .117 1.993L20 8h-9a1 1 0 0 1-.117-1.993L11 6h9Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledReadingListAdd',
    mixins: [icon]
};
</script>