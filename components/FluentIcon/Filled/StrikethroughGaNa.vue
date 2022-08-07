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
<path d="M9 20.25V13.5H6.837c-.82 1.332-2.155 2.421-4.183 2.738a1 1 0 1 1-.308-1.976c.77-.12 1.377-.392 1.858-.762H1.75a1 1 0 1 1 0-2h20.5a1 1 0 1 1 0 2H22v7a1 1 0 1 1-2 0v-7h-4.745l-.135 1.352 2.756-.344a1 1 0 0 1 .248 1.984l-4 .5a1 1 0 0 1-1.119-1.092l.24-2.4H11v6.75a1 1 0 1 1-2 0Zm13-9.75V5a1 1 0 1 0-2 0v5.5h2Zm-6.445 0 .44-4.4a1 1 0 1 0-1.99-.2l-.46 4.6h2.01ZM11 10.5V4.75a1 1 0 1 0-2 0v5.75h2Zm-3.113 0C7.967 9.969 8 9.46 8 9a1 1 0 0 0-1-1H2.5a1 1 0 1 0 0 2h3.438c-.021.165-.047.333-.08.5h2.03Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledStrikethroughGaNa',
    mixins: [icon]
};
</script>