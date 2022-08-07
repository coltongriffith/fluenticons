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
<path d="M14 14H4.253a2.249 2.249 0 0 0-2.25 2.249v.578c0 .892.32 1.756.9 2.435 1.565 1.834 3.951 2.74 7.097 2.74.715 0 1.39-.048 2.026-.141A2.524 2.524 0 0 1 12 21.5v-1.153c-.614.103-1.28.154-2 .154-2.738 0-4.704-.746-5.957-2.213a2.25 2.25 0 0 1-.54-1.462v-.577c0-.414.336-.75.75-.75h7.955A2.505 2.505 0 0 1 14 14.05V14ZM10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM15 15h-.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H20v-1a2.5 2.5 0 0 0-5 0v1Zm1.5-1a1 1 0 1 1 2 0v1h-2v-1Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPersonLock',
    mixins: [icon]
};
</script>