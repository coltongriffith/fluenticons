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
<path d="M17.5 11a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm2.25-4.5a2.25 2.25 0 0 1 2.229 1.938l.016.158.005.154v3.06A6.5 6.5 0 0 0 12.023 20H4.25a2.25 2.25 0 0 1-2.245-2.096L2 17.75v-7.251l6.207.001.196-.009a2.25 2.25 0 0 0 1.088-.393l.156-.12L13.821 6.5h5.929Zm-1.958 7.045-.076.044-.07.057-.057.07a.5.5 0 0 0 0 .568l.057.07L19.292 16H14l-.09.008a.5.5 0 0 0-.402.402l-.008.09.008.09a.5.5 0 0 0 .402.402L14 17h5.292l-1.646 1.646-.057.07a.5.5 0 0 0 .695.695l.07-.057 2.528-2.532.046-.063.034-.068.021-.063.015-.082L21 16.5l-.003-.053-.014-.075-.03-.083-.042-.074-.045-.056-2.512-2.513-.07-.057a.5.5 0 0 0-.492-.044ZM8.207 4c.46 0 .908.141 1.284.402l.156.12 2.103 1.751-3.063 2.553-.085.061a.75.75 0 0 1-.29.106L8.206 9 2 8.999V6.25a2.25 2.25 0 0 1 2.096-2.245L4.25 4h3.957Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFolderArrowRight',
    mixins: [icon]
};
</script>