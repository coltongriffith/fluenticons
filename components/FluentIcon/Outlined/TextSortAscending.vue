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
<path d="m17 19.44 3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V2.75a.75.75 0 0 1 1.5 0v16.69ZM7.072 2a.75.75 0 0 1 .697.487l3.184 8.5a.75.75 0 0 1-1.405.526L8.794 9.5H5.238l-.79 2.023a.75.75 0 0 1-1.397-.546l3.317-8.5A.75.75 0 0 1 7.072 2Zm-.02 2.85L5.823 8h2.41l-1.18-3.15ZM4.75 13a.75.75 0 1 0 0 1.5h3.388l-4.021 6.349a.75.75 0 0 0 .633 1.15H9.5a.75.75 0 1 0 0-1.5H6.113l4.021-6.348A.75.75 0 0 0 9.5 13H4.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextSortAscending',
    mixins: [icon]
};
</script>