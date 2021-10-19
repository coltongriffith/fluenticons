<template>
  <div class="border-t border-gray-300 dark:border-gray-700">
    <div>
      <div
        class="
          overflow-hidden
          grid grid-cols-2
        "
      >
        <input
          type="text"
          class="bg-transparent focus:outline-none px-4 py-2"
          placeholder="PNG Size"
          v-model="size"
        />
        <button
          class="
            flex-between
            px-4
            py-2
            bg-gray-100
            dark:bg-[#070d19]
            border-l border-gray-300
            dark:border-gray-700
          "
          @click="downloadCustomSize()"
        >
          <p>PNG</p>
          <FluentIconOutlinedArrowDownload class="text-gray-500 h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: null
    };
  },
  methods: {
    downloadCustomSize() {
      alert("This feature is still in progress");
      // if (this.size >= 12) {
      //   this.$emit("downloadCustomSize", this.size);
      // }
    }
  }
};
</script>
