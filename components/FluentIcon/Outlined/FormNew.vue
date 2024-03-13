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
<path d="M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h6.272a6.471 6.471 0 0 1-.709-1.5H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v5.563a6.471 6.471 0 0 1 1.5.709V5.75A2.75 2.75 0 0 0 18.25 3H5.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17.957 11.016a.749.749 0 0 0-.703-1.014H12.25a.75.75 0 0 0 0 1.5h2.742a6.48 6.48 0 0 1 2.965-.486ZM8.25 8.502a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM6 16.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM17.254 7.5h-10.5a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-4.999 3.003a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.503a.5.5 0 1 1 0 1h-2.502v2.503Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedFormNew',
    mixins: [icon]
};
</script>