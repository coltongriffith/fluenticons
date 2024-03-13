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
<path d="M12.023 2.999A6.5 6.5 0 0 0 22 11.189L22 14.75A3.25 3.25 0 0 1 18.75 18h-5.785l-5.387 3.817A1 1 0 0 1 6 21.002V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3l6.773-.001ZM17.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm-1.284 2.589-.07.057-2.528 2.532-.03.037-.041.074-.03.083-.015.082-.002.067.008.068.015.062.024.06.03.056.04.055 2.53 2.532a.5.5 0 0 0 .764-.638l-.057-.07L15.208 7H20.5a.5.5 0 0 0 .492-.41L21 6.5a.5.5 0 0 0-.41-.492L20.5 6h-5.292l1.646-1.646a.5.5 0 0 0 .057-.638l-.057-.07a.5.5 0 0 0-.638-.057Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCommentArrowLeft',
    mixins: [icon]
};
</script>