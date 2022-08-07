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
<path d="M11.314 3.527a.75.75 0 1 0-.12-1.495C6.049 2.442 2 6.748 2 12c0 5.523 4.477 10 10 10 5.249 0 9.553-4.044 9.967-9.186a.75.75 0 1 0-1.495-.12 8.5 8.5 0 1 1-9.158-9.167ZM17.697 4.674a.75.75 0 0 1 1.06-.046c.214.196.42.402.616.617a.75.75 0 0 1-1.105 1.013 8.552 8.552 0 0 0-.525-.525.75.75 0 0 1-.046-1.06Z" :fill="fill" :fill-opacity="opacity" />

<path d="M11.25 6a.75.75 0 0 1 .743.648L12 6.75V12h3.25a.75.75 0 0 1 .102 1.493l-.102.007h-4a.75.75 0 0 1-.743-.649l-.007-.101v-6a.75.75 0 0 1 .75-.75ZM13.781 2.89a.75.75 0 0 1 .925-.52 9.92 9.92 0 0 1 1.074.37.75.75 0 1 1-.567 1.388c-.296-.121-.6-.226-.912-.313a.75.75 0 0 1-.52-.925ZM21.259 8.215a.75.75 0 1 0-1.389.568 8.405 8.405 0 0 1 .315.915.75.75 0 1 0 1.444-.405 9.91 9.91 0 0 0-.37-1.078Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShiftsActivity',
    mixins: [icon]
};
</script>