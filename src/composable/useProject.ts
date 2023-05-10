import { ref } from "vue";
import { getProjects, Project } from "../service/getProjects";

export function useProjects() {
  const projects = ref<Project[] | null>(null);
  const isLoading = ref(false);
  const error = ref(null);

  async function fetchProjects(): Promise<void> {
    isLoading.value = true;
    error.value = null;

    try {
      projects.value = await getProjects();
    } catch (err: any) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  }

  return { projects, isLoading, error, fetchProjects };
}
