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
<path d="M8.25 10.002a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM7.5 16.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" :fill="fill" :fill-opacity="opacity" />

<path d="M3 5.75A2.75 2.75 0 0 1 5.75 3h12.5A2.75 2.75 0 0 1 21 5.75v6.272a6.462 6.462 0 0 0-3.043-1.006.749.749 0 0 0-.703-1.014H12.25a.75.75 0 0 0 0 1.5h2.742A6.502 6.502 0 0 0 12.021 21H5.75A2.75 2.75 0 0 1 3 18.25V5.75Zm3 5.002a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM8.25 14a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM6.755 7.5h10.5a.75.75 0 0 0 0-1.5h-10.5a.75.75 0 0 0 0 1.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-4.999 3.003a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.503a.5.5 0 1 1 0 1h-2.502v2.503Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFormNew',
    mixins: [icon]
};
</script>