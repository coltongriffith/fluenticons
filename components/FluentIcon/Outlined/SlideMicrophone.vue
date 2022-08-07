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
<path d="M4.75 4A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h9.003a4.637 4.637 0 0 1-.64-1.5H4.75c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v4.874c.945.668 1.5 1.78 1.5 2.876V6.75A2.75 2.75 0 0 0 19.25 4H4.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M16.521 20c-.617-.35-1.091-.869-1.336-1.5a2.75 2.75 0 0 1-.185-1 .5.5 0 0 0-1 0c0 .343.052.679.149 1 .166.552.467 1.063.87 1.5.725.789 1.782 1.34 2.981 1.473V22.5a.5.5 0 0 0 1 0v-1.027c2.25-.25 4-1.973 4-3.973a.5.5 0 0 0-1 0c0 1.75-1.567 3-3.5 3-.734 0-1.416-.18-1.979-.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M18.5 19.5a2.45 2.45 0 0 1-1.995-1A2.536 2.536 0 0 1 16 17v-2.5c0-1.254 1-2.5 2.5-2.5.865 0 1.563.417 2 1.009.32.434.5.963.5 1.491V17c0 1.246-1 2.5-2.5 2.5ZM6.75 8a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5ZM6 11.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75ZM6 14.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSlideMicrophone',
    mixins: [icon]
};
</script>