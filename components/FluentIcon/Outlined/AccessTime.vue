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
<path d="M7.5 8.744C7.847 8.362 8.415 8 9.25 8c1.152 0 1.894.792 2.155 1.661.253.847.1 1.895-.62 2.618a8.092 8.092 0 0 1-.793.67l-.04.031c-.28.216-.53.412-.75.63-.255.256-.464.535-.585.89h2.133a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75c0-1.247.524-2.083 1.144-2.701.296-.296.618-.545.89-.756l.003-.002c.286-.221.508-.393.685-.57.272-.274.367-.725.246-1.13-.115-.381-.37-.591-.718-.591-.353 0-.535.137-.64.253a.843.843 0 0 0-.148.229v.003a.75.75 0 0 1-1.428-.462l.035-.096a2.343 2.343 0 0 1 .43-.683ZM13.25 8a.75.75 0 0 1 .75.75v2.75h1.5V8.75a.75.75 0 0 1 1.5 0v6.47a.75.75 0 0 1-1.5 0V13h-2.25a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10ZM3.5 12a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAccessTime',
    mixins: [icon]
};
</script>