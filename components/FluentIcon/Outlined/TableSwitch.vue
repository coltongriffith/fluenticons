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
<path d="M8.78 1.22a.75.75 0 0 0-1.06 1.06l.72.72H6.25A3.25 3.25 0 0 0 3 6.25v2.19l-.72-.72a.75.75 0 0 0-1.06 1.06l2 2a.748.748 0 0 0 1.06 0l2-2a.747.747 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-.72.72V6.25c0-.966.784-1.75 1.75-1.75h2.19l-.72.72a.75.75 0 0 0 .78 1.237.75.75 0 0 0 .28-.177l2-2a.75.75 0 0 0 0-1.06l-2-2Z" :fill="fill" :fill-opacity="opacity" />

<path d="M11.832 3a1.755 1.755 0 0 1 0 1.5H14v4h-4V6.475l-.513.512a1.742 1.742 0 0 1-.987.495V8.5H7.482c-.052.361-.217.71-.495.987L6.475 10H8.5v4h-4v-2.168a1.755 1.755 0 0 1-1.5 0v5.918A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3h-5.918ZM10 14v-4h4v4h-4Zm5.5 0v-4h4v4h-4ZM14 15.5v4h-4v-4h4Zm1.5 4v-4h4v2.25a1.75 1.75 0 0 1-1.75 1.75H15.5Zm0-11v-4h2.25c.966 0 1.75.784 1.75 1.75V8.5h-4Zm-11 7h4v4H6.25a1.75 1.75 0 0 1-1.75-1.75V15.5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTableSwitch',
    mixins: [icon]
};
</script>