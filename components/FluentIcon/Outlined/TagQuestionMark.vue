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
<path d="M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-.026.026a6.476 6.476 0 0 0-1.43-.692l.396-.395a1.75 1.75 0 0 0 .512-1.237V4.25a.75.75 0 0 0-.75-.75h-5.465c-.465 0-.91.185-1.239.513l-8.512 8.523a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.33.13c.165.487.386.947.654 1.375a3.256 3.256 0 0 1-4.043-.443L3.489 16.06a3.25 3.25 0 0 1-.003-4.596l8.5-8.51A3.25 3.25 0 0 1 14.284 2h5.465Z" :fill="fill" :fill-opacity="opacity" />

<path d="M17 5.502a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-6.125 3.005a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0Zm-1.228-4.548c-.011-1.137.805-1.954 1.853-1.954 1.031 0 1.853.846 1.853 1.95 0 .566-.185.913-.663 1.447l-.265.29-.101.116c-.248.292-.324.462-.324.695a.5.5 0 1 1-1 0c0-.576.187-.926.671-1.468l.265-.29.1-.113c.242-.286.317-.453.317-.677 0-.558-.38-.95-.853-.95-.494 0-.859.366-.853.945a.5.5 0 1 1-1 .01Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTagQuestionMark',
    mixins: [icon]
};
</script>