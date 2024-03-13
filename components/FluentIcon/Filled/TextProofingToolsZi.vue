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
<path d="M8 3a1 1 0 0 0-2 0v1H2.5a1 1 0 0 0-1 1v1.25a1 1 0 0 0 2 0V6h7v.25a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1H8V3ZM4 8a1 1 0 0 1 1-1h4a1 1 0 0 1 .78 1.625L8.28 10.5H11a1 1 0 1 1 0 2H8v1.096c0 2.04-2.382 3.15-3.944 1.838l-.2-.168a1 1 0 0 1 1.287-1.531l.2.167A.4.4 0 0 0 6 13.596V12.5H3a1 1 0 1 1 0-2h3a1 1 0 0 1 .22-.624L6.92 9H5a1 1 0 0 1-1-1Zm14.174-3.385a1 1 0 0 0-1.846 0l-3.75 9a1 1 0 1 0 1.846.77l.786-1.885h4.082l.785 1.884a1 1 0 1 0 1.846-.768l-3.749-9Zm.285 5.885h-2.416l1.208-2.9 1.208 2.9Zm-7.276 10.019 4.299-5.16a1 1 0 0 1 1.536 1.281l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 1 1 1.414-1.414l1.726 1.726Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTextProofingToolsZi',
    mixins: [icon]
};
</script>