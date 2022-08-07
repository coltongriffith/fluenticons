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
<path d="M13.211 3.103 15 6.728v.004l.567 1.148 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424L12 18.863l-4.715 2.48a1.344 1.344 0 0 1-.629.158c-.787 0-1.481-.709-1.331-1.582l.9-5.25-3.815-3.72c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777c.248-.502.73-.753 1.211-.753.482 0 .964.25 1.212.753ZM15 9.284v9.463l2.143 1.126-.862-5.029a1.35 1.35 0 0 1 .388-1.195l3.654-3.562-5.05-.734A1.349 1.349 0 0 1 15 9.284Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledStarThreeQuarter',
    mixins: [icon]
};
</script>