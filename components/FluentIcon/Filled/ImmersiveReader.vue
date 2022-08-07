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
<path d="M4 3a2 2 0 0 0-2 2v12.5a2 2 0 0 0 2 2H11.134A.996.996 0 0 1 11 19v-1.504H9.819v.004H4V5h6a1 1 0 0 1 1 1v10a1 1 0 0 1 1-1h1V6a1 1 0 0 1 1-1h6v7.168a1.75 1.75 0 0 1 1.87.238c.043.035.086.073.13.114V5a2 2 0 0 0-2-2h-6c-.768 0-1.47.289-2 .764A2.989 2.989 0 0 0 10 3H4Z" :fill="fill" :fill-opacity="opacity" />

<path d="M21.23 13.174c.248.207.585.58.913 1.128.536.893.857 1.962.857 3.198s-.32 2.305-.857 3.198c-.328.547-.665.921-.913 1.128a.75.75 0 1 1-.96-1.152c.127-.106.353-.357.587-.747.401-.67.643-1.475.643-2.427s-.242-1.758-.643-2.427c-.234-.39-.46-.641-.587-.747a.75.75 0 1 1 .96-1.152Z" :fill="fill" :fill-opacity="opacity" />

<path d="M19.2 14.65c.189.141.435.388.674.746.391.587.626 1.292.626 2.104s-.235 1.517-.626 2.104c-.239.358-.485.605-.674.746a.75.75 0 0 1-.984-1.127l.084-.073a1.68 1.68 0 0 0 .326-.378C18.86 18.42 19 18 19 17.5s-.14-.92-.374-1.271a1.683 1.683 0 0 0-.326-.379.75.75 0 0 1 .9-1.2ZM16.514 14.048a.75.75 0 0 1 .486.702v5.5a.75.75 0 0 1-1.314.494L14.16 19h-1.41a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h1.41l1.526-1.744a.75.75 0 0 1 .828-.208Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledImmersiveReader',
    mixins: [icon]
};
</script>