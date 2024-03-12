<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-earbuds-off" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M10 9.34V9.34L11.56 10.91L11.56 10.9L14.1 13.45L14.09 13.44L15.58 14.93L15.59 14.93L18.5 17.84V17.85L22.11 21.46L20.84 22.73L18.43 20.33C18.3 20.72 17.94 21 17.5 21H15.5C14.95 21 14.5 20.55 14.5 20V16.39L10 11.89V20C10 20.55 9.55 21 9 21H8C7.45 21 7 20.55 7 20V13.27C6.32 13.72 5.61 14 5 14C3 14 2 12 2 11V6C2 5.58 2.19 5 2.55 4.43L1.11 3L2.39 1.73L6.1 5.44M22 8.5C22 5.46 19.54 3 16.5 3C13.69 3 11.37 5.12 11.04 7.84L17.16 13.96C19.89 13.63 22 11.32 22 8.5Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledEarbudsOff',
  mixins: [icon]
};
</script>