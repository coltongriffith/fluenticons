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
<path d="M7.25 2A3.25 3.25 0 0 0 4 5.25v14.5A2.25 2.25 0 0 0 6.25 22h9a2.25 2.25 0 0 0 2.25-2.25V18h1.25A3.25 3.25 0 0 0 22 14.75v-5.5A3.25 3.25 0 0 0 18.75 6H17.5v-.75A3.25 3.25 0 0 0 14.25 2h-7Zm11.5 14.5H17.5v-9h1.25c.966 0 1.75.784 1.75 1.75v5.5a1.75 1.75 0 0 1-1.75 1.75ZM16 6H5.5v-.75c0-.966.784-1.75 1.75-1.75h7c.966 0 1.75.784 1.75 1.75V6Zm-7.5 4v7A.75.75 0 0 1 7 17v-7a.75.75 0 0 1 1.5 0Zm3 0v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 1.5 0Zm3 0v7a.75.75 0 0 1-1.5 0v-7a.75.75 0 0 1 1.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDrinkBeer',
    mixins: [icon]
};
</script>