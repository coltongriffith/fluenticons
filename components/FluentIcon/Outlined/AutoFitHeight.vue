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
<path d="M5.75 3a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H5.75ZM9.222 14.219a.75.75 0 0 1 .976-.073l.084.073 1.22 1.221v-3.07l-.002-.026V8.56l-1.22 1.221-.084.073a.75.75 0 0 1-1.049-1.05l.073-.084 2.367-2.37a.77.77 0 0 1 .664-.35c.252 0 .475.109.611.276l.053.075 2.367 2.37.073.084a.75.75 0 0 1 .007.882l-.08.094-.084.073a.75.75 0 0 1-.883.007l-.094-.08L13 8.56v3.07l.002.026v3.784l1.221-1.221a.75.75 0 0 1 .977-.073l.084.073a.75.75 0 0 1 .072.976l-.072.085-2.367 2.37a.77.77 0 0 1-.664.35.77.77 0 0 1-.664-.35l-2.367-2.37a.75.75 0 0 1 0-1.061ZM5 20.25a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedAutoFitHeight',
    mixins: [icon]
};
</script>