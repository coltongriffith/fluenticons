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
<path d="M12.896 3.619a.75.75 0 0 1-1.277.787.64.64 0 0 0-.169-.133c-.147-.083-.467-.202-1.065-.092-.408.075-.619.334-.749.667A2.1 2.1 0 0 0 9.5 5.5V6.75a1 1 0 0 0 1 1h.25a1 1 0 0 0 .969-.75h-.469a.75.75 0 0 1 0-1.5h1.25a.75.75 0 0 1 .75.75v.5a2.5 2.5 0 0 1-2.5 2.5h-.25A2.5 2.5 0 0 1 8 6.75V5.459l.004-.08a3.6 3.6 0 0 1 .235-1.077c.245-.627.784-1.396 1.876-1.597.912-.167 1.591-.008 2.067.258.23.129.399.275.514.397a1.727 1.727 0 0 1 .19.242l.006.01.002.004.001.002.001.001Zm-8.168-.558c.596-.724 1.772-.302 1.772.636V6.5h.25a.75.75 0 0 1 0 1.5H6.5v.5a.75.75 0 1 1-1.5 0V8H3.204c-1.015 0-1.572-1.18-.927-1.963l2.451-2.976ZM5 6.5V5.09L3.84 6.5H5Zm6.75 5.5a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.102L11 20.25v-7.5a.75.75 0 0 1 .75-.75Zm4-3a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102L15 20.25V9.75a.75.75 0 0 1 .75-.75Zm-12 9a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102L3 20.25v-1.5a.75.75 0 0 1 .75-.75ZM19.743 6a.75.75 0 0 1 .75.64l.007.102v13.501a.75.75 0 0 1-1.492.116L19 20.258V6.757A.75.75 0 0 1 19.743 6ZM7.75 15a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.102L7 20.248V15.75a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCellular4g',
    mixins: [icon]
};
</script>