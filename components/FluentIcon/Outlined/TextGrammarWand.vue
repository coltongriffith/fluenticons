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
<path d="M2.75 17h7.775l-1.5 1.5H2.75a.75.75 0 0 1-.102-1.493L2.75 17ZM2.75 14.5h7.564a1.745 1.745 0 0 1-.241-1.5H2.75l-.102.007A.75.75 0 0 0 2.75 14.5ZM12.72 16.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM2.75 9h10.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493L2.75 9ZM2.75 5h18.5a.75.75 0 0 1 .102 1.493l-.102.007H2.75a.75.75 0 0 1-.102-1.493L2.75 5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M16.5 8a.75.75 0 0 1 .744.658l.14 1.13a3.25 3.25 0 0 0 2.828 2.829l1.13.139a.75.75 0 0 1 0 1.488l-1.13.14a3.25 3.25 0 0 0-2.829 2.828l-.139 1.13a.75.75 0 0 1-1.488 0l-.14-1.13a3.25 3.25 0 0 0-2.828-2.829l-1.13-.139a.75.75 0 0 1 0-1.488l1.13-.14a3.25 3.25 0 0 0 2.829-2.828l.139-1.13A.75.75 0 0 1 16.5 8Zm0 3.774a4.761 4.761 0 0 1-1.726 1.726 4.761 4.761 0 0 1 1.726 1.726 4.761 4.761 0 0 1 1.726-1.726 4.761 4.761 0 0 1-1.726-1.726Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextGrammarWand',
    mixins: [icon]
};
</script>