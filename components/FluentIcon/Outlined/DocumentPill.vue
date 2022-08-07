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
<path d="M5.5 4.25a.75.75 0 0 1 .75-.75H12V8a2 2 0 0 0 2 2h4.5v1.43c.479-.2.99-.301 1.5-.301V9.664c0-.464-.184-.909-.513-1.237l-5.914-5.914A1.75 1.75 0 0 0 12.336 2H6.25A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h5.434a3.857 3.857 0 0 1-.523-1.5H6.25a.75.75 0 0 1-.75-.75V4.25ZM17.44 8.5H14a.5.5 0 0 1-.5-.5V4.56l3.94 3.94Zm4.59 4.47a2.871 2.871 0 0 0-4.06 0l-5 5a2.871 2.871 0 1 0 4.06 4.06l5-5a2.871 2.871 0 0 0 0-4.06Zm-3 1.06a1.371 1.371 0 1 1 1.94 1.94L19 17.94 17.06 16l1.97-1.97Zm-2 4.94a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentPill',
    mixins: [icon]
};
</script>