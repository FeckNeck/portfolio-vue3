<script setup lang="ts">
import AboutMe from "./components/AboutMe.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppProjects from "./components/AppProjects.vue";
import AppTechnologies from "./components/AppTechnologies.vue";
import CoverSheet from "./components/CoverSheet.vue";
</script>

<template>
  <AppHeader />
  <main class="container">
    <CoverSheet />
    <AboutMe />
    <AppTechnologies />
    <AppProjects />
  </main>
  <AppFooter />
</template>

<style scoped></style>
