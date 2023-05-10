export interface Project {
  repo: string;
  link: string;
  description: string;
  language: string;
  languageColor: string;
}

export async function getProjects(): Promise<Project[] | any> {
  const projects = await fetch(
    "https://gh-pinned-repos.egoist.dev/?username=FeckNeck"
  )
    .then((res) => res.json())
    .catch((err) => err);
  return projects;
}
