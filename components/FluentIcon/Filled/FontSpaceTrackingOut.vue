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
<path d="M4.387 16.21a1 1 0 0 1 1.226 0l.094.083.083.094a1 1 0 0 1 0 1.226l-.083.094-.293.293h13.172l-.293-.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083l.094.083 2 2a1 1 0 0 1 .083 1.32l-.083.094-2 2a1 1 0 0 1-1.497-1.32l.083-.094.292-.293H5.415l.292.293.083.094a1 1 0 0 1-1.403 1.403l-.094-.083-2-2-.083-.094a1 1 0 0 1 0-1.226l.083-.094 2-2 .094-.083ZM8.12 2.417l.064.103.053.116 4.304 11a1 1 0 0 1-1.814.835l-.049-.107-1.111-2.839H5.042l-1.11 2.84a1 1 0 0 1-1.185.602l-.111-.036a1 1 0 0 1-.603-1.184l.036-.111 4.304-11c.3-.767 1.31-.84 1.746-.22Zm11.972.113a1 1 0 0 1 1.85.724l-.036.11-4.304 11-.053.116c-.372.694-1.386.694-1.757 0l-.053-.115-4.304-11-.036-.111a1 1 0 0 1 .496-1.136l.107-.049.11-.036a1 1 0 0 1 1.136.497l.05.106 3.372 8.621 3.373-8.621.05-.106ZM7.304 5.743l-1.48 3.782h2.96l-1.48-3.782Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFontSpaceTrackingOut',
    mixins: [icon]
};
</script>