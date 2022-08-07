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
<path fill="#745125" d="M4 4.25h16v1.5H4z"/>

<path fill="#E62C46" d="M4 5.75h16v1.5H4z"/>

<path fill="#F36D38" d="M4 7.25h16V9H4z"/>

<path fill="#FFD23E" d="M4 9h16v1.5H4z"/>

<path fill="#61BC51" d="M4 10.5h16v1.75H4z"/>

<path fill="#1793E8" d="M4 12.25h16v1.5H4z"/>

<path fill="#B73FBB" d="M4 13.75h17v1.5H4z"/>

<path d="M3.75 3a.75.75 0 0 0-.75.75v17.5a.75.75 0 0 0 1.5 0V16.5h15.75a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-.75-.75H3.75Zm.75 1.5h15V15h-15V4.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledFlagPride',
    mixins: [icon]
};
</script>