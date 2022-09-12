<template>
  <div class="text-gray-500">
    <p class="text-sm text-center mb-2">
      <a
        class="underline"
        href="https://twitter.com/messages/compose?text=I%27d+like+a+sponsor+spot+on+fluenticons+website&recipient_id=252099921"
        >Showcase your brand here</a
      >
    </p>
    <div
      class="flex items-center justify-center flex-wrap -mx-3 overflow-hidden"
    >
      <div class="my-3 px-3 w-1/3 overflow-hidden" v-for="n in 1" :key="n">
        <a
          class="underline"
          target="_blank"
          href="https://twitter.com/messages/compose?text=I%27d+like+a+sponsor+spot+on+fluenticons+website&recipient_id=252099921"
        >
          <div
            class="rounded-lg h-16 overflow-hidden border border-gray-200 dark:border-gray-700 border-opacity-50 bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-10 backdrop-filter backdrop-blur shadow-sm m-1 flex-center"
          >
            <component
              :is="`sponsor-place-holder-${n}`"
              class="text-gray-400 dark:text-gray-500 h-7 w-auto"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
