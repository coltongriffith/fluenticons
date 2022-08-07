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
<path d="M13.939 5 19 10.06 9.062 20a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999L13.94 5Zm-7.414 6-1.5 1.5H2.75a.75.75 0 0 1 0-1.5h3.775Zm14.352-8.174.153.144.145.153a3.579 3.579 0 0 1-.145 4.908L20.06 9l-5.061-5.06.97-.97a3.579 3.579 0 0 1 4.908-.144ZM10.525 7l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5h7.775Zm4-4-1.5 1.5H2.75a.75.75 0 1 1 0-1.5h11.775Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDrafts',
    mixins: [icon]
};
</script>