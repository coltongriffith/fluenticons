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
<path d="M13.5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM7 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" :fill="fill" :fill-opacity="opacity" />

<path d="M2 6.316c0-1.44 1.318-2.491 2.692-2.299C6.268 4.238 8.809 4.5 12 4.5s5.732-.262 7.308-.483c1.374-.192 2.692.858 2.692 2.3v11.368c0 1.44-1.318 2.49-2.69 2.298A53.307 53.307 0 0 0 12 19.5c-3.19 0-5.732.262-7.309.483-1.373.193-2.69-.858-2.691-2.298V6.316Zm2.483-.813c-.524-.074-.983.337-.983.813v11.369c0 .476.458.886.983.813l.517-.07V16a1 1 0 0 1 1-1h2.5v3.104a57.09 57.09 0 0 1 1.5-.07V15a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3.034c.523.018 1.023.042 1.5.07V15H18a1 1 0 0 1 1 1v2.429c.182.023.355.046.517.069.525.073.983-.337.983-.813V6.316c0-.476-.459-.887-.983-.813C17.884 5.732 15.272 6 12 6c-3.272 0-5.884-.268-7.517-.497Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedVideo360',
    mixins: [icon]
};
</script>