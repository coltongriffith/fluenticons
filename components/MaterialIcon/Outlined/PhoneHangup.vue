<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-phone-hangup-outline" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
    >
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient
      v-if="fill === 'url(#g2)'"
      id="g2"
      cx="50%"
      cy="50%"
      r="50%"
    >
      <stop :stop-color="start" offset="0%" />
      <stop :stop-color="end" offset="100%" />
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M23.71 11.67A17 17 0 0 0 .29 11.67A1 1 0 0 0 0 12.38A1 1 0 0 0 .29 13.08L2.77 15.56A1 1 0 0 0 3.5 15.85A1 1 0 0 0 4.18 15.57A11.5 11.5 0 0 1 6.84 13.72A1 1 0 0 0 7.4 12.82V9.72A14.91 14.91 0 0 1 12 9A14.5 14.5 0 0 1 16.59 9.73V12.83A1 1 0 0 0 17.15 13.73A11.27 11.27 0 0 1 19.82 15.58A1 1 0 0 0 20.5 15.86A1 1 0 0 0 21.23 15.57L23.71 13.09A1 1 0 0 0 23.71 11.67M5.4 12.22A13.68 13.68 0 0 0 3.53 13.5L2.46 12.42A15.54 15.54 0 0 1 5.4 10.5M20.5 13.5A13.75 13.75 0 0 0 18.6 12.23V10.53A14.26 14.26 0 0 1 21.55 12.43Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedPhoneHangup',
  mixins: [icon]
};
</script>