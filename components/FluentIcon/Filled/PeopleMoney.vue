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
<path d="M13.5 12.501a1.5 1.5 0 0 1 1.493 1.356L15 14V15h-1.5a2.5 2.5 0 0 0-2.5 2.5v3.221A11.06 11.06 0 0 1 8.5 21c-2.722 0-6.335-.956-6.495-4.27L2 16.5V14a1.5 1.5 0 0 1 1.356-1.493L3.5 12.5l10 .001Zm8 2.499c.171 0 .338.017.5.05V14l-.007-.145A1.5 1.5 0 0 0 20.5 12.5h-5.012l.113.162c.25.387.399.844.399 1.338v1h5.5ZM8.5 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm9 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7ZM12 17.5a1.5 1.5 0 0 1 1.5-1.5h8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1-1.5-1.5v-4Zm10 .5a1 1 0 0 1-1-1h-1a2 2 0 0 0 2 2v-1Zm0 2a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1v-1Zm-8-3a1 1 0 0 1-1 1v1a2 2 0 0 0 2-2h-1Zm1 5a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1h1Zm4.25-2.5a1.75 1.75 0 1 0-3.5 0 1.75 1.75 0 0 0 3.5 0Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPeopleMoney',
    mixins: [icon]
};
</script>