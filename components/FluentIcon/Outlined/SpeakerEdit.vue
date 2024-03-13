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
<path d="M14.999 4.252c0-1.078-1.274-1.65-2.08-.934L8.427 7.311a.75.75 0 0 1-.498.19H4.25A2.25 2.25 0 0 0 2 9.75v4.497a2.25 2.25 0 0 0 2.25 2.25h3.68a.75.75 0 0 1 .497.189l3.123 2.776c.143-.501.39-.965.724-1.363l-2.85-2.534a2.25 2.25 0 0 0-1.495-.569H4.25a.75.75 0 0 1-.75-.75V9.75A.75.75 0 0 1 4.25 9h3.68a2.25 2.25 0 0 0 1.495-.569l4.075-3.622v12.046l1.5-1.5V4.252Zm5.04 1.803a9.95 9.95 0 0 1 1.931 5.194 3.294 3.294 0 0 0-1.528-.237 8.448 8.448 0 0 0-1.608-4.064.75.75 0 1 1 1.205-.893Zm-1.88 2.618c.46.85.749 1.807.822 2.822-.21.13-.408.286-.59.468l-.971.971c.052-.303.079-.615.079-.933a5.47 5.47 0 0 0-.66-2.614.75.75 0 1 1 1.32-.714Zm.94 3.997-5.902 5.901a2.685 2.685 0 0 0-.707 1.247l-.457 1.83a1.087 1.087 0 0 0 1.318 1.319l1.83-.458a2.685 2.685 0 0 0 1.248-.706l5.902-5.901a2.285 2.285 0 1 0-3.233-3.232Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedSpeakerEdit',
    mixins: [icon]
};
</script>