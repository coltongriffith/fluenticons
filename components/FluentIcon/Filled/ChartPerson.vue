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
<path d="M11.75 2a.75.75 0 0 1 .75.75V3h6.25A3.25 3.25 0 0 1 22 6.25V13h-.258a3.75 3.75 0 1 0-6.291 2.5H14.5A2.5 2.5 0 0 0 12 18v.5c0 .168.01.335.03.5H9.6l-2.275 2.73a.75.75 0 0 1-1.153-.96L7.648 19H5.25A3.25 3.25 0 0 1 2 15.75v-9.5A3.25 3.25 0 0 1 5.25 3H11v-.25a.75.75 0 0 1 .75-.75ZM6 7.75c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0-.75.75ZM6.75 10a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5ZM6 13.75c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75Zm14 .887a2.75 2.75 0 1 1-4-3.775 2.75 2.75 0 0 1 4 3.775Zm1.9 1.917a1.502 1.502 0 0 0-.4-.054h-7A1.5 1.5 0 0 0 13 18v.5c0 .167.013.334.04.5.284 1.8 2.085 3.5 4.96 3.5 3.14 0 5-2.029 5-4V18a1.5 1.5 0 0 0-1.1-1.446Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledChartPerson',
    mixins: [icon]
};
</script>