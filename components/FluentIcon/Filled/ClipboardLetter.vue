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
<path d="M13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h4.831a1.495 1.495 0 0 1 .046-1.115l1.791-3.982.016-.035.833-1.853V15h.007l1.85-4.115a1.5 1.5 0 0 1 2.736-.001L20 14.522V6.25A2.25 2.25 0 0 0 17.75 4h-1.764a2.25 2.25 0 0 0-2.236-2Zm-3.5 1.5h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5Z" :fill="fill" :fill-opacity="opacity" />
<path d="M12.508 22a.513.513 0 0 1-.218-.044.5.5 0 0 1-.25-.661l1.794-3.99.006-.013c0-.003.002-.005.003-.007l2.694-5.99a.5.5 0 0 1 .911 0l2.7 5.99a.46.46 0 0 1 .01.02l1.798 3.99a.5.5 0 1 1-.912.41L19.374 18h-4.756l-1.667 3.705a.5.5 0 0 1-.443.295Zm4.485-9.282L15.067 17h3.856l-1.93-4.282Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClipboardLetter',
    mixins: [icon]
};
</script>