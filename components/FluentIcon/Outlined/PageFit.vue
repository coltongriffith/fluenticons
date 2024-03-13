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
<path d="M18.25 4A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25v-8.5A3.75 3.75 0 0 1 5.75 4h12.5Zm0 1.5H5.75A2.25 2.25 0 0 0 3.5 7.75v8.5a2.25 2.25 0 0 0 2.25 2.25h12.5a2.25 2.25 0 0 0 2.25-2.25v-8.5a2.25 2.25 0 0 0-2.25-2.25Zm0 7.5a.75.75 0 0 1 .75.75V15a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1 0-1.5H17a.5.5 0 0 0 .5-.5v-1.25a.75.75 0 0 1 .75-.75Zm-12.5 0a.75.75 0 0 1 .75.75V15a.5.5 0 0 0 .5.5h1.25a.75.75 0 0 1 0 1.5H7a2 2 0 0 1-2-2v-1.25a.75.75 0 0 1 .75-.75ZM7 7h1.25a.75.75 0 0 1 .102 1.493L8.25 8.5H7a.5.5 0 0 0-.492.41L6.5 9v1.25a.75.75 0 0 1-1.493.102L5 10.25V9a2 2 0 0 1 1.85-1.995L7 7Zm10 0a2 2 0 0 1 2 2v1.25a.75.75 0 0 1-1.5 0V9a.5.5 0 0 0-.5-.5h-1.25a.75.75 0 0 1 0-1.5H17Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPageFit',
    mixins: [icon]
};
</script>