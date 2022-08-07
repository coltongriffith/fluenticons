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
<path d="M11.11 4.049a1 1 0 1 0-.22-1.988C5.888 2.614 2 6.852 2 12c0 5.523 4.477 10 10 10 5.146 0 9.383-3.887 9.939-8.886a1 1 0 0 0-1.988-.22A8.001 8.001 0 0 1 4 12a8.001 8.001 0 0 1 7.11-7.951ZM14.767 2.39a1 1 0 0 0-.54 1.926c.287.081.569.178.842.29a1 1 0 0 0 .757-1.852 9.818 9.818 0 0 0-1.059-.363ZM17.35 4.692a1 1 0 0 1 1.412-.061c.212.194.415.397.609.608a1 1 0 0 1-1.474 1.352 7.94 7.94 0 0 0-.486-.486 1 1 0 0 1-.062-1.413Z" :fill="fill" :fill-opacity="opacity" />

<path d="M11 6a1 1 0 0 1 1 1v5h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1ZM19.94 7.623a1 1 0 0 1 1.304.547 9.856 9.856 0 0 1 .365 1.063 1 1 0 1 1-1.925.54 7.896 7.896 0 0 0-.291-.846 1 1 0 0 1 .546-1.304Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledShiftsActivity',
    mixins: [icon]
};
</script>