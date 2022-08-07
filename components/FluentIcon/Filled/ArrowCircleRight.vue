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
<path d="M12 2.001c5.524 0 10 4.477 10 10s-4.476 10-10 10c-5.522 0-10-4.477-10-10s4.478-10 10-10Zm.781 5.469-.084-.073a.75.75 0 0 0-.883-.007l-.094.08-.072.084a.75.75 0 0 0-.007.883l.08.094 2.719 2.72H7.75l-.102.006a.75.75 0 0 0-.641.642L7 12l.007.102a.75.75 0 0 0 .641.641l.102.007h6.69l-2.72 2.72-.073.085a.75.75 0 0 0 1.05 1.05l.083-.073 4.002-4 .072-.085a.75.75 0 0 0 .008-.882l-.08-.094-4-4.001-.085-.073.084.073Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowCircleRight',
    mixins: [icon]
};
</script>