import { appData } from './appData';

export const getProjectById = (id: string | undefined) => {
  if (!id) return undefined;
  return appData.sectionProject.find(project => project.id === id);
}