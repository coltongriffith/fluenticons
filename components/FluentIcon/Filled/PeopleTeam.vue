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
<path d="M14.754 10c.966 0 1.75.784 1.75 1.75v4.749a4.501 4.501 0 0 1-9.002 0V11.75c0-.966.783-1.75 1.75-1.75h5.502Zm-7.623 0c-.35.422-.575.95-.62 1.53l-.01.22v4.749c0 .847.192 1.649.534 2.365A4.001 4.001 0 0 1 2 14.999V11.75a1.75 1.75 0 0 1 1.606-1.744L3.75 10h3.381Zm9.744 0h3.375c.966 0 1.75.784 1.75 1.75V15a4 4 0 0 1-5.03 3.866c.3-.628.484-1.32.525-2.052l.009-.315V11.75c0-.665-.236-1.275-.63-1.75ZM12 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm6.5 1a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm-13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledPeopleTeam',
    mixins: [icon]
};
</script>