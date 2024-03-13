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
<path d="M5.752 22.005a2.25 2.25 0 0 1-2.25-2.25L3.5 5.75A2.25 2.25 0 0 1 5.75 3.5l.747-.001V2.75a.75.75 0 0 1 .65-.743L7.247 2a.75.75 0 0 1 .743.648l.007.102v.749H11V2.75a.75.75 0 0 1 .649-.743L11.75 2a.75.75 0 0 1 .743.648l.007.102v.749h2.998V2.75a.75.75 0 0 1 .648-.743L16.25 2a.75.75 0 0 1 .743.648L17 2.75v.749h.749a2.25 2.25 0 0 1 2.25 2.25v4.328a3.727 3.727 0 0 0-1.5-.544V5.75a.75.75 0 0 0-.75-.75H5.74a.75.75 0 0 0-.74.75l.001 14.004c0 .415.337.75.75.75h6.518c.2.541.505 1.049.903 1.5h-7.42Zm12.746-11.46c.587.108 1.108.4 1.5.817a2.74 2.74 0 0 1 .752 1.888 2.74 2.74 0 0 1-.75 1.888A2.746 2.746 0 0 1 18 16a2.75 2.75 0 1 1 .498-5.455ZM14.484 17H21.5A1.5 1.5 0 0 1 23 18.5v.5c0 1.971-1.86 4-5 4-1.379 0-2.51-.39-3.346-.995a4.13 4.13 0 0 1-1.293-1.501A3.39 3.39 0 0 1 13 19v-.5a1.5 1.5 0 0 1 1.486-1.5Zm-7.236-5h7.214a3.744 3.744 0 0 0-.205 1.5H7.248a.75.75 0 0 1-.102-1.493L7.248 12Zm0 4h3.999a.75.75 0 0 1 .102 1.493l-.102.007H7.248a.75.75 0 0 1-.102-1.493L7.248 16Zm0-8h9a.75.75 0 0 1 .101 1.493l-.101.007h-9a.75.75 0 0 1-.102-1.493L7.248 8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedNotepadPerson',
    mixins: [icon]
};
</script>