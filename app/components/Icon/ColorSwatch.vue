<template>
  <div class="relative" ref="root">
    <button
      class="block rounded-full border border-gray-300 dark:border-gray-700 shadow-lg"
      :style="{ width: '20px', height: '20px', backgroundColor: modelValue }"
      aria-label="Icon color"
      @click="open = !open"
    ></button>
    <div
      v-if="open"
      class="absolute bottom-7 right-0 z-[99] w-44 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 shadow-lg"
    >
      <div class="grid grid-cols-5 gap-2">
        <button
          v-for="swatch in swatches"
          :key="swatch"
          class="h-6 w-6 rounded-full border border-gray-200 dark:border-gray-600"
          :class="{ 'ring-2 ring-offset-1 ring-blue-500': swatch === modelValue }"
          :style="{ backgroundColor: swatch }"
          :aria-label="swatch"
          @click="pick(swatch)"
        ></button>
      </div>
      <label class="mt-3 flex items-center justify-between text-xs text-gray-500">
        Custom
        <input
          type="color"
          class="h-6 w-10 cursor-pointer bg-transparent"
          :value="toHex(modelValue)"
          @input="emit('update:modelValue', $event.target.value)"
        />
      </label>
    </div>
  </div>
</template>

<script setup>
defineProps({ modelValue: { type: String, required: true } });
const emit = defineEmits(["update:modelValue"]);

const swatches = [
  "#212121", "#ffffff", "#1FBC9C", "#1CA085", "#2ECC70",
  "#27AF60", "#3398DB", "#2980B9", "#A463BF", "#8E43AD",
  "#3D556E", "#222F3D", "#F2C511", "#F39C19", "#E84B3C",
];

const open = ref(false);
const root = ref(null);

function pick(color) {
  emit("update:modelValue", color);
  open.value = false;
}

function toHex(color) {
  if (/^#[0-9a-f]{6}$/i.test(color)) return color;
  if (/^#[0-9a-f]{3}$/i.test(color))
    return "#" + [...color.slice(1)].map((c) => c + c).join("");
  return "#000000";
}

function onClickOutside(e) {
  if (open.value && !root.value?.contains(e.target)) open.value = false;
}
onMounted(() => document.addEventListener("click", onClickOutside));
onBeforeUnmount(() => document.removeEventListener("click", onClickOutside));
</script>
