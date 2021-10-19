<template>
  <div class="space-y-6">
    <div class="h-24 w-24 bg-contain bg-center mx-auto flex-center">
      <FluentIconOutlinedBalloon class="text-blue-500 h-10 w-10 mx-auto" />
    </div>
    <p class="text-gray-500 text-sm text-center">
      No Icons Found for
      <span class="font-semibold">{{ searchQuery }}</span
      >, try something else.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    searchQuery: {
      type: String,
      default: "your search query",
    },
  },
};
</script>