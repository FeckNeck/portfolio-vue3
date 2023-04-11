<script setup lang="ts">
import AboutMe from "./components/AboutMe.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import ProjectList from "./components/ProjectList.vue";
import CoverSheet from "./components/CoverSheet.vue";
import TechnoList from "./components/TechnoList.vue";
</script>

<template>
  <AppHeader />
  <main class="container">
    <CoverSheet />
    <AboutMe />
    <TechnoList />
    <ProjectList />
  </main>
  <AppFooter />
</template>

<style scoped></style>
