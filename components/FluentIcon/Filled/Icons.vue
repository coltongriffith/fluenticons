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
<path d="M17.102 9.596c.223-.259.419-.543.582-.846h2.318a2 2 0 0 0 2-2 1 1 0 0 0-1-1h-2.81A4.751 4.751 0 1 0 9.46 9H4.5A1.5 1.5 0 0 0 3 10.5v.75a7 7 0 0 0 7 7h.967l.056-.125A4.553 4.553 0 0 1 10.5 16c0-1.236.613-2.465 1.477-3.387a6.326 6.326 0 0 1 3.793-1.941 19.779 19.779 0 0 1 2.348-.177 4.021 4.021 0 0 0-1.016-.899Z" :fill="fill" :fill-opacity="opacity" />

<path d="M12.24 17.954c-.738 1.109-1.174 2.286-1.233 3.251a.75.75 0 0 0 1.497.091c.032-.514.242-1.21.646-1.95.592.62 1.521 1.158 2.85 1.158 1.304 0 2.28-.457 2.999-1.19.693-.706 1.105-1.626 1.397-2.488.148-.436.27-.876.382-1.286l.057-.212c.09-.334.173-.64.261-.925.107-.344.21-.617.32-.825.11-.21.203-.302.26-.34a.75.75 0 0 0-.212-1.348c-1.024-.288-2.762-.598-5.562-.227a5.326 5.326 0 0 0-3.195 1.634c-.74.79-1.207 1.786-1.207 2.703 0 .377.058.718.148 1.02.215-.322.459-.639.726-.944a9.896 9.896 0 0 1 5.005-3.061.5.5 0 0 1 .242.97 8.895 8.895 0 0 0-4.495 2.751c-.352.4-.647.812-.886 1.218Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledIcons',
    mixins: [icon]
};
</script>