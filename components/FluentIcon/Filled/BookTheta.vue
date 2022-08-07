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
<path d="M14.115 14.007c.372-.512.666-1.201.802-2.007h-4.834c.136.806.43 1.495.802 2.007.519.714 1.109.993 1.615.993s1.096-.28 1.615-.993ZM14.115 7.993c.447.615.781 1.486.865 2.507h-4.96c.084-1.021.418-1.892.865-2.507C11.404 7.28 11.994 7 12.5 7s1.096.28 1.615.993Z" :fill="fill" :fill-opacity="opacity" />
<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5v-15Zm8.5 12c2.21 0 4-2.462 4-5.5s-1.79-5.5-4-5.5-4 2.462-4 5.5 1.79 5.5 4 5.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledBookTheta',
    mixins: [icon]
};
</script>