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
<path d="M21 8.5V11a3.75 3.75 0 1 0-5.55 5h-.95a2.5 2.5 0 0 0-2.5 2.5v.5c0 .7.17 1.379.488 2H6.25A3.25 3.25 0 0 1 3 17.75V8.5h18ZM17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3h11.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 18.5a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0-1.5 1.5v.5c0 1.971 1.86 4 5 4 3.14 0 5-2.029 5-4v-.5ZM20.75 13.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCalendarPerson',
    mixins: [icon]
};
</script>