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
<path d="M5.254 14h10.988c.104.172.231.332.38.474l.72.682c-.042.159-.095.318-.16.478a.75.75 0 0 0-.429-.134h-11.5a.75.75 0 0 0-.75.75v.907c0 .656.287 1.279.784 1.706C6.545 19.945 8.44 20.501 11 20.501c.292 0 .575-.007.85-.022.081.447.294.871.63 1.21l.228.227c-.541.057-1.11.085-1.708.085-2.89 0-5.128-.657-6.691-2a3.75 3.75 0 0 1-1.305-2.844v-.907A2.25 2.25 0 0 1 5.254 14Zm11.757-1.755.503-1.187c.236-.557.801-.86 1.356-.744l.118.031.63.202c.626.2 1.104.735 1.259 1.407.367 1.598-.074 3.543-1.322 5.835-1.247 2.29-2.614 3.666-4.1 4.13a1.76 1.76 0 0 1-1.663-.343l-.124-.113-.478-.48a1.36 1.36 0 0 1-.222-1.591l.07-.116.722-1.06c.284-.417.77-.615 1.237-.515l.127.035 1.332.444a5.081 5.081 0 0 0 1.33-1.52 4.798 4.798 0 0 0 .596-1.59l.038-.269-1.109-1.053a1.354 1.354 0 0 1-.348-1.372l.048-.131.503-1.187-.503 1.187ZM11 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedPersonCall',
    mixins: [icon]
};
</script>