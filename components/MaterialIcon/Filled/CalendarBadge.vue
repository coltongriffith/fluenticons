<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-calendar-badge" viewBox="0 0 24 24"><linearGradient
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19.5 16C17.6 16 16 17.6 16 19.5S17.6 23 19.5 23 23 21.4 23 19.5 21.4 16 19.5 16M14.21 21H5C3.9 21 3 20.11 3 19V5C3 3.89 3.89 3 5 3H6V1H8V3H16V1H18V3H19C20.1 3 21 3.89 21 5V14.21C20.5 14.08 20 14 19.5 14C19.33 14 19.17 14 19 14.03V8H5V19H14.03C14 19.17 14 19.33 14 19.5C14 20 14.08 20.5 14.21 21Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconFilledCalendarBadge',
  mixins: [icon]
};
</script>