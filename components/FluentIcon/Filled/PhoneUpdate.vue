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
<path d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2h7.5ZM12 7.03l-.102.008-.097.02a.751.751 0 0 0-.543.61l-.008.113v6.71l-.961-.96-.085-.073a.75.75 0 0 0-1.049 1.05l.073.084 2.242 2.241.052.048.055.041.076.046.112.047.096.025.092.011h.094l.092-.011.063-.015.1-.036.061-.03.067-.041.062-.05.038-.035 2.242-2.241.073-.085a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073a.75.75 0 0 0-.883-.007l-.094.08-.962.96.001-6.71-.007-.102a.75.75 0 0 0-.641-.641L12 7.03Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPhoneUpdate',
    mixins: [icon]
};
</script>