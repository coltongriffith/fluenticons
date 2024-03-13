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
<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.263 1.264A3.235 3.235 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5c.626 0 1.21-.177 1.706-.483l1.263 1.264a.75.75 0 0 0 1.061-1.061L3.28 2.22Zm8.788 10.909 6.206 6.206.056.066a1.746 1.746 0 0 1-.58.099H6.25c-.204 0-.4-.035-.582-.099l5.807-5.686.593-.586Zm-.95-.95a2.245 2.245 0 0 0-.692.464l-5.823 5.7a1.747 1.747 0 0 1-.103-.593V6.25c0-.206.036-.404.101-.588l6.518 6.518ZM19.5 16.318V6.25a1.75 1.75 0 0 0-1.75-1.75H7.682L6.182 3H17.75A3.25 3.25 0 0 1 21 6.25v11.568l-1.5-1.5Z" :fill="fill" :fill-opacity="opacity" />

<path d="M15.252 6.5a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504Zm0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedImageOff',
    mixins: [icon]
};
</script>