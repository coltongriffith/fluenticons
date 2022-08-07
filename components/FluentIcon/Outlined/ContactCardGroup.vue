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
<path d="M18.75 4A3.25 3.25 0 0 1 22 7.25v9.505a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.755V7.25a3.25 3.25 0 0 1 3.066-3.245L5.25 4h13.5Zm0 1.5H5.25l-.144.006A1.75 1.75 0 0 0 3.5 7.25v9.505c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V7.25a1.75 1.75 0 0 0-1.75-1.75Zm-9.497 7a.75.75 0 0 1 .75.75v.582c0 1.272-.969 1.918-2.502 1.918S5 15.104 5 13.831v-.581a.75.75 0 0 1 .75-.75h3.503Zm1.58-.001 1.417.001a.75.75 0 0 1 .75.75v.333c0 .963-.765 1.417-1.875 1.417-.116 0-.229-.005-.337-.015a2.85 2.85 0 0 0 .206-.9l.009-.253v-.582c0-.269-.061-.524-.17-.751Zm4.417.001h3a.75.75 0 0 1 .102 1.493L18.25 14h-3a.75.75 0 0 1-.102-1.493l.102-.007h3-3Zm-7.75-4a1.5 1.5 0 1 1 0 3.001 1.5 1.5 0 0 1 0-3.001Zm3.87.502a1.248 1.248 0 1 1 0 2.496 1.248 1.248 0 0 1 0-2.496Zm3.88.498h3a.75.75 0 0 1 .102 1.493L18.25 11h-3a.75.75 0 0 1-.102-1.493l.102-.007h3-3Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedContactCardGroup',
    mixins: [icon]
};
</script>