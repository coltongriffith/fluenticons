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
<path d="m2.753 11.996 2.5.011a.75.75 0 0 1 .095 1.494l-.102.006-1.746-.009v5.501L5.25 19a.75.75 0 0 1 .742.648L6 19.75a.75.75 0 0 1-.648.743l-.102.007h-2.5a.75.75 0 0 1-.742-.648L2 19.75v-7.004a.75.75 0 0 1 .651-.744l.102-.006ZM21.245 17.5a.75.75 0 0 1 .102 1.493l-.102.007H7.748a.75.75 0 0 1-.101-1.493l.101-.007h13.497Zm0-4a.75.75 0 0 1 .102 1.493l-.102.007H7.748a.75.75 0 0 1-.101-1.493l.101-.007h13.497ZM2.753 2.5l2.5.011a.75.75 0 0 1 .095 1.494l-.102.006L3.5 4.003v5.492h1.75a.75.75 0 0 1 .742.648l.007.102a.75.75 0 0 1-.648.743l-.102.007h-2.5a.75.75 0 0 1-.742-.648L2 10.245V3.25a.75.75 0 0 1 .651-.744l.102-.006Zm18.492 5.504a.75.75 0 0 1 .102 1.493l-.102.007H7.748a.75.75 0 0 1-.101-1.493l.101-.007h13.497Zm.005-4a.75.75 0 0 1 .102 1.493l-.102.007H7.754a.75.75 0 0 1-.102-1.493l.102-.007H21.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedGroupList',
    mixins: [icon]
};
</script>