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
<path d="M6.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 7.88a.625.625 0 1 0 0 1.249.625.625 0 0 0 0-1.249ZM17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21l-5.773.001c.297-.463.537-.967.71-1.5l5.063-.001a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v5.064a6.47 6.47 0 0 0-1.501.709L3 6.25A3.25 3.25 0 0 1 6.25 3h11.5ZM6.5 14.003c-1.048 0-1.864.817-1.853 1.954a.5.5 0 0 0 1-.01c-.006-.578.36-.944.853-.944.472 0 .853.392.853.95 0 .224-.075.39-.317.677l-.1.113-.265.29c-.484.542-.671.892-.671 1.468a.5.5 0 0 0 1 0c0-.233.076-.403.324-.695l.1-.115.266-.29c.478-.535.663-.882.663-1.448 0-1.104-.822-1.95-1.853-1.95ZM11.75 6a.75.75 0 0 1 .743.648l.007.102V12h3.748a.75.75 0 0 1 .102 1.493l-.102.007H11.75a.75.75 0 0 1-.743-.648L11 12.75v-6a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedShiftsQuestionMark',
    mixins: [icon]
};
</script>