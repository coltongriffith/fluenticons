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
<path d="M13.002 8.009c3.168 0 4.966 2.097 5.227 4.63h.08a3.687 3.687 0 0 1 3.692 3.683 3.687 3.687 0 0 1-3.692 3.682H7.694a3.687 3.687 0 0 1-3.692-3.682 3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.06-4.63 5.228-4.63Zm0 1.497c-2.072 0-3.877 1.634-3.877 3.89 0 .357-.319.638-.684.638h-.69c-1.262 0-2.284 1-2.284 2.236 0 1.235 1.022 2.236 2.283 2.236h10.503c1.261 0 2.283-1 2.283-2.236 0-1.235-1.022-2.236-2.283-2.236h-.69c-.366 0-.685-.28-.685-.638 0-2.285-1.805-3.89-3.876-3.89ZM6.589 4.001a5.058 5.058 0 0 1 2.263.674A5.057 5.057 0 0 1 11.06 7.27c-.5.14-.963.338-1.386.584a3.555 3.555 0 0 0-2.19-2.162c.16 1.352-.047 2.513-.622 3.611l-.118.213c-.571.976-1.432 1.708-2.719 2.304a3.603 3.603 0 0 0 1.07.614c-.45.302-.845.681-1.166 1.119a5.06 5.06 0 0 1-1.797-1.599.75.75 0 0 1 .366-1.132c1.643-.588 2.527-1.25 3.034-2.216.552-1.055.654-2.174.287-3.677A.75.75 0 0 1 6.59 4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedWeatherPartlyCloudyNight',
    mixins: [icon]
};
</script>