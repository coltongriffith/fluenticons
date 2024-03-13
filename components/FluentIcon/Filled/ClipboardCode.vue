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
<path d="M10.25 2h3.5a2.25 2.25 0 0 1 2.236 2h1.764A2.25 2.25 0 0 1 20 6.25v7.46a1.75 1.75 0 0 0-3.429-.454L16.058 15h-.726a1.75 1.75 0 0 0-2.89-.413l-2 2.25a1.75 1.75 0 0 0 0 2.326l2 2.25c.343.386.818.584 1.297.587H6.25A2.25 2.25 0 0 1 4 19.75V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2Zm3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5Z" :fill="fill" :fill-opacity="opacity" />
<path d="m11.19 18.498 2 2.25a.748.748 0 0 0 1.058.063.75.75 0 0 0 .063-1.06L12.754 18l1.557-1.752a.75.75 0 0 0-1.122-.996l-2 2.25a.75.75 0 0 0 0 .996ZM17.53 13.538a.75.75 0 0 1 1.44.424l-2.5 8.5a.75.75 0 1 1-1.44-.424l2.5-8.5ZM19.752 20.81a.75.75 0 0 1-.063-1.058L21.247 18l-1.558-1.752a.75.75 0 0 1 1.122-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 0 1-1.06.063Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledClipboardCode',
    mixins: [icon]
};
</script>