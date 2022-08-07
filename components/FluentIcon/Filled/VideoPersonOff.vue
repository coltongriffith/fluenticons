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
<path d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-1.776-1.775H4.25A2.25 2.25 0 0 1 2 17.755V6.25a2.25 2.25 0 0 1 1.2-1.99l-.98-.98a.75.75 0 0 1 0-1.06ZM11.939 13a3 3 0 0 1-2.938-2.939L4.439 5.5H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75l2.749-.001L7 15.75a1.75 1.75 0 0 1 1.606-1.744L8.75 14h4.19l-1.001-1ZM14.629 11.447l-4.075-4.075a3 3 0 0 1 4.075 4.075Z" :fill="fill" :fill-opacity="opacity" />

<path d="M20.495 17.314V6.25a.75.75 0 0 0-.75-.75H8.682L7.182 4h12.563a2.25 2.25 0 0 1 2.25 2.25v11.505c0 .312-.063.61-.178.88l-1.322-1.321Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledVideoPersonOff',
    mixins: [icon]
};
</script>