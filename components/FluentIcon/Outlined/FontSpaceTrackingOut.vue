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
<path d="m19.446 16.147.084.073 2.25 2.25a.75.75 0 0 1 .073.976l-.073.084-2.25 2.25a.75.75 0 0 1-1.133-.976l.073-.084.969-.971H4.56l.97.97.072.085a.75.75 0 0 1-1.05 1.049l-.083-.073-2.25-2.25-.073-.084a.75.75 0 0 1-.007-.883l.08-.093 2.25-2.25.084-.073a.75.75 0 0 1 .882-.007l.094.08.073.084a.75.75 0 0 1 .007.882l-.08.094-.97.969H19.44l-.97-.969a.75.75 0 0 1-.072-.976l.073-.084a.75.75 0 0 1 .976-.073ZM7.836 2.279l.062.092.05.106 4.5 11.5a.75.75 0 0 1-1.353.639l-.043-.093-1.236-3.156H4.683l-1.235 3.156a.75.75 0 0 1-.874.456l-.097-.03a.75.75 0 0 1-.456-.875l.03-.097 4.5-11.5c.22-.561.946-.627 1.285-.198Zm12.759.106a.75.75 0 0 1 1.384.541l-.03.097-4.5 11.5-.051.106a.751.751 0 0 1-1.296 0l-.05-.105-4.5-11.5-.031-.098a.75.75 0 0 1 .355-.826l.1-.048.098-.03a.75.75 0 0 1 .826.354l.048.1 3.802 9.716 3.802-9.715.043-.092ZM7.25 4.808 5.27 9.867h3.959L7.25 4.807Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconOutlinedFontSpaceTrackingOut',
    mixins: [icon]
};
</script>