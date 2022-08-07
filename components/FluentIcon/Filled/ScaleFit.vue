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
<path d="M4.25 4A2.25 2.25 0 0 0 2 6.25v11.5A2.25 2.25 0 0 0 4.25 20h15.5A2.25 2.25 0 0 0 22 17.75V6.25A2.25 2.25 0 0 0 19.75 4H4.25Zm3.744 5.436a.75.75 0 0 1 .07 1.058l-.661.756h2.862a.75.75 0 0 1 0 1.5H7.403l.661.756a.75.75 0 0 1-1.128.988l-1.75-2a.75.75 0 0 1 0-.988l1.75-2a.75.75 0 0 1 1.058-.07Zm7.956 1.058a.75.75 0 0 1 1.13-.988l1.75 2a.75.75 0 0 1 0 .988l-1.75 2a.75.75 0 0 1-1.13-.988l.662-.756H13.75a.75.75 0 0 1 0-1.5h2.862l-.662-.756Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledScaleFit',
    mixins: [icon]
};
</script>