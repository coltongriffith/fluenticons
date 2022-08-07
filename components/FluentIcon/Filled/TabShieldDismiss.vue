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
<path d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4.738c-.669-.246-1.311-.67-1.938-1.298-.02-.02-.04-.04-.062-.059V6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6.73a6.694 6.694 0 0 0 1.452 2H6a3 3 0 0 1-3-3V6Z" :fill="fill" :fill-opacity="opacity" />

<path d="M22.5 12c-1.531 0-2.905-.61-4.145-1.853a.5.5 0 0 0-.708 0C16.404 11.388 15.03 12 13.5 12a.5.5 0 0 0-.5.5v3.001l.005.29c.096 3.06 1.733 5.149 4.837 6.183a.499.499 0 0 0 .316 0C21.358 20.907 23 18.72 23 15.501V12.5l-.008-.09A.5.5 0 0 0 22.5 12Zm-6.604 1.896.07-.057.076-.044a.5.5 0 0 1 .492.044l.07.057L18 15.293l1.396-1.397.07-.057a.5.5 0 0 1 .568 0l.07.057.057.07a.5.5 0 0 1 0 .568l-.057.07L18.707 16l1.397 1.396.057.07a.5.5 0 0 1 0 .568l-.057.07-.07.057a.5.5 0 0 1-.568 0l-.07-.057L18 16.707l-1.396 1.397-.07.057a.5.5 0 0 1-.568 0l-.07-.057-.057-.07a.5.5 0 0 1 0-.568l.057-.07L17.293 16l-1.397-1.396-.057-.07a.5.5 0 0 1 0-.568l.057-.07Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledTabShieldDismiss',
    mixins: [icon]
};
</script>