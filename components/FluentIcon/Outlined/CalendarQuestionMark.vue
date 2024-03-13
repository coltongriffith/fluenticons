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
<path d="M21 6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.772a6.471 6.471 0 0 1-.709-1.5H6.25a1.75 1.75 0 0 1-1.75-1.75V8.5h15v2.813a6.471 6.471 0 0 1 1.5.709V6.25ZM6.25 4.5h11.5c.966 0 1.75.784 1.75 1.75V7h-15v-.75c0-.966.784-1.75 1.75-1.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-6.125 2.875a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0Zm-1.228-4.547c-.011-1.136.805-1.954 1.853-1.954 1.031 0 1.853.846 1.853 1.95 0 .509-.15.841-.528 1.292l-.134.155-.266.29-.101.116-.085.104c-.18.232-.239.387-.239.59a.5.5 0 1 1-1 0c0-.517.151-.853.535-1.31l.136-.157.265-.29.1-.113.093-.116c.17-.22.224-.37.224-.561 0-.558-.38-.95-.853-.95-.494 0-.859.366-.853.945a.5.5 0 1 1-1 .01Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedCalendarQuestionMark',
    mixins: [icon]
};
</script>