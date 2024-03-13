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
<path d="M13.002 8.007c3.169 0 4.966 2.097 5.228 4.63h.08a3.687 3.687 0 0 1 3.692 3.683 3.687 3.687 0 0 1-3.692 3.682H7.694a3.687 3.687 0 0 1-3.692-3.682 3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.059-4.63 5.227-4.63Zm-8.634 4.155a.75.75 0 0 1-.315.935l-.091.045-.926.384a.75.75 0 0 1-.666-1.34l.092-.046.926-.383a.75.75 0 0 1 .98.405Zm6.487-4.833-.172.058c-1.784.63-3.062 2.005-3.615 3.823l-.07.25-.058.238-.206.039a4.64 4.64 0 0 0-1.67.714 3.942 3.942 0 0 1 5.791-5.122ZM2.94 7.36l.106.035.926.384a.75.75 0 0 1-.469 1.42L3.4 9.166l-.926-.384a.75.75 0 0 1 .468-1.42Zm3.815-2.986.046.091.383.927a.75.75 0 0 1-1.34.665l-.046-.091-.383-.927a.75.75 0 0 1 1.34-.665Zm4.354-.319a.75.75 0 0 1 .44.875l-.035.105-.383.927a.75.75 0 0 1-1.42-.469l.034-.106.384-.926a.75.75 0 0 1 .98-.406Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWeatherPartlyCloudyDay',
    mixins: [icon]
};
</script>