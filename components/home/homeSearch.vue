<template>
  <form class="group sticky top-0 z-50 bg-white px-4 sm:px-6 lg:px-16 shadow">
    <div class="max-w-container mx-auto flex">
      <label for="search-input" class="flex-none pr-3 flex items-center"
        ><span class="sr-only">Search all 2383 icons</span
        ><svg
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="text-gray-400 group-focus-within:text-gray-500 transition-colors duration-150"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path></svg></label
      ><input
        type="text"
        id="search-input"
        value=""
        placeholder="Search all 2383 icons (Press “/” to focus)"
        class="flex-auto py-6 text-base leading-6 focus:outline-none border-none text-gray-500 placeholder-gray-500 focus:placeholder-gray-400"
      />
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    search() {
      console.log("s");
    },
  },
};
</script>

<style>
</style>