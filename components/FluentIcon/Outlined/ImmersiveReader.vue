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
<path d="M11.134 19.5H3.75A1.75 1.75 0 0 1 2 17.75v-13C2 3.784 2.784 3 3.75 3h6c.788 0 1.499.331 2 .863a2.742 2.742 0 0 1 2-.863h6c.966 0 1.75.784 1.75 1.75v7.418a1.755 1.755 0 0 0-1.5 0V4.75a.25.25 0 0 0-.25-.25h-6c-.69 0-1.25.56-1.25 1.25V15H12a1 1 0 0 0-1 1V5.75c0-.69-.56-1.25-1.25-1.25h-6a.25.25 0 0 0-.25.25v13c0 .138.112.25.25.25h6c.023 0 .046 0 .069-.002V18H11v1c0 .182.049.353.134.5ZM21.23 13.174c.248.207.585.58.913 1.128.536.893.857 1.962.857 3.198s-.32 2.305-.857 3.198c-.328.547-.665.921-.913 1.128a.75.75 0 1 1-.96-1.152c.127-.106.353-.357.587-.747.401-.67.643-1.475.643-2.427s-.242-1.758-.643-2.427c-.234-.39-.46-.641-.587-.747a.75.75 0 1 1 .96-1.152Z" :fill="fill" :fill-opacity="opacity" />

<path d="M19.2 14.65c.189.141.435.388.674.746.391.587.626 1.292.626 2.104s-.235 1.517-.626 2.104c-.239.358-.485.605-.674.746a.75.75 0 0 1-.984-1.127l.084-.073a1.68 1.68 0 0 0 .326-.378C18.86 18.42 19 18 19 17.5s-.14-.92-.374-1.271a1.683 1.683 0 0 0-.326-.379.75.75 0 0 1 .9-1.2ZM16.514 14.048a.75.75 0 0 1 .486.702v5.5a.75.75 0 0 1-1.314.494L14.16 19h-1.41a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h1.41l1.526-1.744a.75.75 0 0 1 .828-.208Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedImmersiveReader',
    mixins: [icon]
};
</script>