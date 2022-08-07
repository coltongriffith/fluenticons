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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-6.186 7.5c.172.534.412 1.038.709 1.501L2.75 21a.75.75 0 0 1-.102-1.493l.102-.007h8.564Zm3.779-4.534-.07.058-.057.07a.5.5 0 0 0 0 .568l.058.07 1.77 1.769-1.768 1.766-.057.07a.5.5 0 0 0 0 .568l.057.07.07.057a.5.5 0 0 0 .568 0l.07-.057 1.766-1.767 1.77 1.769.069.058a.5.5 0 0 0 .568 0l.07-.058.057-.07a.5.5 0 0 0 0-.568l-.057-.07-1.77-1.768 1.772-1.77.058-.069a.5.5 0 0 0 0-.569l-.058-.069-.069-.058a.5.5 0 0 0-.569 0l-.069.058-1.772 1.77-1.77-1.77-.068-.058a.5.5 0 0 0-.493-.043l-.076.043ZM15.75 3.5a.75.75 0 0 1 .75.774l-.01.097-.245 1.5a.75.75 0 0 1-1.49-.14l.01-.102.102-.629h-3.86L9.001 16.5h.749a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743L9.75 18h-3a.75.75 0 0 1-.102-1.493l.102-.007h.729L9.485 5h-4.1l-.146.874a.75.75 0 0 1-1.49-.146l.01-.102.251-1.5a.75.75 0 0 1 .632-.618L4.75 3.5h11Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedClearFormatting',
    mixins: [icon]
};
</script>