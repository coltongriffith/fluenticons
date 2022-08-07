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
<path d="M20.023 7.542a5.21 5.21 0 0 1-.218.154 1 1 0 1 1-1.11-1.664c.724-.483 1.241-1.244 1.35-1.745a1 1 0 0 1 1.978.213V11a1 1 0 1 1-2 0V7.542ZM1 9a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 .991-.169 2.31-.789 3.475-.643 1.209-1.768 2.234-3.556 2.513a1 1 0 1 1-.31-1.976c1.087-.17 1.713-.747 2.1-1.476.25-.47.401-1.006.481-1.536H2a1 1 0 0 1-1-1Zm6.5-3v12a1 1 0 0 0 2 0V6a1 1 0 0 0-2 0Zm8 12V6a1 1 0 1 1 2 0v12a1 1 0 0 1-2 0ZM13.478 7.21a1 1 0 1 0-1.956-.42l-1.5 7a1 1 0 0 0 1.142 1.196l3-.5a1 1 0 1 0-.328-1.972l-1.55.258 1.192-5.562Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextFootnoteGaNa',
    mixins: [icon]
};
</script>