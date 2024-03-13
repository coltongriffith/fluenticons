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
<path d="M4.5 6.25c0-.966.784-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5h-3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h3a.75.75 0 0 0 0-1.5h-3a1.75 1.75 0 0 1-1.75-1.75V6.25ZM14.747 3a.75.75 0 0 0 0 1.5h3.003c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75h-3.003a.75.75 0 0 0 0 1.5h3.003A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3h-3.003Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12.5 6.75a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5H12.5V6.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShiftsOpen',
    mixins: [icon]
};
</script>