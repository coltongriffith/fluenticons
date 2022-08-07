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
<path d="M8.254 8.003c.967 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 19.253v-9.5c0-.966.784-1.75 1.75-1.75h4.504Zm-2.002 9.495h-.5a.75.75 0 1 0 0 1.5h.5a.75.75 0 0 0 0-1.5ZM21.25 16.5a.75.75 0 0 1 .102 1.493L21.25 18H11v-1.5h10.25ZM18.25 5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.25 16H11V9a2 2 0 0 0-1.85-1.994L9 7H4v-.25C4 5.784 4.784 5 5.75 5h12.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPhoneLaptop',
    mixins: [icon]
};
</script>