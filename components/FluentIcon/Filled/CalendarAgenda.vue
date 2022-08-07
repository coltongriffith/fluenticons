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
<path d="M21 17.75A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5Zm-4-10a.75.75 0 0 0-.648-.743L16.25 7h-8.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h8.5l.102-.007A.75.75 0 0 0 17 7.75Zm0 8.5a.75.75 0 0 0-.648-.743l-.102-.007h-8.5l-.102.007a.75.75 0 0 0 0 1.486L7.75 17h8.5l.102-.007A.75.75 0 0 0 17 16.25ZM17 12a.75.75 0 0 0-.648-.743l-.102-.007h-8.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h8.5l.102-.007A.75.75 0 0 0 17 12Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCalendarAgenda',
    mixins: [icon]
};
</script>