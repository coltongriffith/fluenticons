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
<path d="M4.75 2a.75.75 0 1 0 0 1.5h3.387l-4.02 6.349A.75.75 0 0 0 4.75 11H9.5a.75.75 0 0 0 0-1.5H6.113l4.02-6.349A.75.75 0 0 0 9.5 2H4.75Zm2.322 10a.75.75 0 0 0-.704.477l-3.317 8.5a.75.75 0 0 0 1.398.545l.79-2.022h3.555l.754 2.013a.75.75 0 0 0 1.405-.526l-3.184-8.5A.75.75 0 0 0 7.072 12Zm-.02 2.85L8.232 18H5.823l1.23-3.15Zm4.168 1.37a.75.75 0 0 1 1.06 0l3.22 3.22V2.75a.75.75 0 0 1 1.5 0v16.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 0-1.06Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextSortDescending',
    mixins: [icon]
};
</script>