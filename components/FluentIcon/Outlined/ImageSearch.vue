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
<path d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v4.507a5.495 5.495 0 0 1 1.5-.882V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5c0 .209-.037.409-.104.595l-5.822-5.702-.128-.116a2.251 2.251 0 0 0-2.243-.38c.259.425.461.889.598 1.38a.75.75 0 0 1 .724.188L18.33 19.4a1.746 1.746 0 0 1-.581.099h-4.775l.512.513c.278.277.443.626.495.987h3.768A3.25 3.25 0 0 0 21 17.75V6.25Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.504 8.752a2.252 2.252 0 1 0-4.504 0 2.252 2.252 0 0 0 4.504 0Zm-3.004 0a.752.752 0 1 1 1.504 0 .752.752 0 0 1-1.504 0ZM9.95 17.89a4.5 4.5 0 1 0-1.145.976l2.915 2.914a.75.75 0 1 0 1.06-1.06l-2.83-2.83ZM6.5 18a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedImageSearch',
    mixins: [icon]
};
</script>