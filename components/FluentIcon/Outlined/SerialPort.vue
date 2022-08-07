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
<path d="M7 11.5A.75.75 0 1 0 7 10a.75.75 0 0 0 0 1.5ZM10.25 10.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM8.25 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM11.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM13.25 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM16.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 11.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.25 10.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM17 11.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M4.907 7a2.75 2.75 0 0 0-2.675 3.386l1.071 4.502A2.75 2.75 0 0 0 5.98 17h12.038a2.75 2.75 0 0 0 2.675-2.112l1.074-4.501A2.75 2.75 0 0 0 19.092 7H4.906Zm-1.216 3.039a1.25 1.25 0 0 1 1.216-1.54h14.184a1.25 1.25 0 0 1 1.216 1.54l-1.074 4.502a1.25 1.25 0 0 1-1.216.96H5.98a1.25 1.25 0 0 1-1.216-.96L3.69 10.038Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSerialPort',
    mixins: [icon]
};
</script>