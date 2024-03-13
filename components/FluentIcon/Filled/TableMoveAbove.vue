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
<path d="M20.25 4.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5h16.5ZM20.78 9.72c.141.14.22.331.22.53v4.25h-5v-5h4.25a.75.75 0 0 1 .53.22ZM14.5 14.5v-4.018c-.25.036-.506.018-.75-.054v.822a1.75 1.75 0 1 1-3.5 0v-.822c-.244.072-.5.09-.75.054V14.5h5ZM9.5 16h5v5h-5v-5ZM8 14.5v-5H3.75a.75.75 0 0 0-.75.75v4.25h5ZM3 16h5v5H6.25A3.25 3.25 0 0 1 3 17.75V16ZM16 16h5v1.75A3.25 3.25 0 0 1 17.75 21H16v-5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M14.81 9.248a.75.75 0 0 1-1.058.063l-1.002-.89v2.829a.75.75 0 0 1-1.5 0V8.42l-1.002.89a.75.75 0 0 1-.996-1.12l2.25-2a.75.75 0 0 1 .996 0l2.25 2a.75.75 0 0 1 .063 1.058Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTableMoveAbove',
    mixins: [icon]
};
</script>