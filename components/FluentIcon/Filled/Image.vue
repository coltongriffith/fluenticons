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
<path d="m11.475 13.718.083-.071a.75.75 0 0 1 .874-.007l.093.078 6.928 6.8A3.235 3.235 0 0 1 17.75 21H6.25a3.235 3.235 0 0 1-1.703-.481l6.928-6.801.083-.071-.083.07ZM17.75 3A3.25 3.25 0 0 1 21 6.25v11.5c0 .627-.178 1.213-.485 1.71l-6.939-6.813-.128-.116a2.25 2.25 0 0 0-2.889-.006l-.135.123-6.939 6.811A3.235 3.235 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm-1.998 3a2.252 2.252 0 1 0 0 4.504 2.252 2.252 0 0 0 0-4.504Zm0 1.5a.752.752 0 1 1 0 1.504.752.752 0 0 1 0-1.504Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledImage',
    mixins: [icon]
};
</script>