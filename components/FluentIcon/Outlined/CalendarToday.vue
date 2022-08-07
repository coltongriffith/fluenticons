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
<path d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h4v-1.5h-4a1.75 1.75 0 0 1-1.75-1.75V8.5h15v9.25a1.75 1.75 0 0 1-1.75 1.75h-4V21h4A3.25 3.25 0 0 0 21 17.75V6.25ZM6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13.25 11.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13.752 18.31a.75.75 0 0 0 .996-1.12l-2.25-2a.75.75 0 0 0-.996 0l-2.25 2a.75.75 0 0 0 .996 1.12l1.002-.89v3.83a.75.75 0 1 0 1.5 0v-3.83l1.002.89Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCalendarToday',
    mixins: [icon]
};
</script>