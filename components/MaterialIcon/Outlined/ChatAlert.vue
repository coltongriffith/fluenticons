<template>
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" id="mdi-chat-alert-outline" viewBox="0 0 24 24"><linearGradient
      v-if="fill === 'url(#g1)'"
      id="g1"
      :gradientTransform="'rotate(' + angle + ')'"
    >
      <stop class="main-stop" offset="0%" :stop-color="start" />
      <stop class="alt-stop" offset="100%" :stop-color="end" />
    </linearGradient>
    <radialGradient
      v-if="fill === 'url(#g2)'"
      id="g2"
      cx="50%"
      cy="50%"
      r="50%"
    >
      <stop :stop-color="start" offset="0%" />
      <stop :stop-color="end" offset="100%" />
    </radialGradient><path :fill="fill" :fill-opacity="opacity" d="M12 3C6.5 3 2 6.58 2 11C2.05 13.15 3.06 15.17 4.75 16.5C4.75 17.1 4.33 18.67 2 21C4.37 20.89 6.64 20 8.47 18.5C9.61 18.83 10.81 19 12 19C17.5 19 22 15.42 22 11S17.5 3 12 3M12 17C7.58 17 4 14.31 4 11S7.58 5 12 5 20 7.69 20 11 16.42 17 12 17M11 13V15H13V13H11M11 11H13V7H11V11Z" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js";

export default {
  name: 'MaterialIconOutlinedChatAlert',
  mixins: [icon]
};
</script>