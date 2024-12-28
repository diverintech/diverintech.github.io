export interface EnvironmentModel {
  production: boolean;
  appName: string;
  environment: 'dev' | 'prod';
  urls: {
    linkedinUrl: string;
    githubUrl: string;
  };
}
