<template>
  <header class="py-[71.5px] px-8 relative">
    <div
      class="absolute inset-0 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] index_beams bg-[url('/gradient-bg-white.jpg')] dark:bg-[url('/gradient-bg-dark.jpg')]"
    ></div>
    <div
      class="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom bg-squares-dark dark-webkit-mask"
    ></div>
    <div>
      <div class="container mx-auto slate-gray-800 dark:text-white">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div>
            <h1 class="text-5xl font-bold mb-6">Fluent Icons</h1>
            <p class="text-lg mb-2">
              Open source icons by Microsoft. Viewer by
              <a
                href="https://twitter.com/coltongriffith"
                target="_blank"
                rel="noopener"
                class="underline"
                >Colton Griffith</a
              >
            </p>
            <p class="text-xs mb-8">
              NOT AFFILIATED WITH MICROSOFT, IN ANY WAY
            </p>
            <div class="flex-space-x-4">
              <a
                href="https://github.com/coltongriffith/fluenticons"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md bg-gradient-to-b from-white dark:from-slate-700 to-gray-200 dark:to-slate-900 transition ease-in-out duration-150 ring-1 ring-gray-900/10 dark:ring-gray-200/20 relative border-transparent text-gray-700 dark:text-slate-100"
              >
                <svg width="24" height="24" fill="currentColor" class="mr-3">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                  ></path>
                </svg>
                <p>Star us on Github</p></a
              >
            </div>
          </div>
          <base-hero-sponsors />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.index_beams {
  background-size: 150rem;
}
.dark-webkit-mask {
  mask-image: linear-gradient(to bottom, transparent, black);
}
</style>
