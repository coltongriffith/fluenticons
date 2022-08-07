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
<path d="M12.896 3.619a.75.75 0 0 1-1.277.787.64.64 0 0 0-.169-.133c-.147-.083-.467-.202-1.065-.092-.408.075-.619.334-.749.667A2.1 2.1 0 0 0 9.5 5.5V6.75a1 1 0 0 0 1 1h.25a1 1 0 0 0 .969-.75h-.469a.75.75 0 0 1 0-1.5h1.25a.75.75 0 0 1 .75.75v.5a2.5 2.5 0 0 1-2.5 2.5h-.25A2.5 2.5 0 0 1 8 6.75V5.459l.004-.08a3.6 3.6 0 0 1 .235-1.077c.245-.627.784-1.396 1.876-1.597.912-.167 1.591-.008 2.067.258.23.129.399.275.514.397a1.727 1.727 0 0 1 .19.242l.006.01.002.004.001.002.001.001Zm-8.168-.558c.596-.724 1.772-.302 1.772.636V6.5h.25a.75.75 0 0 1 0 1.5H6.5v.5a.75.75 0 1 1-1.5 0V8H3.204c-1.015 0-1.572-1.18-.927-1.963l2.451-2.976ZM5 6.5V5.09L3.84 6.5H5ZM20 6a1 1 0 0 1 1 1v13a1 1 0 0 1-2 0V7a1 1 0 0 1 1-1Zm-4 3c.552 0 1 .446 1 .995v10.01c0 .55-.448.995-1 .995s-1-.446-1-.995V9.995c0-.55.448-.995 1-.995Zm-4 3a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0v-7a1 1 0 0 1 1-1Zm-4 3c.552 0 1 .445 1 .994v4.012c0 .549-.448.994-1 .994s-1-.445-1-.994v-4.012c0-.549.448-.994 1-.994Zm-4 3c.552 0 1 .44 1 .984v1.032A.992.992 0 0 1 4 21c-.552 0-1-.44-1-.984v-1.032A.992.992 0 0 1 4 18Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCellular4g',
    mixins: [icon]
};
</script>