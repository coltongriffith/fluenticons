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
<path d="M3.143 5.75A2.75 2.75 0 0 1 5.893 3h12.5a2.75 2.75 0 0 1 2.75 2.75v5.037a4.832 4.832 0 0 1-1.5-.827V5.75c0-.69-.56-1.25-1.25-1.25h-12.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h7.102a6.683 6.683 0 0 0 1.188 1.5h-8.29a2.75 2.75 0 0 1-2.75-2.75V5.75Z" :fill="fill" :fill-opacity="opacity" />

<path d="M22.5 12c-1.53 0-2.905-.61-4.145-1.853a.5.5 0 0 0-.707 0C16.405 11.388 15.03 12 13.501 12a.5.5 0 0 0-.5.5v3.001l.004.29c.097 3.06 1.734 5.149 4.838 6.183a.499.499 0 0 0 .316 0C21.359 20.907 23 18.72 23 15.501V12.5l-.008-.09A.5.5 0 0 0 22.5 12Zm-6.603 1.896.07-.057.076-.044a.5.5 0 0 1 .492.044l.07.057L18 15.293l1.396-1.397.07-.057a.5.5 0 0 1 .568 0l.07.057.057.07a.5.5 0 0 1 0 .568l-.058.07L18.708 16l1.396 1.396.058.07a.5.5 0 0 1 0 .568l-.058.07-.069.057a.5.5 0 0 1-.569 0l-.069-.057-1.396-1.397-1.397 1.397-.069.057a.5.5 0 0 1-.569 0l-.069-.057-.058-.07a.5.5 0 0 1 0-.568l.058-.07L17.294 16l-1.397-1.396-.058-.07a.5.5 0 0 1 0-.568l.058-.07Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTabShieldDismiss',
    mixins: [icon]
};
</script>