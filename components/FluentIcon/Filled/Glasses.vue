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
<path d="M7.909 5h.841a.75.75 0 0 1 .102 1.493L8.75 6.5h-.841a.75.75 0 0 0-.477.17l-.075.073-2.074 2.256h3.466a2.25 2.25 0 0 1 2.237 2.005h2.027A2.25 2.25 0 0 1 15.25 9l3.477-.001-2.083-2.258a.75.75 0 0 0-.448-.234l-.104-.007h-.842a.75.75 0 0 1-.102-1.493L15.25 5h.843a2.25 2.25 0 0 1 1.52.592l.133.132 3.642 3.947c.05.055.091.115.122.178.306.384.489.871.489 1.4v3.497a3.25 3.25 0 0 1-3.25 3.25H16.25a3.25 3.25 0 0 1-3.25-3.25l-.001-2.242h-2.001v2.242a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 14.746V11.25c0-.562.206-1.076.546-1.47l.038-.055.044-.052 3.624-3.945a2.25 2.25 0 0 1 1.469-.72L7.909 5h.841-.841Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledGlasses',
    mixins: [icon]
};
</script>