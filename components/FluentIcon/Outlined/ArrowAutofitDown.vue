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
<path d="M13.22 17.219a.75.75 0 0 0-.073.976l.073.084 2.367 2.37a.77.77 0 0 0 .664.351.786.786 0 0 0 .611-.276l.053-.075 2.367-2.37.073-.084a.75.75 0 0 0 .007-.882l-.08-.094-.084-.073a.75.75 0 0 0-.883-.007l-.094.08L17 18.44V3.656l-.007-.089c-.05-.32-.363-.567-.743-.567s-.694.247-.743.567l-.007.09V18.44l-1.22-1.221-.084-.073a.75.75 0 0 0-.976.073Zm-6.97 2.789A2.25 2.25 0 0 1 4 17.758v-11.5a2.25 2.25 0 0 1 2.25-2.25h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h4a.75.75 0 0 1 0 1.5h-4Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedArrowAutofitDown',
    mixins: [icon]
};
</script>