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
<path d="M11.019 17H3l-.117.007A1 1 0 0 0 3 19h8.174a6.52 6.52 0 0 1-.155-2ZM21 11H3a1 1 0 0 1-.117-1.993L3 9h18a1 1 0 0 1 .117 1.993L21 11ZM3 15h8.498a6.506 6.506 0 0 1 1.312-2H3l-.117.007A1 1 0 0 0 3 15ZM21 5H3l-.117.007A1 1 0 0 0 3 7h18l.117-.007A1 1 0 0 0 21 5Zm-6.722 8.975-.198-.686c.44-.382.94-.692 1.483-.912l.499.524a2 2 0 0 0 2.899 0l.493-.518a5.278 5.278 0 0 1 1.484.922l-.186.63a2 2 0 0 0 1.45 2.511l.539.13a5.733 5.733 0 0 1 .006 1.808l-.584.144a2 2 0 0 0-1.44 2.496l.197.686c-.439.383-.939.693-1.483.913l-.498-.525a2 2 0 0 0-2.9 0l-.493.518a5.283 5.283 0 0 1-1.484-.921l.187-.631a2 2 0 0 0-1.45-2.51l-.54-.13a5.718 5.718 0 0 1-.006-1.808l.584-.144a2 2 0 0 0 1.441-2.497ZM17.5 19c.8 0 1.45-.672 1.45-1.5 0-.829-.65-1.5-1.45-1.5-.8 0-1.45.671-1.45 1.5 0 .828.65 1.5 1.45 1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextGrammarSettings',
    mixins: [icon]
};
</script>