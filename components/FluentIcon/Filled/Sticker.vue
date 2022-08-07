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
<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v6.749L16.251 13l-.213.007a3.25 3.25 0 0 0-2.714 1.832c-.42.114-.86.17-1.323.17-1.045 0-1.98-.29-2.824-.873a.75.75 0 1 0-.854 1.233 6.335 6.335 0 0 0 3.678 1.14c.227 0 .45-.01.671-.032l.329-.04L13 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm2.591 11.72L14.72 20.34a2.266 2.266 0 0 1-.218.191L14.5 16.25l.006-.143c.069-.85.745-1.528 1.593-1.6l.151-.007h4.282c-.059.077-.123.15-.192.22ZM9.001 7.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 7.75Zm6 0a1.25 1.25 0 1 0 0 2.499 1.25 1.25 0 0 0 0-2.499Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledSticker',
    mixins: [icon]
};
</script>