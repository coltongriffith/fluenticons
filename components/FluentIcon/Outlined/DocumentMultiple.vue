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
<path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h4.381a2.25 2.25 0 0 1 1.591.659l4.619 4.619c.422.422.659.994.659 1.59v8.382a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 4 17.25v-13Zm2.25-.75a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.998h-3.246a2.25 2.25 0 0 1-2.25-2.25V3.5H6.25Zm5.754 1.062v2.186c0 .414.336.75.75.75h2.185l-2.935-2.936ZM6.629 20.5A2.25 2.25 0 0 0 8.75 22h6.5A4.75 4.75 0 0 0 20 17.25v-5.881a2.25 2.25 0 0 0-.66-1.591l-.84-.841v8.313a3.25 3.25 0 0 1-3.25 3.25H6.629Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentMultiple',
    mixins: [icon]
};
</script>