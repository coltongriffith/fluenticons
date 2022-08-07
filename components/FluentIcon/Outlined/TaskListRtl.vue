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
<path d="M21.78 4.78a.75.75 0 0 0-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2.5-2.5Zm-7.53 13.227H2.75l-.102.007a.75.75 0 0 0 .102 1.493h11.5l.102-.007a.75.75 0 0 0-.102-1.493Zm0-6.507H2.75l-.102.007A.75.75 0 0 0 2.75 13h11.5l.102-.007a.75.75 0 0 0-.102-1.493Zm0-6.5H2.75l-.102.007A.75.75 0 0 0 2.75 6.5h11.5l.102-.007A.75.75 0 0 0 14.25 5Zm7.53 12.78a.75.75 0 1 0-1.06-1.06l-1.97 1.97-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2.5-2.5Zm0-7.56a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.97-1.97a.75.75 0 0 1 1.06 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTaskListRtl',
    mixins: [icon]
};
</script>