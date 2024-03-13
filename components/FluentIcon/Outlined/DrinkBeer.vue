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
<path d="M8.5 10A.75.75 0 0 0 7 10v7a.75.75 0 0 0 1.5 0v-7ZM11.5 10a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0v-7ZM14.5 10a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0v-7Z" :fill="fill" :fill-opacity="opacity" />

<path d="M4 5.25A3.25 3.25 0 0 1 7.25 2h7a3.25 3.25 0 0 1 3.25 3.25V6h1.25A3.25 3.25 0 0 1 22 9.25v5.5A3.25 3.25 0 0 1 18.75 18H17.5v1.75A2.25 2.25 0 0 1 15.25 22h-9A2.25 2.25 0 0 1 4 19.75V5.25ZM16 7.5H5.5v12.25c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V7.5Zm1.5 9h1.25a1.75 1.75 0 0 0 1.75-1.75v-5.5a1.75 1.75 0 0 0-1.75-1.75H17.5v9ZM16 5.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5.5 5.25V6H16v-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDrinkBeer',
    mixins: [icon]
};
</script>