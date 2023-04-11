<script lang="ts" setup>
import { onMounted } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { useProjects } from "../composable/useProject";
import CardLoader from "./CardLoader.vue";

const { projects, isLoading, error, fetchProjects } = useProjects();

onMounted(() => fetchProjects());
</script>

<template>
  <section class="content" id="projects">
    <p class="title">Mes projets personnels</p>
    <div class="projects" v-if="isLoading">
      <CardLoader v-for="n in 4" />
    </div>
    <div class="projects" v-else-if="projects">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </section>
</template>

<style>
.projects {
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-columns: calc((100% - 1rem) / 2);
  overflow-x: auto;
  padding-block: 1rem;
}

@media (max-width: 768px) {
  .projects {
    grid-auto-columns: calc((100% - 1rem) / 1);
  }
}
</style>
