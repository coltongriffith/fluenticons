<template>
    <svg  width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-nintendo-wii" viewBox="0 0 24 24">
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
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M17.84,16.94H15.97V10.79H17.84V16.94M18,8.58C18,9.19 17.5,9.69 16.9,9.69A1.11,1.11 0 0,1 15.79,8.58C15.79,7.96 16.29,7.46 16.9,7.46C17.5,7.46 18,7.96 18,8.58M21.82,16.94H19.94V10.79H21.82V16.94M22,8.58C22,9.19 21.5,9.69 20.88,9.69A1.11,1.11 0 0,1 19.77,8.58C19.77,7.96 20.27,7.46 20.88,7.46C21.5,7.46 22,7.96 22,8.58M12.9,8.05H14.9L12.78,15.5C12.78,15.5 12.5,17.04 11.28,17.04C10.07,17.04 9.79,15.5 9.79,15.5L8.45,10.64L7.11,15.5C7.11,15.5 6.82,17.04 5.61,17.04C4.4,17.04 4.12,15.5 4.12,15.5L2,8.05H4L5.72,14.67L7.11,9.3C7.43,7.95 8.45,7.97 8.45,7.97C8.45,7.97 9.47,7.95 9.79,9.3L11.17,14.67L12.9,8.05Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
      name: 'MaterialIconFilledNintendoWii.svg',
  mixins: [icon]
};
</script>