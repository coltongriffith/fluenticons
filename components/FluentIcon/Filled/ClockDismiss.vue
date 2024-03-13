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
<path d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM13 1c5.523 0 10 4.478 10 10s-4.477 10-10 10c-.335 0-.666-.017-.992-.049a6.5 6.5 0 0 0-8.96-8.96A10.003 10.003 0 0 1 3 11C3 5.478 7.477 1 13 1ZM3.716 14.589l-.07.057-.057.07a.5.5 0 0 0 0 .568l.057.07L5.793 17.5l-2.147 2.146-.057.07a.5.5 0 0 0 0 .568l.057.07.07.057a.5.5 0 0 0 .568 0l.07-.057L6.5 18.207l2.146 2.147.07.057a.5.5 0 0 0 .568 0l.07-.057.057-.07a.5.5 0 0 0 0-.568l-.057-.07L7.207 17.5l2.147-2.146.057-.07a.5.5 0 0 0 0-.568l-.057-.07-.07-.057a.5.5 0 0 0-.568 0l-.07.057L6.5 16.793l-2.146-2.147-.07-.057a.5.5 0 0 0-.492-.044l-.076.044ZM12.25 5a.75.75 0 0 0-.75.75l-.004 5.503c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25L13 5.75a.75.75 0 0 0-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClockDismiss',
    mixins: [icon]
};
</script>