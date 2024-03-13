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
<path d="M14.504 4.752a2.752 2.752 0 1 0-5.504 0V19.25a2.752 2.752 0 0 0 3.667 2.597 6.513 6.513 0 0 1-.934-1.345A1.252 1.252 0 0 1 10.5 19.25V4.752a1.252 1.252 0 0 1 2.504 0v8.055c.444-.426.949-.79 1.5-1.076V4.75ZM21.504 12.38V9.752a2.752 2.752 0 1 0-5.504 0v1.422a6.52 6.52 0 0 1 1.5-.173V9.75a1.252 1.252 0 0 1 2.504 0v1.75a6.492 6.492 0 0 1 1.5.879ZM4.752 12a2.752 2.752 0 0 1 2.752 2.752v4.498a2.752 2.752 0 0 1-5.504 0v-4.498A2.752 2.752 0 0 1 4.752 12Zm0 1.5c-.692 0-1.252.56-1.252 1.252v4.498a1.252 1.252 0 1 0 2.504 0v-4.498c0-.692-.56-1.252-1.252-1.252Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-5 .5.001 2.504a.5.5 0 1 1-1 0v-2.503h-2.505a.5.5 0 0 1 0-1H17V14.5a.5.5 0 1 1 1 0V17h2.503a.5.5 0 1 1 0 1h-2.502Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDataBarVerticalAdd',
    mixins: [icon]
};
</script>