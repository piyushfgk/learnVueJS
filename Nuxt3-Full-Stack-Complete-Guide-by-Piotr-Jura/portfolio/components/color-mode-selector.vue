<template>
  <div>
    <div class="flex space-x-2 items-center">
      <div class="text-gray-500 text-xs" v-if="showNextmodeLabel">
        Change to {{ nextMode }}
      </div>
      <button
        @click="toggleMode"
        @mouseenter="showNextmodeLabel = true"
        @mouseleave="showNextmodeLabel = false"
        class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-4xl md:text-base"
      >
        {{ nextModeIcon }}
      </button>
    </div>
  </div>
</template>

<script setup>
const showNextmodeLabel = ref(false);
const colorMode = useColorMode();

const modes = ["system", "light", "dark"];

const nextModeIcons = {
  system: "🌓",
  light: "🌕",
  dark: "🌑",
};

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  let nextModeIndex =
    currentModeIndex + 1 === modes.length ? 0 : currentModeIndex + 1;

  return modes[nextModeIndex];
});

const nextModeIcon = computed(() => nextModeIcons[nextMode.value]);

const toggleMode = () => (colorMode.preference = nextMode.value);
</script>
