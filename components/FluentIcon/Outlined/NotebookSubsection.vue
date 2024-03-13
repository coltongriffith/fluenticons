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
<path d="M9 2a4.5 4.5 0 0 0-4.5 4.5v9.4c0 .98.626 1.813 1.5 2.122V6.5a3 3 0 0 1 3-3h5.002A2.251 2.251 0 0 0 11.88 2H9ZM7 6.75A2.25 2.25 0 0 1 9.25 4.5H15V2.75a.75.75 0 0 1 1.5 0v18.5a.75.75 0 0 1-1.5 0V20H9.25A2.25 2.25 0 0 1 7 17.75v-11Zm8 11.75V6H9.25a.75.75 0 0 0-.75.75v11c0 .414.336.75.75.75H15Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedNotebookSubsection',
    mixins: [icon]
};
</script>