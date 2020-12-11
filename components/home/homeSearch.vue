<template>
  <div
    class="group sticky top-0 z-50 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-16 border-b flex items-center"
  >
    <form class="flex-grow">
      <div class="max-w-container mx-auto flex">
        <label for="search-input" class="flex-none pr-3 flex items-center">
          <span class="sr-only">Search all 2182 icons</span>
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="text-gray-400 dark:text-white group-focus-within:text-gray-500 dark:group-focus-within:text-gray-300 transition-colors duration-150"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </label>
        <input
          type="text"
          id="search-input"
          autofocus
          ref="search"
          placeholder="Press / to focus"
          @input="search"
          class="flex-auto py-6 text-base leading-6 focus:outline-none border-none text-gray-600 placeholder-gray-500 focus:placeholder-gray-400 dark:bg-gray-800 dark:text-white"
        />
      </div>
    </form>
    <theme-toggle class="text-gray-700 dark:text-white" />
    <search-focus @keyup="focusSearch"></search-focus>
  </div>
</template>

<script>
export default {
  methods: {
    search(e) {
      this.$emit("input", e.target.value);
    },
    focusSearch(e) {
      if (e.key === "/") {
        this.$refs.search.focus();
      }
    },
  },
};
</script>