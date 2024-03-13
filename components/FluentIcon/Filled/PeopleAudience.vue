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
<path d="M14.754 10c.966 0 1.75.784 1.75 1.75V15H16.5v1h-9v-3h.002v-1.25c0-.966.783-1.75 1.75-1.75h5.502ZM22 11.75A1.75 1.75 0 0 0 20.25 10h-3.375c.393.475.629 1.085.629 1.75V13H17.5v3h3.75a.75.75 0 0 0 .75-.75v-3.5ZM6.5 15h.002v-3.25l.009-.22c.045-.58.27-1.108.62-1.53H3.75l-.144.006A1.75 1.75 0 0 0 2 11.75v3.5c0 .414.336.75.75.75H6.5v-1ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM18.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM5.5 4a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2 17.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 .75.75v.5A3.75 3.75 0 0 1 18.25 22H5.75A3.75 3.75 0 0 1 2 18.25v-.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPeopleAudience',
    mixins: [icon]
};
</script>