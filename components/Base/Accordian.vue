<template>
  <Transition name="expand" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave">
    <slot />
  </Transition>
</template>

<script setup>
function onEnter(el) {
  const { width } = getComputedStyle(el)
  el.style.width = width
  el.style.position = 'absolute'
  el.style.visibility = 'hidden'
  el.style.height = 'auto'
  const { height } = getComputedStyle(el)
  el.style.width = null
  el.style.position = null
  el.style.visibility = null
  el.style.height = '0'
  getComputedStyle(el).height
  requestAnimationFrame(() => {
    el.style.height = height
  })
}

function onAfterEnter(el) {
  el.style.height = 'auto'
}

function onLeave(el) {
  const { height } = getComputedStyle(el)
  el.style.height = height
  getComputedStyle(el).height
  requestAnimationFrame(() => {
    el.style.height = '0'
  })
}
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>

<style>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.25s ease-in-out;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  height: 0;
}
</style>
