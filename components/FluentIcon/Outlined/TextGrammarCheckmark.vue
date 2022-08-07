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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm2.646 3.146-4.092 4.093L14.9 17.7a.5.5 0 0 0-.8.6l1.5 2a.5.5 0 0 0 .754.053l4.5-4.5a.5.5 0 0 0-.707-.707ZM11.019 17H2.75l-.102.007A.75.75 0 0 0 2.75 18.5h8.326a6.554 6.554 0 0 1-.057-1.5ZM11.732 14.5H2.75a.75.75 0 0 1-.102-1.493L2.75 13h10.06c-.427.444-.79.949-1.078 1.5ZM21.25 9H2.75l-.102.007A.75.75 0 0 0 2.75 10.5h18.5l.102-.007A.75.75 0 0 0 21.25 9ZM21.25 5H2.75l-.102.007A.75.75 0 0 0 2.75 6.5h18.5l.102-.007A.75.75 0 0 0 21.25 5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextGrammarCheckmark',
    mixins: [icon]
};
</script>