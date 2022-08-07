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
<path d="M12.023 2.999a6.47 6.47 0 0 0-.71 1.5L5.25 4.5A1.75 1.75 0 0 0 3.5 6.25v8.5c0 .966.784 1.75 1.75 1.75h2.249v3.75l5.015-3.75h6.236a1.75 1.75 0 0 0 1.75-1.75l.001-2.483a6.517 6.517 0 0 0 1.5-1.077L22 14.75A3.25 3.25 0 0 1 18.75 18h-5.738L8 21.75a1.25 1.25 0 0 1-1.999-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3l6.773-.001ZM17.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-1.284 2.589-.07.057-2.528 2.532-.03.037-.041.074-.03.083-.015.082-.002.067.008.068.015.062.024.06.03.056.04.055 2.53 2.532a.5.5 0 0 0 .764-.638l-.057-.07L15.208 7H20.5a.5.5 0 0 0 .492-.41L21 6.5a.5.5 0 0 0-.41-.492L20.5 6h-5.292l1.646-1.646a.5.5 0 0 0 .057-.638l-.057-.07a.5.5 0 0 0-.638-.057Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCommentArrowLeft',
    mixins: [icon]
};
</script>