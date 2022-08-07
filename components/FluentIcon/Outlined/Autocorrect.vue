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
<path d="M13.461 4.934c.293.184.548.42.752.698l.117.171 2.945 4.696H21.5a.75.75 0 0 1 .743.649l.007.102a.75.75 0 0 1-.75.75l-3.284-.001.006.009-.009-.01a4.75 4.75 0 1 1-3.463-1.5h.756L13.059 6.6a1.25 1.25 0 0 0-2.04-.112l-.078.112-7.556 12.048a.75.75 0 0 1-1.322-.699l.052-.098L9.67 5.803a2.75 2.75 0 0 1 3.791-.869ZM14.751 12a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAutocorrect',
    mixins: [icon]
};
</script>