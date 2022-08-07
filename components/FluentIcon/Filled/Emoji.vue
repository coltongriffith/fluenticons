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
<path d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999ZM8.462 14.784a.75.75 0 1 0-1.178.928A5.991 5.991 0 0 0 12 18.002c1.86 0 3.581-.852 4.712-2.284a.75.75 0 0 0-1.177-.93A4.492 4.492 0 0 1 12 16.502c-1.398 0-2.69-.64-3.538-1.718ZM9 8.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 8.75Zm6 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledEmoji',
    mixins: [icon]
};
</script>