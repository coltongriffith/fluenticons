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
<path d="m6.907 6.68 2.734-2.73a6.66 6.66 0 1 1 9.42 9.42l-8.338 8.338a1 1 0 0 1-1.415-1.415l8.339-8.336A4.66 4.66 0 0 0 11.229 5.2l-.174.166-3.641 3.633H12a1 1 0 0 1 .993.884L13 10a1 1 0 0 1-.883.993l-.117.006-7.06-.001-.095-.01-.112-.024-.131-.047-.082-.04-.102-.064a.996.996 0 0 1-.125-.107l-.092-.105-.074-.114-.046-.093-.038-.105-.016-.058-.016-.081-.007-.062L4 10V3.002a1 1 0 0 1 1.993-.116L6 3.002v4.584l3.641-3.635L6.907 6.68Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowUndo',
    mixins: [icon]
};
</script>