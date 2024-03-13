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
<path d="M12.753 2c1.158 0 2.111.875 2.234 2h1.763a2.25 2.25 0 0 1 2.245 2.096L19 6.25a.75.75 0 0 1-.647.742L18.249 7a.75.75 0 0 1-.742-.647L17.5 6.25a.75.75 0 0 0-.648-.743L16.75 5.5h-2.132a2.244 2.244 0 0 1-1.865.993H9.247c-.777 0-1.461-.393-1.865-.992L5.25 5.5a.75.75 0 0 0-.743.648L4.5 6.25v13.505c0 .38.282.693.648.743l.102.007h3a.75.75 0 0 1 .743.647l.007.102a.75.75 0 0 1-.75.75h-3a2.25 2.25 0 0 1-2.245-2.095L3 19.755V6.25a2.25 2.25 0 0 1 2.096-2.245L5.25 4h1.763a2.247 2.247 0 0 1 2.234-2h3.506Zm5.997 6a2.25 2.25 0 0 1 2.245 2.096l.005.154v9.5a2.25 2.25 0 0 1-2.096 2.245L18.75 22h-6.5a2.25 2.25 0 0 1-2.245-2.096L10 19.75v-9.5a2.25 2.25 0 0 1 2.096-2.245L12.25 8h6.5Zm-5.997-4.5H9.247a.747.747 0 0 0 0 1.493h3.506a.747.747 0 1 0 0-1.493Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClipboardPaste',
    mixins: [icon]
};
</script>