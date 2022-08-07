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
<path d="M7 5a1 1 0 0 1 1-1h5c2.242 0 4.01.778 5.218 2.023C19.414 7.256 20 8.887 20 10.5c0 1.613-.586 3.244-1.782 4.477C17.01 16.222 15.242 17 13 17H8.414l2.043 2.043a1 1 0 0 1-1.414 1.414l-3.75-3.75a1 1 0 0 1 0-1.414l3.75-3.75a1 1 0 0 1 1.414 1.414L8.414 15H13c1.758 0 2.99-.597 3.782-1.415.804-.83 1.218-1.948 1.218-3.085s-.414-2.256-1.218-3.085C15.99 6.597 14.758 6 13 6H8a1 1 0 0 1-1-1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowHookDownLeft',
    mixins: [icon]
};
</script>