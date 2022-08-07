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
<path d="M11.5 5.999v13L7.25 19a1.75 1.75 0 0 1-1.745-1.606l-.006-.144v-9.5a1.75 1.75 0 0 1 1.607-1.744L7.249 6l4.25-.001ZM16.75 6a1.75 1.75 0 0 1 1.745 1.606l.006.144v9.5a1.75 1.75 0 0 1-1.607 1.744l-.143.006-4.252-.001v-13L16.751 6Zm-1.5 9.5h-1l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1l.102-.007a.75.75 0 0 0-.102-1.493Zm-5.5 0h-1l-.102.007a.75.75 0 0 0 0 1.486L8.75 17h1l.101-.007A.75.75 0 0 0 9.75 15.5Zm11.366-7.461.06.09.045.093.582 1.456a2.75 2.75 0 0 1-.244 2.514l-.109.157-.151.202a1.25 1.25 0 0 0-.207 1.077l.046.137.583 1.457a.75.75 0 0 1-1.349.649l-.044-.092-.583-1.457a2.75 2.75 0 0 1 .244-2.514l.11-.157.151-.202a1.25 1.25 0 0 0 .206-1.077l-.045-.137-.583-1.456a.75.75 0 0 1 1.288-.74Zm-17.549 0 .06.09.045.093.583 1.456a2.75 2.75 0 0 1-.244 2.514l-.11.157-.151.202a1.25 1.25 0 0 0-.206 1.077l.045.137.583 1.457a.75.75 0 0 1-1.349.649l-.044-.092-.582-1.457a2.75 2.75 0 0 1 .244-2.514l.109-.157.151-.202a1.25 1.25 0 0 0 .207-1.077l-.046-.137-.583-1.456a.75.75 0 0 1 1.288-.74Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledDualScreenVibrate',
    mixins: [icon]
};
</script>