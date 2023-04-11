<script lang="ts" setup>
import { onMounted, ref } from "vue";

const theme = ref("");

onMounted(() => {
  theme.value = getInitialColorMode();
  document.documentElement.setAttribute("data-color-mode", theme.value);
});

const getInitialColorMode = () => {
  const colorPreference = localStorage.getItem("theme");
  if (colorPreference) {
    return colorPreference;
  }
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }
  return "light";
};

const nextTheme = () => {
  return theme.value === "dark" ? "light" : "dark";
};

const switchTheme = () => {
  theme.value = nextTheme();
  document.documentElement.setAttribute("data-color-mode", theme.value);
  localStorage.setItem("theme", theme.value);
};
</script>

<template>
  <button
    @click="switchTheme"
    class="theme-switcher"
    :title="'Activate ' + nextTheme() + ' theme'"
    :aria-label="'Activate ' + nextTheme() + ' theme'"
  >
    <svg
      v-if="theme === 'dark'"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="moon"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
    <svg
      v-else
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="sun"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    </svg>
  </button>
</template>

<style scoped>
.theme-switcher {
  transition: opacity 250ms ease;
  opacity: 0.7;
}

.theme-switcher:hover {
  opacity: 1;
}
</style>
