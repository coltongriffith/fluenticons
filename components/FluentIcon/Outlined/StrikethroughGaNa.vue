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
<path d="M9.5 20.25V13.5H6.93c-.896 1.211-2.224 2.204-4.064 2.491a.75.75 0 1 1-.232-1.482A4.563 4.563 0 0 0 4.89 13.5H1.75a.75.75 0 0 1 0-1.5h20.5a.75.75 0 0 1 0 1.5h-.75v6.75a.75.75 0 0 1-1.5 0V13.5h-5.3l-.101.901 3.568-.396a.75.75 0 1 1 .166 1.49l-4.5.5a.75.75 0 0 1-.828-.828l.185-1.667H11v6.75a.75.75 0 0 1-1.5 0Zm12-9.25V4.75a.75.75 0 0 0-1.5 0V11h1.5Zm-6.523 0 .518-4.667a.75.75 0 1 0-1.49-.166L13.468 11h1.509ZM11 11V4.75a.75.75 0 0 0-1.5 0V11H11Zm-2.843 0A8.056 8.056 0 0 0 8.5 8.75.75.75 0 0 0 7.75 8h-5a.75.75 0 1 0 0 1.5H6.95a7.107 7.107 0 0 1-.372 1.5h1.58Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedStrikethroughGaNa',
    mixins: [icon]
};
</script>