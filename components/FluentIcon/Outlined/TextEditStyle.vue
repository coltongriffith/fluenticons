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
<path d="M20.063 8.445a3.218 3.218 0 0 1-.002 4.551l-7.123 7.112a2.251 2.251 0 0 1-.943.562L7.702 21.96a1 1 0 0 1-1.24-1.264l1.362-4.228c.11-.34.3-.65.552-.903l7.133-7.121a3.22 3.22 0 0 1 4.554.002Zm-3.494 1.06-7.133 7.12a.75.75 0 0 0-.184.301l-1.07 3.323 3.382-1.015a.749.749 0 0 0 .314-.188L19 11.936a1.718 1.718 0 1 0-2.431-2.432ZM8.15 2.37l.05.105 3.253 8.249-1.157 1.155L9.556 10H5.443l-.995 2.52a.75.75 0 0 1-.876.454l-.098-.031a.75.75 0 0 1-.452-.876l.03-.098 3.754-9.495c.236-.595 1.043-.63 1.345-.104Zm-.648 2.422L6.036 8.5h2.928L7.503 4.792Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextEditStyle',
    mixins: [icon]
};
</script>