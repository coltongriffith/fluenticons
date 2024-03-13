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
<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2h7.5Zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75Zm-.975 9.964a.75.75 0 0 1 .082.976l-.071.085-2.25 2.296a.75.75 0 0 1-.987.074l-.084-.074-2.253-2.296a.75.75 0 0 1 .987-1.124l.083.074L12 15.225l1.714-1.75a.75.75 0 0 1 1.061-.01Zm-2.24-6.239 2.25 2.296a.75.75 0 1 1-1.07 1.05L12 8.82l-1.718 1.75a.75.75 0 0 1-1.07-1.05l2.253-2.296a.75.75 0 0 1 1.07 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPhoneVerticalScroll',
    mixins: [icon]
};
</script>