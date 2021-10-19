<template>
  <div class="container mx-auto p-8">
    <div class="grid grid-cols-6 gap-6">
      <lazy-icon-card
        v-for="(icon, i) in filteredIcons.slice(0, elementsToShow)"
        :key="i"
        :icon="icon"
        @setIcon="setIcon(icon)"
        :selected="icon.name === selectedIcon.name ? true : false"
      />
    </div>
    <div class="my-8">
      <div class="space-y-6" v-if="!filteredIcons.length">
        <svg
          width="64"
          height="41"
          viewBox="0 0 64 41"
          class="mx-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(0 1)" fill="none" fillRule="evenodd">
            <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse>
            <g fillRule="nonzero" stroke="#D9D9D9">
              <path
                d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
              ></path>
              <path
                d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                fill="#FAFAFA"
              ></path>
            </g>
          </g>
        </svg>
        <p class="text-gray-500 text-sm text-center">
          No Icons Found for
          <span class="font-semibold">{{ searchQuery }}</span>
        </p>
      </div>
      <button
        class="
          block
          border
          dark:border-gray-700
          rounded-lg
          mx-auto
          px-6
          py-3
          hover:bg-gray-100
          dark:hover:bg-gray-700
          text-sm
        "
        @click="showMore"
        v-if="filteredIcons.length > elementsToShow"
      >
        Show More Icons
      </button>
    </div>
  </div>
</template>

<script>
import icons from "~/assets/icons/outlined.json";
export default {
  props: {
    selectedIcon: {
      type: Object,
    },
    searchQuery: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      icons,
      elementsToShow: 48,
    };
  },
  computed: {
    filteredIcons() {
      return this.icons.filter((icon) => {
        return icon.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase().replace(" ", ""));
      });
    },
  },
  methods: {
    setIcon(payload) {
      this.$emit("setIcon", payload);
    },
    showMore() {
      this.elementsToShow += 48;
    },
  },
};
</script>
