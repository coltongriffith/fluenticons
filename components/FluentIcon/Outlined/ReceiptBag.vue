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
<path d="M7.25 2A2.25 2.25 0 0 0 5 4.25v5.286c.26.037.511.103.75.194.239-.091.49-.157.75-.194V4.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75V17h-5v1.5h6.75a3.25 3.25 0 0 0 3.25-3.25V12H18V4.25A2.25 2.25 0 0 0 15.75 2h-8.5Zm11 15H18v-3.5h2v1.75A1.75 1.75 0 0 1 18.25 17Zm-7.275-3.5h3.275a.75.75 0 0 0 0-1.5h-3.895a3.5 3.5 0 0 1 .145 1v.168c.177.084.337.197.475.332ZM8.804 10h5.446a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.607 1.19c.233.081.454.185.66.31ZM8.75 5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM1 14.75a.75.75 0 0 1 .75-.75H2v-1a2.5 2.5 0 0 1 3.75-2.165A2.5 2.5 0 0 1 9.5 13v1h.25a.75.75 0 0 1 .75.75v6A2.25 2.25 0 0 1 8.25 23h-5A2.25 2.25 0 0 1 1 20.75v-6ZM7 13v1h1v-1a1 1 0 0 0-1.2-.98c.129.3.2.632.2.98Zm-1.5 1v-1a1 1 0 0 0-2 0v1h2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedReceiptBag',
    mixins: [icon]
};
</script>