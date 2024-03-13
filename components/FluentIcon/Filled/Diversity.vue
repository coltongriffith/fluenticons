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
<path d="M16 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2Zm-10.45.898a1.619 1.619 0 0 1 2.9 0l2.372 4.716C11.37 9.707 10.585 11 9.372 11H4.628c-1.213 0-1.999-1.293-1.45-2.386L5.55 3.898Zm5.378 13.864a3.979 3.979 0 0 1-.62 1.486l-5.556-5.557A3.978 3.978 0 0 1 7 13a4 4 0 0 1 3.93 4.748l-.002.014Zm-3.24 3.18a4 4 0 0 1-4.618-4.69l.002-.014a3.978 3.978 0 0 1 .62-1.486l5.556 5.557a3.978 3.978 0 0 1-1.56.632Zm8.832-7.826c.3-.155.66-.155.96 0l2.974 1.536a.998.998 0 0 1 .546.885v2.926c0 .37-.21.711-.546.885l-2.974 1.536c-.3.155-.66.155-.96 0l-2.974-1.536a.998.998 0 0 1-.546-.885v-2.926c0-.37.21-.711.546-.885l2.974-1.536Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDiversity',
    mixins: [icon]
};
</script>