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
<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2h7.5Zm-2.036 11.475L12 15.225l-1.718-1.75a.75.75 0 0 0-1.07 1.05l2.253 2.296c.294.3.777.3 1.07 0l2.25-2.296a.75.75 0 1 0-1.07-1.05Zm1.072-3.954-2.25-2.296a.75.75 0 0 0-.987-.075l-.084.075L9.212 9.52a.75.75 0 0 0 .987 1.125l.083-.074L12 8.821l1.714 1.75a.75.75 0 0 0 1.143-.965l-.071-.085-2.25-2.296 2.25 2.296Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPhoneVerticalScroll',
    mixins: [icon]
};
</script>