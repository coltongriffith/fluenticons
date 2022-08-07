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
<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2h7.5Zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75ZM12 7.03a.75.75 0 0 1 .743.65l.007.1v6.712l.961-.961a.75.75 0 0 1 .977-.073l.084.073a.75.75 0 0 1 .073.976l-.073.085-2.242 2.241-.038.036-.062.049-.067.041-.06.03-.101.036-.063.015-.092.011h-.094l-.091-.011-.097-.025-.112-.047-.076-.046-.107-.089-2.242-2.241a.75.75 0 0 1 .976-1.134l.085.073.96.96.001-6.71a.75.75 0 0 1 .55-.723l.098-.02L12 7.03Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPhoneUpdate',
    mixins: [icon]
};
</script>