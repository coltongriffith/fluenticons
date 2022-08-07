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
<path d="M12.81 13 4 13a2 2 0 0 0-2 2V16.5l.005.23C2.165 20.044 5.778 21 8.5 21c1.03 0 2.189-.137 3.239-.487A6.472 6.472 0 0 1 11 17.5c0-1.746.689-3.332 1.81-4.5ZM13 6.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm8 1a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Zm2 10a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPeopleCheckmark',
    mixins: [icon]
};
</script>