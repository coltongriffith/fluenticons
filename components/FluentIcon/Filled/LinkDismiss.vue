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
<path d="M9 5a1 1 0 0 1 .117 1.993L9 7H7a3 3 0 0 0-.176 5.995L7 13h2a1 1 0 0 1 .117 1.993L9 15H7a5 5 0 0 1-.217-9.995L7 5h2Zm8 0a5 5 0 0 1 4.43 7.322 6.483 6.483 0 0 0-1.76-.951 3 3 0 0 0-2.493-4.366L17 7h-2a1 1 0 0 1-.117-1.993L15 5h2ZM7 9h10a1 1 0 0 1 .117 1.993L17 11H7a1 1 0 0 1-.117-1.993L7 9Zm16 8.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793l-1.646-1.647Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledLinkDismiss',
    mixins: [icon]
};
</script>