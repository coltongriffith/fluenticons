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
<path d="M3.94 5 2.22 3.28a.75.75 0 0 1 1.06-1.06l18.5 18.5a.75.75 0 0 1-1.06 1.06l-2.293-2.292-.003.031A2.75 2.75 0 0 1 15.687 22H8.313a2.75 2.75 0 0 1-2.737-2.48L4.345 7H3.5a1 1 0 0 1 0-2h.44ZM15 16.06l-1.5-1.5V17l.007.102a.75.75 0 0 0 1.486 0L15 17v-.94Zm-4.5-4.5L9 10.06V17l.007.102a.75.75 0 0 0 1.486 0L10.5 17v-5.44ZM15 10v1.818l3.807 3.807L19.655 7h.845l.117-.007A1 1 0 0 0 20.5 5h-5a3.5 3.5 0 1 0-7 0h-.318l5.318 5.318V10l.007-.102a.75.75 0 0 1 1.486 0L15 10Zm-3-6.5A1.5 1.5 0 0 1 13.5 5h-3A1.5 1.5 0 0 1 12 3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDeleteOff',
    mixins: [icon]
};
</script>