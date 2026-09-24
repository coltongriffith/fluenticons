<template>
  <div class="min-h-screen flex flex-col">
    <SiteHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
