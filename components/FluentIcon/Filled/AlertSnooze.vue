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
<path d="M15.25 7h-2.5l-.101.007A.75.75 0 0 0 12.75 8.5h1.043l-1.653 2.314-.055.09A.75.75 0 0 0 12.75 12h2.5l.102-.007a.75.75 0 0 0-.102-1.493h-1.042l1.653-2.314.055-.09A.75.75 0 0 0 15.25 7ZM21.25 2h-3.5l-.101.007A.75.75 0 0 0 17.75 3.5h2.134l-2.766 4.347-.05.09A.75.75 0 0 0 17.75 9h3.5l.102-.007A.75.75 0 0 0 21.25 7.5h-2.133l2.766-4.347.05-.09A.75.75 0 0 0 21.25 2Z" :fill="fill" :fill-opacity="opacity" />
<path d="M12.7 5.5h2.55c.508 0 .956.158 1.316.42l.629-.989a2.251 2.251 0 0 1-1.692-2.06A7.5 7.5 0 0 0 4.505 9.24l-.005.25v4.012l-1.415 3.16a.95.95 0 0 0 .867 1.338h16.1a.95.95 0 0 0 .866-1.338l-1.418-3.16V10.5h-1.75c-.134 0-.265-.011-.39-.032a2.25 2.25 0 0 1-1.807 3.012l-.05.006-.203.014h-2.55c-1.73 0-2.765-1.835-1.992-3.297l.024-.045.108-.175.382-.536a2.25 2.25 0 0 1 1.174-3.927l.05-.006.203-.014ZM14.958 19.003a3 3 0 0 1-5.916 0h5.916Z" :fill="fill" :fill-opacity="opacity" /></svg>
</template>

<script>
import icon from "../../../mixins/icon.js"

export default {
    name: 'FluentIconFilledAlertSnooze',
    mixins: [icon]
};
</script>