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
<path d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM7 7l.001 2.504a.5.5 0 0 1-1 0V7H3.496a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 1 0V6h2.503a.5.5 0 0 1 0 1H7.001Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.75 4.5h-5.063a6.472 6.472 0 0 0-.709-1.5h5.772A3.25 3.25 0 0 1 21 6.25v6.879a2.25 2.25 0 0 1-.659 1.59l-5.621 5.622a2.25 2.25 0 0 1-1.591.659H6.25A3.25 3.25 0 0 1 3 17.75v-5.772c.463.297.967.536 1.5.709v5.063c0 .966.784 1.75 1.75 1.75H13v-3.25a3.25 3.25 0 0 1 3.066-3.245L16.25 13h3.25V6.25a1.75 1.75 0 0 0-1.75-1.75Zm.689 10H16.25a1.75 1.75 0 0 0-1.744 1.607l-.006.143v2.189l3.939-3.939Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedNoteAdd',
    mixins: [icon]
};
</script>