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
<path d="M8.005 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM17 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM9.484 14.75a.75.75 0 0 1 .75-.75h3.485a.75.75 0 0 1 0 1.5h-3.485a.75.75 0 0 1-.75-.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M9.266 1.992a.75.75 0 0 0-.75.75V4.5h-.664a3.25 3.25 0 0 0-3.11 2.303L4.683 7H3.75a.75.75 0 0 0 0 1.5h.533l-.202.827A2.249 2.249 0 0 0 3 11.25v8.5c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 8 19.75V18.5h8v1.25c0 .966.784 1.75 1.75 1.75h1.5A1.75 1.75 0 0 0 21 19.75v-8.5c0-.815-.434-1.53-1.083-1.924l-.206-.826h.539a.75.75 0 0 0 0-1.5h-.942l-.055-.184A3.25 3.25 0 0 0 16.14 4.5h-.64V2.742a.75.75 0 0 0-.75-.75H9.266ZM14 4.5h-3.984V3.492H14V4.5ZM7.852 6h8.288a1.75 1.75 0 0 1 1.676 1.247l.21.702L18.29 9H5.705l.257-1.052.216-.708A1.75 1.75 0 0 1 7.852 6ZM4.5 17v-5.75a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75V17h-15Zm0 2.75V18.5h2v1.25a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25Zm15-1.25v1.25a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25V18.5h2Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedVehicleCab',
    mixins: [icon]
};
</script>