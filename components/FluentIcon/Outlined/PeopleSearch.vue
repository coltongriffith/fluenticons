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
<path d="m11.91 13.998 7.843.002a2.25 2.25 0 0 1 2.25 2.25v.905A3.75 3.75 0 0 1 20.696 20C19.13 21.344 16.89 22 14 22h-.179c.234-.47.242-1.025.026-1.502l.153.003c2.56 0 4.458-.557 5.719-1.64a2.25 2.25 0 0 0 .784-1.706v-.905a.75.75 0 0 0-.75-.75h-7.776a5.565 5.565 0 0 0-.068-1.502ZM6.5 10.5a4.5 4.5 0 0 1 3.46 7.376l2.823 2.814a.75.75 0 0 1-.975 1.135l-.085-.073-2.903-2.896A4.5 4.5 0 1 1 6.5 10.5Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM14 2.004a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPeopleSearch',
    mixins: [icon]
};
</script>