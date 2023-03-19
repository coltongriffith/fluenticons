<template>
  <div>
    <div class="flex">
      <section class="flex-grow">
        <base-hero />
        <base-navbar v-model="searchQuery" @setType="setType" />
        <nuxt-child
          @setIcon="setIcon"
          :type="type"
          :searchQuery="searchQuery"
          :selectedIcon="selectedIcon"
        />
      </section>
      <IconEditor :icon="selectedIcon" @login="showModal = 'login'" :iconType="type" />
      <modal v-show="showModal == 'login'" @close="showModal = ''">
        <Login @signup="showModal = 'register'" @close="showModal = ''" />
      </modal>
      <modal v-show="showModal == 'register'" @close="showModal = ''">
        <Register @login="showModal = 'login'" />
      </modal>
    </div>
  </div>
</template>

<script>
import Modal from "~/components/Modal";
import Login from "~/components/Auth/Login";
import Register from "~/components/Auth/Register";
import Header from "~/components/Header";

export default {
  components: {
    Modal,
    Login,
    Register,
    Header
  },
  data() {
    return {
      showModal: "",
      searchQuery: "",
      type: "fluent",
      elementsToShow: 48,
      selectedIcon: {
        name: "Select and preview icons here",
        componentName: "FluentIconFilledAccessTime",
        svgFileName: "ic_fluent_access_time_24_filled.svg",
      },
    };
  },
  // mounted() {
  //   this.$auth.logout()
  // },
  methods: {
    setIcon(payload) {
      this.selectedIcon = payload;
    },
    setType(payload) {
      this.type = payload;
    },
  },
};
</script>