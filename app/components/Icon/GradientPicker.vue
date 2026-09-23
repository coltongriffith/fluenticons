<template>
  <div
    class="w-64 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-xs space-y-3"
  >
    <div class="grid grid-cols-2 gap-2">
      <button
        v-for="type in ['linear', 'radial']"
        :key="type"
        class="rounded-md border dark:border-gray-700 px-2 py-1 capitalize"
        :class="{ 'bg-gray-100 dark:bg-gray-700 font-semibold': modelValue.type === type }"
        @click="update({ type })"
      >
        {{ type }}
      </button>
    </div>
    <div
      class="h-6 rounded-md border dark:border-gray-700"
      :style="{ background: preview }"
    ></div>
    <label class="flex items-center justify-between">
      Start
      <input
        type="color"
        class="h-6 w-10 cursor-pointer bg-transparent"
        :value="modelValue.start"
        @input="update({ start: $event.target.value })"
      />
    </label>
    <label class="flex items-center justify-between">
      End
      <input
        type="color"
        class="h-6 w-10 cursor-pointer bg-transparent"
        :value="modelValue.end"
        @input="update({ end: $event.target.value })"
      />
    </label>
    <label v-if="modelValue.type === 'linear'" class="block">
      <span class="flex justify-between"
        >Angle <span>{{ modelValue.angle }}°</span></span
      >
      <input
        type="range"
        min="0"
        max="360"
        class="w-full"
        :value="modelValue.angle"
        @input="update({ angle: Number($event.target.value) })"
      />
    </label>
  </div>
</template>

<script setup>
const props = defineProps({ modelValue: { type: Object, required: true } });
const emit = defineEmits(["update:modelValue"]);

const preview = computed(() => {
  const { type, angle, start, end } = props.modelValue;
  return type === "linear"
    ? `linear-gradient(${angle + 90}deg, ${start}, ${end})`
    : `radial-gradient(${start}, ${end})`;
});

function update(patch) {
  emit("update:modelValue", { ...props.modelValue, ...patch });
}
</script>
