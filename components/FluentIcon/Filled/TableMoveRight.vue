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
<path d="M8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5V3ZM8 9.5H3v5h5v-5ZM9.5 14.5v-5h4.018c-.036.25-.018.506.054.75h-.822a1.75 1.75 0 1 0 0 3.5h.822c-.072.244-.09.5-.054.75H9.5ZM8 16H3v1.75A3.25 3.25 0 0 0 6.25 21H8v-5ZM9.5 21v-5h5v4.25a.75.75 0 0 1-.75.75H9.5ZM9.5 8V3h4.25a.75.75 0 0 1 .75.75V8h-5ZM19.5 20.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0v16.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M14.752 14.81a.75.75 0 0 1-.063-1.058l.89-1.002H12.75a.75.75 0 0 1 0-1.5h2.83l-.89-1.002a.75.75 0 1 1 1.12-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 0 1-1.058.063Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableMoveRight',
    mixins: [icon]
};
</script>