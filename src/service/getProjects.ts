export interface Project {
  repo: string;
  link: string;
  description: string;
  language: string;
  languageColor: string;
}

const getProjects = async (): Promise<Project[]> => {
  const projects = await fetch(
    "https://gh-pinned-repos.egoist.dev/?username=FeckNeck"
  ).then((res) => res.json());
  return projects;
};

export { getProjects };
