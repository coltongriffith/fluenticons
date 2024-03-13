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
<path d="M12.482 3.827c-1.113-.824-2.696-.091-2.788 1.29L9.535 7.5h2.715a.75.75 0 0 1 0 1.5H9.435l-.6 9.006c-.18 2.685-3.358 4.002-5.383 2.23l-.196-.172a.75.75 0 0 1 .988-1.129l.195.171c1.091.955 2.803.246 2.899-1.2L7.932 9H5.75a.75.75 0 0 1 0-1.5h2.282l.165-2.483c.171-2.565 3.112-3.926 5.178-2.395l.371.275a.75.75 0 1 1-.892 1.205l-.372-.275Z" :fill="fill" :fill-opacity="opacity" />

<path d="M13.712 12.763a.75.75 0 0 0-1.152-.22l-.322.276a.75.75 0 1 1-.976-1.139l.322-.276a2.25 2.25 0 0 1 3.456.66l.977 1.858 2.703-2.703a.75.75 0 1 1 1.06 1.061l-3.031 3.032 1.539 2.924a.75.75 0 0 0 1.152.22l.322-.276a.75.75 0 0 1 .976 1.14l-.322.275a2.25 2.25 0 0 1-3.456-.66l-1.322-2.513-3.358 3.358a.75.75 0 1 1-1.06-1.06l3.687-3.687-1.195-2.27Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedMathFormula',
    mixins: [icon]
};
</script>