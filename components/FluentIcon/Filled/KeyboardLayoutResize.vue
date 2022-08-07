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
<path d="M21.25 10.5a.75.75 0 0 1 .743.648l.007.102v8.5a2.25 2.25 0 0 1-2.096 2.245L19.75 22h-2a.75.75 0 0 1-.102-1.493l.102-.007h2a.75.75 0 0 0 .743-.648l.007-.102v-8.5a.75.75 0 0 1 .75-.75Zm0-8.5.07.003.101.017.068.019.06.023.07.035.082.054.08.07.051.056.045.062.05.09.017.037.024.066c.011.037.02.076.025.116L22 2.75v5a.75.75 0 0 1-1.493.102L20.5 7.75V4.56l-4.47 4.47a.75.75 0 0 1-1.133-.976l.073-.084 4.468-4.47H16.25a.75.75 0 0 1-.743-.648L15.5 2.75a.75.75 0 0 1 .648-.743L16.25 2h5Zm-8 8.5a2.25 2.25 0 0 1 2.245 2.096l.005.154v7a2.25 2.25 0 0 1-2.096 2.245L13.25 22h-9a2.25 2.25 0 0 1-2.245-2.096L2 19.75v-7a2.25 2.25 0 0 1 2.096-2.245l.154-.005h9Zm-2.5 7h-4c-.41 0-.75.37-.75.75s.282.694.648.743L6.75 19h4c.41 0 .75-.37.75-.75a.75.75 0 0 0-.648-.743l-.102-.007ZM6 13.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm5.5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2.75 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4-11.5a.75.75 0 0 1 .102 1.493l-.102.007h-8.5a.75.75 0 0 0-.743.648L3.5 4.25v4a.75.75 0 0 1-1.493.102L2 8.25v-4a2.25 2.25 0 0 1 2.096-2.245L4.25 2h8.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledKeyboardLayoutResize',
    mixins: [icon]
};
</script>