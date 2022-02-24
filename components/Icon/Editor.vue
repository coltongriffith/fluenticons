<template>
  <aside class="editor-sidebar">
    <div class="h-16 border-b dark:border-gray-700 flex-between px-4">
      <div class="text-sm font-medium">
        {{ icon ? icon.name.replace(/([A-Z])/g, " $1") : "Preview" }}
      </div>
      <button
        class="
          focus:outline-none
          p-2
          rounded-full
          focus:bg-gray-100
          hover:bg-gray-100
          dark:focus:bg-gray-700
          dark:hover:bg-gray-700
        "
        @click="favoriteToggle"
        aria-label="Favorite"
      >
        <FluentIconFilledHeart
          class="text-gray-500 h-5 w-5"
          v-if="isAFavorite"
        />
        <FluentIconOutlinedHeart class="text-gray-500 h-5 w-5" v-else />
      </button>
    </div>
    <div class="h-64">
      <div class="icon-editor-panel dots-pattern-background relative">
        <component
          :is="icon.componentName"
          class="h-32 w-32"
          :style="{ color }"
          ref="icon"
        />
        <div class="absolute bottom-2 right-2">
          <v-swatches
            v-model="color"
            show-fallback
            fallback-input-type="color"
            popover-x="left"
            :trigger-style="{ width: '20px', height: '20px' }"
            @input="colorHasChanged = true"
          ></v-swatches>
        </div>
      </div>
    </div>
    <ul
      class="
        divide-y
        border-t border-b border-gray-300
        dark:border-gray-700
        divide-gray-300
        dark:divide-gray-700
        text-xs
        mt-4
      "
    >
      <li>
        <div class="grid grid-cols-2">
          <select
            class="
              form-select
              border-0
              focus:outline-none
              text-xs
              bg-transparent
            "
            v-model="selectedCopyType"
          >
            <option v-for="(type, i) in copyTypes" :value="type.value" :key="i">
              {{ type.name }}
            </option>
          </select>
          <button
            class="
              flex-between
              px-4
              py-2
              bg-gray-100
              dark:bg-[#070d19]
              border-l border-gray-300
              dark:border-gray-700
            "
            @click="copy()"
          >
            <p>Copy</p>
            <FluentIconOutlinedCopy class="text-gray-500 h-4 w-4" />
          </button>
        </div>
      </li>
      <li>
        <div class="grid grid-cols-2">
          <select
            class="
              form-select
              border-0
              focus:outline-none
              text-xs
              bg-transparent
            "
            v-model="selectedExportType"
          >
            <option
              v-for="(type, i) in exportTypes"
              :value="type.value"
              :key="i"
            >
              {{ type.name }}
            </option>
          </select>
          <button
            class="
              flex-between
              px-4
              py-2
              bg-gray-100
              dark:bg-[#070d19]
              border-l border-gray-300
              dark:border-gray-700
            "
            @click="exportIcon"
          >
            <p>Download</p>
            <FluentIconOutlinedArrowDownload class="text-gray-500 h-4 w-4" />
          </button>
        </div>
      </li>
      <li>
        <button
          class="flex-between px-4 py-2 w-full"
          @click="showAdvancedEditor = !showAdvancedEditor"
        >
          <div class="flex-space-x-2">
            <FluentIconOutlinedSettings class="text-gray-500 h-4 w-4" />
            <p>Advanced Editor</p>
          </div>
          <FluentIconOutlinedChevronDown
            class="text-gray-500 h-4 w-4 transform transition-transform"
            :class="{ '-rotate-90': showAdvancedEditor }"
          />
        </button>
        <base-accordian>
          <base-advanced-editor v-if="showAdvancedEditor" />
        </base-accordian>
      </li>
    </ul>
    <div class="p-4 text-center ">
      <a
        href="https://www.buymeacoffee.com/fayazahmed"
        target="_blank"
        rel="noopener"
      >
        <IconThumbsUp class="h-12 w-12 mx-auto" />
        <p class="font-semibold">Donate &amp; Support</p>
        <p class="text-gray-500 text-xs mt-1">Help keep this project alive.</p>
      </a>
    </div>
  </aside>
</template>

<script>
import { getIconSnippet, svgToImage } from "../../utils/icon";
import FileSaver from "file-saver";
export default {
  props: {
    icon: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      color: "#212121",
      colorHasChanged: false,
      copyTypes: [
        {
          name: "SVG",
          value: "svg"
        },
        {
          name: "HTML Image",
          value: "html"
        },
        {
          name: "Vue Component",
          value: "vue"
        },
        {
          name: "React Component",
          value: "react"
        }
      ],
      exportTypes: [
        {
          name: "PNG",
          value: "png"
        },
        {
          name: "SVG",
          value: "svg"
        },
        {
          name: "WEBP",
          value: "webp"
        },
        {
          name: "Vue Component",
          value: "vue"
        },
        {
          name: "React Component",
          value: "react"
        }
      ],
      selectedCopyType: "svg",
      selectedExportType: "png",
      showAdvancedEditor: false
    };
  },
  watch: {
    "$colorMode.preference": {
      immediate: true,
      handler(val) {
        if (!this.colorHasChanged) {
          if (val === "dark") this.color = "#fff";
          else this.color = "#212121";
        }
      }
    }
  },
  methods: {
    favoriteToggle() {
      if (this.isAFavorite) {
        this.$store.commit("unFavoriteIcon", this.icon);
        this.showToast("Removed from favorites");
      } else {
        this.$store.commit("favoriteIcon", this.icon);
        this.showToast("Added to favorites");
      }
    },
    async copy() {
      try {
        let snippet = await getIconSnippet(
          this.selectedCopyType,
          this.icon.svgFileName,
          this.color
        );
        this.showToast(`Copied ${this.selectedCopyType} snippet`);
        await this.$copyText(snippet);
      } catch (err) {
        this.$toast.error(err.message);
      }
    },
    showToast(message) {
      this.$toast.show(`
            <div class="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="h-5 w-5 flex-shrink-0 text-green-500"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <g fill="none">
                  <path
                    d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2zm2.12 4.164L7.25 9.042L5.854 7.646a.5.5 0 1 0-.708.708l1.75 1.75a.5.5 0 0 0 .708 0l3.224-3.234a.5.5 0 0 0-.708-.706z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <p class="flex-1">${message}</p>
            </div>
        `);
    },
    async convertToImage(type) {
      let imageDefaults = {
        svg: this.$refs.icon.$el,
        mimetype: `image/${type}`,
        width: 512,
        height: 512,
        quality: 1,
        outputFormat: "base64"
      };
      let image = await svgToImage(imageDefaults);
      return image;
    },
    async exportIcon() {
      if (!this.selectedExportType) return;
      switch (this.selectedExportType) {
        case "svg":
          this.downloadImage(
            `/icons/${this.icon.svgFileName}`,
            this.icon.svgFileName
          );
          break;
        case "png":
          this.downloadImage(
            await this.convertToImage("png"),
            `${this.icon.svgFileName.replace(".svg", "")}.png`
          );
          break;
        case "webp":
          this.downloadImage(
            await this.convertToImage("webp"),
            `${this.icon.svgFileName.replace(".svg", "")}.webp`
          );
          break;
        case "vue":
          this.downloadComponent("vue");
          break;
        case "react":
          this.downloadComponent("react");
          break;
      }
    },
    downloadImage(url, filename) {
      let link = document.createElement("a");
      link.style.opacity = "0";
      link.download = filename;
      link.href = url;
      link.click();
      link.remove();
    },
    async downloadComponent() {
      let snippet = await getIconSnippet(
        this.selectedExportType,
        this.icon.svgFileName,
        this.color
      );
      let blob = new Blob([snippet], {
        type: "text/plain;charset=utf-8"
      });
      FileSaver.saveAs(
        blob,
        `${this.icon.svgFileName.replace(".svg", "")}.${
          this.selectedExportType === "vue" ? "vue" : "js"
        }`
      );
    }
  },
  computed: {
    isAFavorite() {
      return this.$store.getters.isAFavorite(this.icon.componentName);
    },
    colorPreference() {
      return this.$colorMode.preference;
    }
  }
};
</script>
