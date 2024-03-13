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
<path d="M3 18.25a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0v12.5ZM19.5 18.25a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0v12.5ZM14.146 14.053a.75.75 0 0 0 1.133.977l2.37-2.367a.77.77 0 0 0 .351-.664.77.77 0 0 0-.35-.664l-2.37-2.367-.085-.073a.75.75 0 0 0-.976.073l-.073.084a.75.75 0 0 0 .073.976l1.221 1.222h-3.784l-.025.002H8.56l1.221-1.222.08-.094a.75.75 0 0 0-.007-.882L9.78 8.97l-.094-.08a.75.75 0 0 0-.882.007l-.085.073-2.37 2.367-.074.053A.786.786 0 0 0 6 12a.77.77 0 0 0 .35.665l2.37 2.367.085.073a.75.75 0 0 0 1.049-1.05l-.073-.084-1.221-1.22h3.784l.025-.001h3.071l-1.221 1.22-.073.083Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAutoFitWidth',
    mixins: [icon]
};
</script>