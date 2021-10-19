<template>
  <div class="text-gray-500">
    <p class="text-sm text-center mb-2">
      <a
        class="underline"
        href="https://twitter.com/messages/compose?text=I%27d+like+a+sponsor+spot+on+fluenticons+website&recipient_id=252099921
"
        >Showcase your brand here</a
      >
    </p>
    <div
      class="flex items-center justify-center flex-wrap -mx-3 overflow-hidden"
    >
      <div class="my-3 px-3 w-1/3 overflow-hidden" v-for="n in 5" :key="n">
        <div class="h-16 rounded-lg bg-gray-100 dark:bg-gray-800"></div>
      </div>
    </div>
  </div>
</template>