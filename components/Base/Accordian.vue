<script>
export default {
  name: `TransitionExpand`,
  functional: true,
  render(createElement, context) {
    const data = {
      props: {
        name: `expand`,
      },
      on: {
        afterEnter(element) {
          // eslint-disable-next-line no-param-reassign
          element.style.height = `auto`;
        },
        enter(element) {
          const { width } = getComputedStyle(element);
          element.style.width = width;
          element.style.position = `absolute`;
          element.style.visibility = `hidden`;
          element.style.height = `auto`;
          const { height } = getComputedStyle(element);
          element.style.width = null;
          element.style.position = null;
          element.style.visibility = null;
          element.style.height = 0;
          getComputedStyle(element).height;
          requestAnimationFrame(() => {
            element.style.height = height;
          });
        },
        leave(element) {
          const { height } = getComputedStyle(element);
          element.style.height = height;
          getComputedStyle(element).height;
          requestAnimationFrame(() => {
            element.style.height = 0;
          });
        },
      },
    };

    return createElement(`transition`, data, context.children);
  },
};
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

.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>