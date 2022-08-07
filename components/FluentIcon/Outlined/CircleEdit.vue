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
<path d="M12 3.5a8.5 8.5 0 0 0-.705 16.971l-.234.936a2.117 2.117 0 0 0-.064.543C5.945 21.447 2 17.184 2 12 2 6.477 6.477 2 12 2c5.27 0 9.589 4.077 9.972 9.25a3.293 3.293 0 0 0-1.257-.25h-.002c-.09 0-.18.004-.27.011A8.501 8.501 0 0 0 12 3.5Zm8.715 8.5h-.002c-.585 0-1.17.223-1.615.67l-5.902 5.902a2.684 2.684 0 0 0-.707 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.684 2.684 0 0 0 1.248-.707l5.902-5.902A2.285 2.285 0 0 0 20.715 12Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCircleEdit',
    mixins: [icon]
};
</script>