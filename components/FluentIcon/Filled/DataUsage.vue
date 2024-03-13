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
<path d="M18.25 2.997A2.75 2.75 0 0 1 21 5.747v12.5a2.75 2.75 0 0 1-2.75 2.75H5.75A2.75 2.75 0 0 1 3 18.247v-12.5a2.75 2.75 0 0 1 2.75-2.75h12.5ZM7.75 9a.748.748 0 0 0-.75.747v6.507c0 .412.336.746.75.746s.75-.334.75-.746V9.747A.748.748 0 0 0 7.75 9Zm8.5-2a.74.74 0 0 0-.75.73v8.541c0 .403.336.73.75.73a.74.74 0 0 0 .75-.73V7.73a.74.74 0 0 0-.75-.73Zm-4.275 4.997a.73.73 0 0 0-.725.734l.035 3.547a.73.73 0 0 0 .74.72.73.73 0 0 0 .725-.734l-.035-3.548a.73.73 0 0 0-.74-.719Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDataUsage',
    mixins: [icon]
};
</script>