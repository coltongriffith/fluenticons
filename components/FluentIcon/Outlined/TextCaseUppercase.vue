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
<path d="M7.707 3.5a.75.75 0 0 0-1.406-.02l-6 15.5a.75.75 0 1 0 1.399.54l1.556-4.02h7.118l1.42 4a.75.75 0 1 0 1.413-.5l-5.5-15.5ZM3.837 14 6.97 5.907 9.84 14H3.837ZM14.75 3.25A.75.75 0 0 0 14 4v15.25c0 .414.336.75.75.75h4.125a4.625 4.625 0 0 0 2.006-8.793A4.5 4.5 0 0 0 18 3.25h-3.25ZM21 7.75a3 3 0 0 1-3 3h-2.5v-6H18a3 3 0 0 1 3 3ZM18.875 18.5H15.5v-6.25h3.375a3.125 3.125 0 1 1 0 6.25Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextCaseUppercase',
    mixins: [icon]
};
</script>