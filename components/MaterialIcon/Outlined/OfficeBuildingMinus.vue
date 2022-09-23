<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-office-building-minus-outline" viewBox="0 0 24 24">
    <linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="`rotate(${angle})`"
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 11H10V9H12V11M14 11H16V9H14V11M13.4 21H12V17.5H10V21H4V3H18V13.1C18.3 13 18.7 13 19 13C19.3 13 19.7 13 20 13.1V1H2V23H14.5C14 22.4 13.6 21.7 13.4 21M14 7H16V5H14V7M16 13.8V13H14V15H14.5C15 14.5 15.5 14.1 16 13.8M8 5H6V7H8V5M8 9H6V11H8V9M6 19H8V17H6V19M12 5H10V7H12V5M10 15H12V13H10V15M8 13H6V15H8V13M15 18V20H23V18H15Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconOutlinedOfficeBuildingMinus',
  mixins: [icon]
};
</script>