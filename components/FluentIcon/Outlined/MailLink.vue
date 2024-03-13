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
<path d="M23 6.75A3.75 3.75 0 0 0 19.25 3l-.102.007A.75.75 0 0 0 19.25 4.5l.154.005A2.25 2.25 0 0 1 19.25 9l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V10.5l.2-.005A3.75 3.75 0 0 0 23 6.75Zm-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 9l-.154-.005A2.25 2.25 0 0 1 15.75 4.5l.102-.007a.75.75 0 0 0 .648-.743Zm3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 15.75 7.5h3.5l.102-.007A.75.75 0 0 0 20 6.75ZM5.25 4h6.627a4.728 4.728 0 0 0-.71 1.5H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l8.5 4.473 1.928-1.014a4.735 4.735 0 0 0 1.822.362h.71l-4.11 2.164a.75.75 0 0 1-.603.042l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-5.416a4.728 4.728 0 0 0 1.5-.71v6.126a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245L5.25 4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMailLink',
    mixins: [icon]
};
</script>