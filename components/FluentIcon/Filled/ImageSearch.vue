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
<path d="M16.504 8.252a.752.752 0 1 0-1.504 0 .752.752 0 0 0 1.504 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M3 10.757V6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5c0 .627-.178 1.213-.485 1.71l-6.939-6.813-.128-.116a2.251 2.251 0 0 0-2.244-.383A5.497 5.497 0 0 0 6.5 9.5c-1.33 0-2.55.472-3.5 1.257Zm10.5-2.505a2.252 2.252 0 1 0 4.504 0 2.252 2.252 0 0 0-4.504 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13.982 21a1.741 1.741 0 0 0-.495-.987l-2.237-2.238c.476-.815.75-1.764.75-2.775 0-.51-.07-1.002-.199-1.47a.751.751 0 0 1 .631.11l.093.078 6.928 6.8A3.235 3.235 0 0 1 17.75 21h-3.768Z" :fill="fill" :fill-opacity="opacity" />

<path d="M9.95 17.89a4.5 4.5 0 1 0-1.145.976l2.915 2.914a.75.75 0 1 0 1.06-1.06l-2.83-2.83ZM6.5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledImageSearch',
    mixins: [icon]
};
</script>