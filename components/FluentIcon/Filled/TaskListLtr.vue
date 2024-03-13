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
<path d="M6.707 3.293a1 1 0 0 0-1.414 0L4 4.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414Zm14.296 13.7H10L9.883 17A1 1 0 0 0 10 18.993h11.003l.117-.006a1 1 0 0 0-.117-1.994Zm0-5.993H10l-.117.007A1 1 0 0 0 10 13h11.003l.117-.007A1 1 0 0 0 21.003 11Zm0-6H10l-.117.007A1 1 0 0 0 10 7h11.003l.117-.007A1 1 0 0 0 21.003 5ZM6.707 16.293a1 1 0 0 0-1.414 0L4 17.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414Zm-1.414-6.5a1 1 0 0 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-1-1a1 1 0 1 1 1.414-1.414l.293.293 1.293-1.293Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTaskListLtr',
    mixins: [icon]
};
</script>