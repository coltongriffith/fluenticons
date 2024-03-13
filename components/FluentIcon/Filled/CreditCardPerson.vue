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
<path d="M5.25 4A3.25 3.25 0 0 0 2 7.25v.25h13.45c.67-.62 1.566-1 2.55-1 .985 0 1.88.38 2.55 1H22v-.25A3.25 3.25 0 0 0 18.75 4H5.25ZM2 14.75V9h12.463a3.744 3.744 0 0 0-.213 1.25 3.74 3.74 0 0 0 1.2 2.75h-.95a2.5 2.5 0 0 0-2.5 2.5v.5c0 .7.17 1.379.488 2H5.25A3.25 3.25 0 0 1 2 14.75Zm21 .75a1.5 1.5 0 0 0-1.5-1.5h-7a1.5 1.5 0 0 0-1.5 1.5v.5c0 1.971 1.86 4 5 4 3.14 0 5-2.029 5-4v-.5Zm-2.25-5.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCreditCardPerson',
    mixins: [icon]
};
</script>