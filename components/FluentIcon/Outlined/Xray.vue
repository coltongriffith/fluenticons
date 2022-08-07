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
<path d="M12.75 5.75a.75.75 0 0 0-1.5 0v.75H9A.75.75 0 0 0 9 8h2.25v1h-3.5a.75.75 0 0 0 0 1.5h3.5v1h-3.5a.75.75 0 0 0 0 1.5h3.5v1.5h-2a2.25 2.25 0 1 0 2.122 1.5h1.256a2.25 2.25 0 1 0 2.122-1.5h-2V13h3.5a.75.75 0 0 0 0-1.5h-3.5v-1h3.5a.75.75 0 0 0 0-1.5h-3.5V8H15a.75.75 0 0 0 0-1.5h-2.25v-.75Zm2 10.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm-6.25.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM7.25 2A3.25 3.25 0 0 0 4 5.25v13.5A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75V5.25A3.25 3.25 0 0 0 16.75 2h-9.5ZM5.5 5.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v13.5a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75V5.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedXray',
    mixins: [icon]
};
</script>