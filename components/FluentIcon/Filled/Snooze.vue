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
<path d="M9 12.504a1 1 0 0 1 .846 1.534l-.065.091L5.08 20 9 20a1 1 0 0 1 .993.883L10 21a1 1 0 0 1-.883.993L9 22H3a1 1 0 0 1-.846-1.534l.065-.09 4.699-5.872H3a1 1 0 0 1-.993-.883L2 13.504a1 1 0 0 1 .883-.993l.117-.007H9ZM21 2a1 1 0 0 1 .84 1.542l-.066.091L14.109 13h6.89a1 1 0 0 1 .994.883L22 14a1 1 0 0 1-.884.993L21 15h-9a1 1 0 0 1-.84-1.542l.066-.091L18.889 4h-6.89a1 1 0 0 1-.992-.883L11 3a1 1 0 0 1 .883-.993L12 2h9Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSnooze',
    mixins: [icon]
};
</script>