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
<path d="M17.25 2A2.75 2.75 0 0 1 20 4.75v8.768a1.748 1.748 0 0 0-.843.365l-.657.526V4.75c0-.69-.56-1.25-1.25-1.25H4.75c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h11.775c.527.517 1.32.643 1.975.332v.868c-.375.192-.8.3-1.25.3H4.75A2.75 2.75 0 0 1 2 17.25V4.75A2.75 2.75 0 0 1 4.75 2h12.5Zm2.532 12.664A.75.75 0 0 1 21 15.25v6a.75.75 0 0 1-1.5 0v-4.44l-1.282 1.026a.75.75 0 0 1-.936-1.172l2.5-2ZM9 13.44l6.47-6.47a.75.75 0 0 1 1.133.977l-.073.084-7 7a.75.75 0 0 1-.976.073l-.084-.073-3-3a.75.75 0 0 1 .976-1.133l.084.073L9 13.44Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCheckbox1',
    mixins: [icon]
};
</script>