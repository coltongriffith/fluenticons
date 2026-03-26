<template>
  <main class="flex">
    <section class="flex-grow">
      <base-hero />
      <base-navbar />
      <NuxtPage />
    </section>
    <IconEditor @login="showModal = 'login'" />
    <modal v-show="showModal === 'login'" @close="showModal = ''">
      <Login @signup="showModal = 'register'" @close="showModal = ''" />
    </modal>
    <modal v-show="showModal === 'register'" @close="showModal = ''">
      <Register @login="showModal = 'login'" />
    </modal>
  </main>
</template>

<script setup>
const showModal = ref('')
</script>
