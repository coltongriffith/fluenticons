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
<path d="M12.5 10H11v4h1.5v-4Z" :fill="fill" :fill-opacity="opacity" />

<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25V7.5H11v-3H6.25Zm13.25 12h-7v3h5.25a1.75 1.75 0 0 0 1.75-1.75V16.5Zm0-10.25a1.75 1.75 0 0 0-1.75-1.75H12.5v3h7V6.25ZM4.5 16.5v1.25c0 .966.784 1.75 1.75 1.75H11v-3H4.5Zm0-1.5h15V9h-15v6Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTableCellsSplit',
    mixins: [icon]
};
</script>