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
<path d="M18.25 14.5a3.75 3.75 0 0 1 .202 7.495l-.199.005-1 .005a.75.75 0 0 1-.108-1.493l.102-.007 1.003-.005a2.25 2.25 0 0 0 .154-4.495L18.25 16h-1a.75.75 0 0 1-.102-1.493l.102-.007h1Zm-4.5 0a.75.75 0 0 1 .102 1.493L13.75 16h-1a2.25 2.25 0 0 0-.154 4.495l.154.005h1a.75.75 0 0 1 .102 1.493L13.75 22h-1a3.75 3.75 0 0 1-.2-7.495l.2-.005h1Zm6-8a2.25 2.25 0 0 1 2.229 1.938l.016.158.005.154v6.585a4.742 4.742 0 0 0-3.75-1.835h-5.5a4.75 4.75 0 0 0-4.417 6.501L4.25 20a2.25 2.25 0 0 1-2.245-2.096L2 17.75v-7.251l6.207.001.196-.009a2.25 2.25 0 0 0 1.088-.393l.156-.12L13.821 6.5h5.929Zm-1.5 11a.75.75 0 0 1 .102 1.493L18.25 19h-5.5a.75.75 0 0 1-.102-1.493l.102-.007h5.5ZM8.207 4c.46 0 .908.141 1.284.402l.156.12 2.103 1.751-3.063 2.553-.085.061a.75.75 0 0 1-.29.106L8.206 9 2 8.999V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h3.957Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFolderLink',
    mixins: [icon]
};
</script>