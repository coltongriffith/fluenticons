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
<path d="M5.25 3A2.25 2.25 0 0 0 3 5.25v13.499a2.25 2.25 0 0 0 2.25 2.25h5.914l.356-1.424.02-.076H5.25a.75.75 0 0 1-.75-.75v-13.5a.75.75 0 0 1 .75-.75h13.499a.75.75 0 0 1 .75.75v5.983c.478-.19.993-.264 1.5-.22V5.25A2.25 2.25 0 0 0 18.748 3h-13.5Zm10.104 11.999h-4.105a.75.75 0 1 0 0 1.5h2.605l1.5-1.5Zm-6.605-6.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.5-.75a.75.75 0 1 0 0 1.5h5.5a.75.75 0 1 0 0-1.5h-5.5Zm0 3.75a.75.75 0 1 0 0 1.5h5.5a.75.75 0 1 0 0-1.5h-5.5ZM7.75 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1 2.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10.35-3.08-5.902 5.901a2.685 2.685 0 0 0-.707 1.248l-.457 1.83c-.2.797.522 1.518 1.318 1.319l1.83-.458a2.685 2.685 0 0 0 1.248-.706L22.33 15.9a2.286 2.286 0 0 0-3.233-3.232Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedTextBulletListSquareEdit',
    mixins: [icon]
};
</script>