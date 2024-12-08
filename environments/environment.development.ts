import { Environment } from "./environment.interface";

const backendDomain = "https://www.aldrune.com";

export const environment: Environment = {
  kind: "DEVELOPMENT",
  backendDomain: backendDomain,
  apiUrl: `${backendDomain}/wiki1/api`,
  defaultTitle: "StoryFont",
  frontendPrefix: 'wiki2',
};
