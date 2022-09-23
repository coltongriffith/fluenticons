<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-relation-zero-or-one-to-zero-or-many" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M21 13L19 15H18.79A2.5 2.5 0 0 0 14.21 15H13V7H9.79A2.5 2.5 0 0 0 5.21 7H5V5H3V7H2V9H3V11H5V9H5.21A2.5 2.5 0 0 0 9.79 9H11V17H14.21A2.5 2.5 0 0 0 18.79 17H19L21 19H22V13M7.5 9A1 1 0 1 1 8.5 8A1 1 0 0 1 7.5 9M16.5 17A1 1 0 1 1 17.5 16A1 1 0 0 1 16.5 17Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledRelationZeroOrOneToZeroOrMany.svg',
  mixins: [icon]
};
</script>