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
<path d="m16.613 15.21.094.083 1.793 1.792 1.793-1.792a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-1.792 1.793 1.792 1.793a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-1.793-1.792-1.793 1.792a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 1.792-1.793-1.792-1.793a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.218-.153l.102.07ZM18.5 3A2.5 2.5 0 0 1 21 5.5v5a2.5 2.5 0 0 1-2.5 2.5H13v5.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3h13ZM5 13v5.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V13H5Zm6-8H5.5a.5.5 0 0 0-.5.5V11h6V5Zm7.5 0H13v6h5.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledUninstallApp',
    mixins: [icon]
};
</script>