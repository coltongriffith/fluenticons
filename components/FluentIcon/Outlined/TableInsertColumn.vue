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
<path d="M4.5 3.75v16.5a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 1.5 0ZM14.25 3a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 14.25 21h-4.5a2.25 2.25 0 0 1-2.25-2.25V5.25A2.25 2.25 0 0 1 9.75 3h4.5ZM15 5.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75V8.5h6V5.25ZM9 14h6v-4H9v4Zm0 1.5v3.25c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75V15.5H9ZM21 20.25V3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTableInsertColumn',
    mixins: [icon]
};
</script>