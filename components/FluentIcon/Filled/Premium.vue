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
<path d="M18 3a1 1 0 0 1 .832.445l.062.108 3 6a1 1 0 0 1-.067 1.01l-.084.106-8.973 9.973a.985.985 0 0 1-.886.351l-.113-.019a.976.976 0 0 1-.532-.322L2.257 10.67a1 1 0 0 1-.204-.991l.053-.125 3-6a1 1 0 0 1 .77-.545L6 3h12Zm-3.424 8H9.423L12 17.342 14.576 11Zm4.177 0h-2.018l-1.661 4.088L18.753 11ZM7.264 11H5.246l3.678 4.087L7.264 11Zm1.358-6H6.618l-2 4h2.704l1.3-4Zm4.651 0h-2.547L9.427 9h5.145l-1.299-4Zm4.108 0h-2.004l1.3 4h2.704l-2-4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPremium',
    mixins: [icon]
};
</script>