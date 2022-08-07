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
<path d="M2 7.75A3.75 3.75 0 0 1 5.75 4h12.5A3.75 3.75 0 0 1 22 7.75v8.5A3.75 3.75 0 0 1 18.25 20H5.75A3.75 3.75 0 0 1 2 16.25v-8.5ZM8.25 7a.75.75 0 0 0-.75.75v1.5a.75.75 0 1 0 1.5 0V8.5h2.25v7h-.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.5v-7H15v.75a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-.75-.75h-7.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextField',
    mixins: [icon]
};
</script>