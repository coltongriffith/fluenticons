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
<path d="M12 6c2.888 0 5.78.36 8.672 1.08a1.75 1.75 0 0 1 1.322 1.548l.006.15v3.095a4.124 4.124 0 0 1-3.918 4.119l-.206.005h-2.469a2.75 2.75 0 0 1-1.93-.791l-.135-.143-.655-.745a.913.913 0 0 0-1.284-.087l-.088.088-.651.741a2.75 2.75 0 0 1-1.87.93l-.197.007h-2.47a4.127 4.127 0 0 1-4.122-3.92L2 11.87V8.777A1.75 1.75 0 0 1 3.328 7.08 35.823 35.823 0 0 1 12 6Zm4.752 3-.102.007a.75.75 0 0 0-.004 1.486l.102.007 1.5.004.101-.007a.75.75 0 0 0 .004-1.486l-.101-.007-1.5-.004ZM7.25 9H5.747l-.102.007a.75.75 0 0 0 0 1.486l.102.007H7.25l.102-.007a.75.75 0 0 0 0-1.486L7.25 9ZM12 8.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledHeadsetVr',
    mixins: [icon]
};
</script>