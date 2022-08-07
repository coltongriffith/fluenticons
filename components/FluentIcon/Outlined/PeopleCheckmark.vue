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
<path d="M12.81 13 4 13a2 2 0 0 0-2 2V16.5l.005.23C2.165 20.044 5.778 21 8.5 21c1.03 0 2.189-.137 3.239-.487-.23-.44-.413-.91-.537-1.403-.698.224-1.52.359-2.385.385L8.5 19.5l-.317-.005c-1.263-.039-2.44-.308-3.266-.753C3.95 18.222 3.5 17.509 3.5 16.5v-1.501l.01-.101a.506.506 0 0 1 .136-.253.51.51 0 0 1 .253-.136l.101-.01h7.732c.287-.55.651-1.055 1.077-1.499ZM13 6.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Zm-7.5 0c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3Zm15.5 1a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Zm-5.5 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Zm7.5 10a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPeopleCheckmark',
    mixins: [icon]
};
</script>