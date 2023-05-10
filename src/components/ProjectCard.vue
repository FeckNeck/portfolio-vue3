<script lang="ts" setup>
import { Project } from "../service/getProjects";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <a :href="project.link" target="_blank" class="project">
    <div class="project-name">
      <svg
        height="16"
        width="16"
        viewBox="0 0 16 16"
        data-view-component="true"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
        ></path>
      </svg>
      <p>{{ project.repo }}</p>
    </div>
    <p>{{ project.description }}</p>
    <div class="language">
      <span
        class="round"
        :style="{ backgroundColor: project.languageColor }"
      ></span>
      <p>{{ project.language }}</p>
    </div>
  </a>
</template>

<style scoped>
.project {
  background-color: var(--secondary);
  border-radius: 0.25rem;
  border: 2px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  padding: 0.5rem;
  transition: all 300ms ease;
}

.project:hover {
  box-shadow: var(--shadow);
  transform: translateY(-0.5rem);
}

.project-name {
  align-items: center;
  display: flex;
  flex-direction: row;
  font-family: "Nunito-Bold";
  gap: 0.5rem;
}

.language {
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.round {
  border-radius: 50%;
  height: 0.75rem;
  width: 0.75rem;
}
</style>
