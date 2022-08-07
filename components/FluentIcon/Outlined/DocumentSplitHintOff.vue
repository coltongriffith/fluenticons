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
<path d="M3.28 2.22a.75.75 0 0 0-1.06 1.06L4 5.06v6.19a.75.75 0 0 0 1.5 0V6.56l13 13V20a.5.5 0 0 1-.5.5h-1.25a.75.75 0 1 0 0 1.5H18a2 2 0 0 0 1.804-1.135l.916.915a.75.75 0 1 0 1.06-1.06l-1.986-1.987a.81.81 0 0 0-.027-.026L3.28 2.22ZM12 8c0 .493.179.944.475 1.293l.232.232c.349.296.8.475 1.293.475h4.5v1.25a.75.75 0 0 0 1.5 0v-1.5a2.001 2.001 0 0 0-.586-1.336l-5.829-5.828c-.015-.015-.032-.028-.049-.04l-.036-.03a2.073 2.073 0 0 0-.219-.18.643.643 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.108-.063-.166-.087a1.977 1.977 0 0 0-.624-.138c-.02-.001-.04-.004-.059-.007A.605.605 0 0 0 12.172 2H6c-.244 0-.478.044-.694.124L6.682 3.5H12V8Zm1.5-3.379L17.378 8.5H14a.5.5 0 0 1-.5-.5V4.621Zm5 10.698 1.361 1.36a.746.746 0 0 0 .14-.434V13.75a.75.75 0 0 0-1.5 0v1.569Zm-13.75-2.32a.75.75 0 0 1 .75.75v2.496a.75.75 0 0 1-1.5 0V13.75a.75.75 0 0 1 .75-.75Zm5.5 7.5a.75.75 0 1 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Zm-5.5-2a.75.75 0 0 1 .75.75V20a.5.5 0 0 0 .5.5h1.25a.75.75 0 0 1 0 1.5H6a2 2 0 0 1-2-2v-.75a.75.75 0 0 1 .75-.75Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedDocumentSplitHintOff',
    mixins: [icon]
};
</script>