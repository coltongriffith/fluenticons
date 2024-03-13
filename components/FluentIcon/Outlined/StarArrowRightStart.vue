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
<path d="M10.788 3.103c.495-1.004 1.926-1.004 2.421 0l2.358 4.777 5.273.766c1.107.161 1.549 1.522.748 2.303l-3.816 3.72.901 5.25c.19 1.103-.968 1.944-1.959 1.424l-3.956-2.08c.141-.502.223-1.027.24-1.57l4.145 2.18-.862-5.029a1.35 1.35 0 0 1 .388-1.195l3.654-3.562-5.05-.734a1.35 1.35 0 0 1-1.016-.738l-2.259-4.576L9.74 8.615a1.35 1.35 0 0 1-1.016.738l-5.05.734 1.158 1.129a6.46 6.46 0 0 0-1.517.616l-.906-.883c-.801-.78-.359-2.142.748-2.303L8.43 7.88l2.358-4.777Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM3.5 17a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L8.293 17H3.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedStarArrowRightStart',
    mixins: [icon]
};
</script>