<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-ammunition" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M14,22H10V21H14V22M13,10V7H11V10L10,11.5V20H14V11.5L13,10M12,2C12,2 11,3 11,5V6H13V5C13,5 13,3 12,2M8,22H4V21H8V22M7,10V7H5V10L4,11.5V20H8V11.5L7,10M6,2C6,2 5,3 5,5V6H7V5C7,5 7,3 6,2M20,22H16V21H20V22M19,10V7H17V10L16,11.5V20H20V11.5L19,10M18,2C18,2 17,3 17,5V6H19V5C19,5 19,3 18,2Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledAmmunition.svg',
  mixins: [icon]
};
</script>