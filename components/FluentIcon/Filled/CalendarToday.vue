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
<path d="M13.25 11.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M21 8.5v9.25A3.25 3.25 0 0 1 17.75 21h-4v-1.573a1.75 1.75 0 0 0 1.663-2.985l-2.25-2a1.75 1.75 0 0 0-2.326 0l-2.25 2a1.75 1.75 0 0 0 1.663 2.985V21h-4A3.25 3.25 0 0 1 3 17.75V8.5h18ZM12 14a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3h11.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M14.81 18.248a.75.75 0 0 1-1.058.063l-1.002-.89v3.829a.75.75 0 0 1-1.5 0v-3.83l-1.002.89a.75.75 0 0 1-.996-1.12l2.25-2a.75.75 0 0 1 .996 0l2.25 2a.75.75 0 0 1 .063 1.058Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCalendarToday',
    mixins: [icon]
};
</script>