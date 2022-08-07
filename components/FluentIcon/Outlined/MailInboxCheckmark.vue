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
<path d="M22 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.146-2.354a.5.5 0 0 0-.708 0L15.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708Zm-.354 8.122V14H15l-.102.007a.75.75 0 0 0-.648.743l-.005.154a2.25 2.25 0 0 1-4.495-.154l-.007-.102A.75.75 0 0 0 9 14H4.5V7.25l.006-.144A1.75 1.75 0 0 1 6.25 5.5h3.826c.081-.523.224-1.026.422-1.5H6.25l-.184.005A3.25 3.25 0 0 0 3 7.25v11.5l.005.184A3.25 3.25 0 0 0 6.25 22h11.5l.184-.005A3.25 3.25 0 0 0 21 18.75v-7.56c-.444.427-.949.79-1.5 1.078Zm-15 6.482V15.5h3.825l.043.188A3.752 3.752 0 0 0 12 18.5l.2-.005a3.752 3.752 0 0 0 3.475-2.995H19.5v3.25l-.006.143A1.75 1.75 0 0 1 17.75 20.5H6.25l-.144-.006A1.75 1.75 0 0 1 4.5 18.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMailInboxCheckmark',
    mixins: [icon]
};
</script>