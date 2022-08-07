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
<path d="M5.75 3A2.75 2.75 0 0 0 3 5.75v4.682c.453-.239.96-.388 1.5-.424V5.75c0-.69.56-1.25 1.25-1.25H11v1.25A2.25 2.25 0 0 0 13.25 8h6.25v10.25c0 .69-.56 1.25-1.25 1.25h-4.258a3.729 3.729 0 0 1-.425 1.5h4.683A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3H5.75ZM19.5 6.5h-6.25a.75.75 0 0 1-.75-.75V4.5h5.75c.69 0 1.25.56 1.25 1.25v.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M9.5 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" :fill="fill" :fill-opacity="opacity" />

<path d="M5.25 11A3.25 3.25 0 0 0 2 14.25v4.5A3.25 3.25 0 0 0 5.25 22h4.5A3.25 3.25 0 0 0 13 18.75v-4.5A3.25 3.25 0 0 0 9.75 11h-4.5ZM3.5 14.25c0-.966.784-1.75 1.75-1.75h4.5c.966 0 1.75.784 1.75 1.75v4.5c0 .206-.036.404-.101.588L9.09 17.03a2.25 2.25 0 0 0-3.182 0l-2.308 2.308a1.747 1.747 0 0 1-.101-.588v-4.5Zm4.53 3.841 2.308 2.308a1.746 1.746 0 0 1-.588.101h-4.5c-.206 0-.404-.036-.588-.101L6.97 18.09a.75.75 0 0 1 1.06 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTabDesktopImage',
    mixins: [icon]
};
</script>