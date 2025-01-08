import { Projects } from '../interfaces/portfolio.interface';

export const PROJECTS_EN: Projects[] = [
  {
    title: 'My Website',
    description:
      'An interactive online resume built with Angular. The website is hosted on GitHub Pages and features CI/CD workflows for automated deployments.',
    technologies: [
      'Angular',
      'TypeScript',
      'HTML',
      'SCSS',
      'GitHub Actions',
      'Prettier',
      'Eslint',
    ],
    repoPath: 'https://github.com/diverintech/diverintech.github.io',
  },
  {
    title: 'Weather App',
    description:
      'A dynamic weather application that fetches real-time weather data from the OpenWeatherMap API.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'GitHub Actions'],
    repoPath: 'https://github.com/diverintech/angular-weather-app',
  },
  {
    title: 'To-Do List',
    description:
      "A minimalist To-Do List application designed to explore Angular's signals for reactive state management.",
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
    repoPath: 'https://github.com/diverintech/angular-todo-list',
  },
  {
    title: 'Mini-Games',
    description:
      'A curated collection of small Python projects, including engaging mini-games and utility programs.',
    technologies: ['Python', 'Pandas'],
    repoPath: 'https://github.com/diverintech/python-projects',
  },
];
