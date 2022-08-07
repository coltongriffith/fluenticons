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
<path d="M23 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0ZM18 7l.001 2.503a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1H18Zm-7-5c.562 0 1.11.066 1.633.191a6.516 6.516 0 0 0-.924 1.354 5.5 5.5 0 1 0 3.472 9.028 6.466 6.466 0 0 0 1.592.386c-.23.335-.489.649-.772.938l-.002 7.352a.75.75 0 0 1-1.092.668l-.09-.055L11 19.174l-3.816 2.688a.75.75 0 0 1-1.175-.509L6 21.25l-.002-7.352A7 7 0 0 1 11 2Zm3.5 17.804v-4.741a6.968 6.968 0 0 1-3.5.936c-1.275 0-2.47-.34-3.5-.936v4.74l3.067-2.159a.75.75 0 0 1 .763-.06l.1.06 3.07 2.16Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedRibbonAdd',
    mixins: [icon]
};
</script>