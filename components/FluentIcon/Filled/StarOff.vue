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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.804 4.805-3.865.561c-1.107.161-1.55 1.522-.748 2.303l3.815 3.719-.9 5.251c-.19 1.103.968 1.944 1.958 1.423L12 18.863l4.716 2.48c.99.52 2.148-.32 1.959-1.424l-.038-.22 2.082 2.081a.75.75 0 0 0 1.061-1.06L3.28 2.22ZM21.59 10.95l-3.777 3.68L9.3 6.12l1.489-3.016c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.272.766c1.108.161 1.55 1.522.749 2.303Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledStarOff',
    mixins: [icon]
};
</script>