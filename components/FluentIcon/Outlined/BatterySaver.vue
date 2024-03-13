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
<path d="M7.375 4.342a.75.75 0 0 1 1.288.051c1.555 2.873 2.34 5.084 2.34 6.688 0 1.685-.61 2.981-1.83 3.797a.75.75 0 1 1-.834-1.246c.778-.521 1.165-1.341 1.165-2.551 0-1.06-.48-2.599-1.447-4.59l-.176-.356-.25.269A12.76 12.76 0 0 1 6.464 7.47l-.336.265-.913.697c-1.367 1.078-1.806 1.793-1.7 3.054.097 1.148.745 1.83 2.103 2.126.616-1.357.91-2.636.892-3.842a.75.75 0 0 1 1.5-.023c.022 1.464-.334 2.988-1.061 4.566-.763 1.658-2.079 2.875-3.912 3.633a.75.75 0 1 1-.574-1.386c.964-.399 1.735-.937 2.322-1.62-1.66-.519-2.622-1.648-2.764-3.328-.16-1.883.536-2.993 2.272-4.363l.837-.639.37-.29c.832-.672 1.457-1.334 1.876-1.98ZM11.75 6H17a3 3 0 0 1 2.995 2.824L20 9v1l1 .018a1 1 0 0 1 .993.878l.008.122v2a1 1 0 0 1-.866.991l-.134.01L20 14v1a3 3 0 0 1-2.824 2.995L17 18H6.75a.75.75 0 0 1-.102-1.493l.102-.007H17a1.5 1.5 0 0 0 1.493-1.355L18.5 15V9a1.5 1.5 0 0 0-1.356-1.493L17 7.5h-5.25a.75.75 0 0 1-.102-1.493L11.75 6H17h-5.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedBatterySaver',
    mixins: [icon]
};
</script>