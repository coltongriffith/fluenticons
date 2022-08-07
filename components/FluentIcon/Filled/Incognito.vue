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
<path d="M17.5 11.75a4.75 4.75 0 1 1-4.507 6.253h-1.986A4.752 4.752 0 0 1 1.75 16.5a4.75 4.75 0 0 1 9.474-.5h1.552a4.75 4.75 0 0 1 4.724-4.25Zm-11 2a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm11 0a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM15.512 3a2.75 2.75 0 0 1 2.634 1.96l1.006 3.35c.793.133 1.568.288 2.327.467a1 1 0 1 1-.458 1.946c-2.756-.648-5.762-.973-9.021-.973-3.259 0-6.265.325-9.021.973a1 1 0 0 1-.458-1.946 35.877 35.877 0 0 1 2.326-.466L5.854 4.96A2.75 2.75 0 0 1 8.488 3h7.024Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledIncognito',
    mixins: [icon]
};
</script>