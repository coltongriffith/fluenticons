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
<path d="M13 20a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-3.5-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM13.002 6.009c3.168 0 4.966 2.097 5.227 4.63h.08a3.687 3.687 0 0 1 3.692 3.683 3.687 3.687 0 0 1-3.692 3.682H7.694a3.687 3.687 0 0 1-3.692-3.682 3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.06-4.63 5.228-4.63ZM6.589 2a5.058 5.058 0 0 1 2.263.674A5.057 5.057 0 0 1 11.06 5.27c-1.984.563-3.404 2.002-3.994 3.947l-.069.245-.058.238-.206.039a4.67 4.67 0 0 0-2.804 1.814 5.06 5.06 0 0 1-1.797-1.599.75.75 0 0 1 .366-1.132c1.643-.588 2.527-1.25 3.034-2.216.552-1.055.654-2.174.287-3.677A.75.75 0 0 1 6.59 2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledWeatherHailNight',
    mixins: [icon]
};
</script>