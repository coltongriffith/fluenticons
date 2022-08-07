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
<path d="M20 21a1 1 0 0 1-.883.993L19 22h-6.5a3.5 3.5 0 0 1-3.495-3.308L9 18.5V5.415L5.707 8.707a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 5-5a1.01 1.01 0 0 1 .112-.097l.11-.071.114-.054.105-.035.118-.025.058-.007L10 2l.075.003.126.017.111.03.111.044.098.052.092.064.094.083 5 5a1 1 0 0 1-1.32 1.497l-.094-.083L11 5.415V18.5a1.5 1.5 0 0 0 1.355 1.493L12.5 20H19a1 1 0 0 1 1 1Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledArrowEnterUp',
    mixins: [icon]
};
</script>