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
<path d="M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25V10h-.258A3.74 3.74 0 0 0 20.5 7.455V7.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 7.25v.25h11.95c-.44.409-.782.922-.987 1.5H3.5v5.75c0 .966.784 1.75 1.75 1.75h6.78c.06.522.217 1.028.458 1.5H5.25A3.25 3.25 0 0 1 2 14.75v-7.5Zm21 8.25a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0-1.5 1.5v.5c0 1.971 1.86 4 5 4 3.14 0 5-2.029 5-4v-.5Zm-2.25-5.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCreditCardPerson',
    mixins: [icon]
};
</script>