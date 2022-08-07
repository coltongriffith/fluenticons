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
<path d="M19.25 8.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM15.576 6.503a3.768 3.768 0 0 1-.002-1.5H2.752l-.102.007a.75.75 0 0 0 .102 1.493h12.824ZM21.253 18h-18.5l-.102.007a.75.75 0 0 0 .102 1.493h18.5l.102-.007A.75.75 0 0 0 21.253 18ZM2.753 11.503h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493l.102-.007Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedNavigationUnread',
    mixins: [icon]
};
</script>