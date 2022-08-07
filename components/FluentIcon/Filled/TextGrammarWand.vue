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
<path d="M3 17h7.522l-2 2H3a1 1 0 0 1-.117-1.993L3 17ZM3 15h7.848a1.75 1.75 0 0 1-.775-2H3l-.117.007A1 1 0 0 0 3 15ZM3 7h18l.117-.007A1 1 0 0 0 21 5H3l-.117.007A1 1 0 0 0 3 7ZM12.72 16.216a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l4.5-4.5ZM3 9h10a1 1 0 0 1 .117 1.993L13 11H3a1 1 0 0 1-.117-1.993L3 9Z" :fill="fill" :fill-opacity="opacity" />

<path d="M16.5 8a.75.75 0 0 1 .744.658l.14 1.13a3.25 3.25 0 0 0 2.828 2.829l1.13.139a.75.75 0 0 1 0 1.488l-1.13.14a3.25 3.25 0 0 0-2.829 2.828l-.139 1.13a.75.75 0 0 1-1.488 0l-.14-1.13a3.25 3.25 0 0 0-2.828-2.829l-1.13-.139a.75.75 0 0 1 0-1.488l1.13-.14a3.25 3.25 0 0 0 2.829-2.828l.139-1.13A.75.75 0 0 1 16.5 8Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextGrammarWand',
    mixins: [icon]
};
</script>