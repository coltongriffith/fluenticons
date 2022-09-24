<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-database-settings-outline" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 3C7.58 3 4 4.79 4 7V17C4 18.2 5.06 19.27 6.73 20H17.27C18.94 19.27 20 18.2 20 17V7C20 4.79 16.42 3 12 3M18 17C18 17.5 15.87 19 12 19S6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16S16.39 15.55 18 14.77V17M18 12.45C16.7 13.4 14.42 14 12 14S7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11S16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5 18 6.5 18 7 15.87 9 12 9M7 22H9V24H7V22M15 22H17V24H15V22M11 22H13V24H11V22Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedDatabaseSettings',
  mixins: [icon]
};
</script>