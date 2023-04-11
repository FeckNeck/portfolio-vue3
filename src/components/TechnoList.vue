<script setup lang="ts">
import technologies from "../data/technologies";
</script>
<template>
  <section class="content">
    <p class="title">Technologies que j'utilise</p>
    <div class="technologies">
      <svg
        class="technology"
        v-for="technology in technologies"
        :key="technology.name"
        :viewBox="technology.viewBox"
        width="64"
        height="64"
      >
        <title>{{ technology.name }}</title>
        <path :d="technology.svg" fill="currentColor" />
      </svg>
    </div>
  </section>
</template>
<style scoped>
.technologies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.technology {
  color: var(--footer);
  transition: color 300ms ease;
}

.technology:hover {
  color: var(--teal);
}
</style>
