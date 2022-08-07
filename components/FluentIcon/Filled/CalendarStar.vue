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
<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11ZM21 8.5l.001 3.523a6.5 6.5 0 0 0-8.979 8.979L6.25 21A3.25 3.25 0 0 1 3 17.75V8.5h18Zm-4.016 5.546-.04.098-.556 1.787h-1.803c-.532 0-.772.668-.417 1.036l.074.065 1.458 1.105-.557 1.787c-.165.53.375.975.821.73l.078-.05L17.5 19.5l1.458 1.104c.433.328 1.006-.07.92-.588l-.021-.092-.557-1.787 1.458-1.105c.43-.326.248-1.014-.247-1.093l-.096-.008h-1.803l-.557-1.787a.576.576 0 0 0-1.071-.098ZM17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3h11.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledCalendarStar',
    mixins: [icon]
};
</script>