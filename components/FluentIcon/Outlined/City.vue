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
<path d="M12 1.997a.75.75 0 0 1 .75.75V4h2c.966 0 1.75.784 1.75 1.75V11h2.25c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 18.75 22H5.25a1.75 1.75 0 0 1-1.75-1.75v-8.429c0-.619.327-1.192.86-1.507L7.5 8.46V5.75C7.5 4.784 8.284 4 9.25 4h2V2.747a.75.75 0 0 1 .75-.75ZM9 8.02c.81.12 1.5.806 1.5 1.734V20.5h3v-7.75a1.75 1.75 0 0 1 1.5-1.732V5.75a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V8.02Zm6.25 4.481a.25.25 0 0 0-.25.25v7.75h3.75a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25h-3.5ZM8.623 9.538l-3.5 2.068A.25.25 0 0 0 5 11.82v8.43c0 .137.112.25.25.25H9V9.752a.25.25 0 0 0-.377-.215Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCity',
    mixins: [icon]
};
</script>