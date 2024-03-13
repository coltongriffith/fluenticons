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
<path d="M12 3.375C12 2.615 12.616 2 13.375 2h3.75c.76 0 1.375.616 1.375 1.375V9H17V3.5h-3.5v3.625c0 .76-.616 1.375-1.375 1.375H8.5v3.625c0 .76-.616 1.375-1.375 1.375H3.5V17H9v1.5H3.375C2.615 18.5 2 17.884 2 17.125v-3.75C2 12.615 2.616 12 3.375 12H7V8.375C7 7.615 7.616 7 8.375 7H12V3.375ZM16.375 10c-.76 0-1.375.616-1.375 1.375V15h-3.625c-.76 0-1.375.616-1.375 1.375v3.75c0 .76.616 1.375 1.375 1.375h6.875a3.25 3.25 0 0 0 3.25-3.25v-6.875c0-.76-.616-1.375-1.375-1.375h-3.75Zm.125 5.125V11.5H20v6.75A1.75 1.75 0 0 1 18.25 20H11.5v-3.5h3.625c.76 0 1.375-.616 1.375-1.375Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSteps',
    mixins: [icon]
};
</script>