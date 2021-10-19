<template>
  <article
    class="
      pb-[100%]
      relative
      border
      dark:border-gray-700
      rounded-lg
      overflow-hidden
    "
  >
    <div
      class="
        absolute
        w-20
        h-10
        bg-gray-200
        dark:bg-gray-800
        top-0
        right-0
        translate-x-1/2
        -translate-y-1/2
        rotate-45
        z-40
      "
      v-if="isAFavorite"
    ></div>
    <div class="absolute inset-0">
      <button
        @click="selectIcon"
        class="
          block
          w-full
          h-full
          focus:outline-none
          group
          relative
          hover:bg-gray-100
          dark:hover:bg-gray-700
          focus:bg-gray-100
          dark:focus:bg-gray-700
        "
        :class="{ 'bg-gray-100 dark:bg-gray-700': selected }"
        :aria-label="icon.name"
      >
        <div class="absolute inset-0">
          <div class="flex flex-row justify-center items-center h-full">
            <component :is="icon.componentName" class="h-10 w-10" />
          </div>
        </div>
        <div class="p-4 absolute inset-x-0 bottom-0">
          <div class="-mx-2 -my-1 flex flex-row justify-center">
            <p
              class="
                subpixel-antialiased
                px-2
                py-1
                tracking-wide
                leading-tight
                text-cool-gray-600
                dark:text-cool-gray-400
                cursor-text
                select-text
                text-xs
                truncate
              "
            >
              {{ icon.name.replace(/([A-Z])/g, " $1") }}
            </p>
          </div>
        </div>
      </button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectIcon() {
      this.$emit("setIcon", this.icon);
    },
  },
  computed: {
    isAFavorite() {
      return this.$store.getters.isAFavorite(this.icon.componentName);
    },
  },
};
</script>