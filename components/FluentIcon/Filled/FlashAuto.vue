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
<path d="M12.75 1.996a.75.75 0 0 1 .738.89l-.026.097-1.671 5.013h4.46a.75.75 0 0 1 .61 1.187l-.07.082-11.995 12.5c-.509.531-1.376.087-1.287-.605l.018-.096 1.767-7.068H2.75a.75.75 0 0 1-.742-.86l.021-.096 3-10.5a.75.75 0 0 1 .612-.536l.11-.008h7Zm5.394 9.373.05.105 3.75 9.496a.75.75 0 0 1-1.351.643l-.044-.092-.998-2.525h-4.11l-.996 2.525a.75.75 0 0 1-.876.453l-.097-.031a.75.75 0 0 1-.453-.876l.03-.097 3.75-9.496c.235-.595 1.043-.63 1.345-.105Zm-.648 2.422-1.463 3.705h2.926l-1.463-3.705Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFlashAuto',
    mixins: [icon]
};
</script>