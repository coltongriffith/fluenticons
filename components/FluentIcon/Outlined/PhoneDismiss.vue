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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM13.75 2A2.25 2.25 0 0 1 16 4.25v6.924a6.454 6.454 0 0 0-1.5.558V4.25a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75l5.483.001c.287.551.651 1.056 1.077 1.5L6.25 22A2.25 2.25 0 0 1 4 19.75V4.25A2.25 2.25 0 0 1 6.25 2h7.5Zm1.343 12.966-.07.058-.057.07a.5.5 0 0 0 0 .568l.058.07 1.77 1.769-1.768 1.766-.057.07a.5.5 0 0 0 0 .568l.057.07.07.057a.5.5 0 0 0 .568 0l.07-.057 1.766-1.767 1.77 1.769.069.058a.5.5 0 0 0 .568 0l.07-.058.057-.07a.5.5 0 0 0 0-.568l-.057-.07-1.77-1.768 1.772-1.77.058-.069a.5.5 0 0 0 0-.569l-.058-.069-.069-.058a.5.5 0 0 0-.569 0l-.069.058-1.772 1.77-1.77-1.77-.068-.058a.5.5 0 0 0-.493-.043l-.076.043Zm-6.344 2.538L11 17.499c0 .517.06 1.02.174 1.5l-2.423.005a.75.75 0 0 1-.002-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPhoneDismiss',
    mixins: [icon]
};
</script>