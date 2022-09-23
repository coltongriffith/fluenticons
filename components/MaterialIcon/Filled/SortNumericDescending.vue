<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-sort-numeric-descending" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M19 7H22L18 3L14 7H17V21H19M9 21H5V19H9V18H7C5.9 18 5 17.11 5 16V15C5 13.9 5.9 13 7 13H9C10.11 13 11 13.9 11 15V19C11 20.11 10.11 21 9 21M9 15H7V16H9M7 3H9C10.11 3 11 3.9 11 5V9C11 10.11 10.11 11 9 11H7C5.9 11 5 10.11 5 9V5C5 3.9 5.9 3 7 3M7 9H9V5H7Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledSortNumericDescending.svg',
  mixins: [icon]
};
</script>