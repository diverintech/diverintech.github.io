import { Projects } from '../interfaces/portfolio.interface';

export const PROJECTS_EN: Projects[] = [
  {
    title: 'My Website',
    description:
      'This repository showcases what’s behind this webpage. The site is hosted on GitHub Pages and features CI/CD workflows.',
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
      'This application displays real-time weather data using the OpenWeatherMap API.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'GitHub Actions'],
    repoPath: 'https://github.com/diverintech/angular-weather-app',
  },
  {
    title: 'To-Do List',
    description:
      'I created a simple To-Do List to explore Angular signals for reactive state management.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
    repoPath: 'https://github.com/diverintech/angular-todo-list',
  },
  {
    title: 'Mini-Games',
    description: 'A collection of small Python games ready to be played.',
    technologies: ['Python', 'Pandas'],
    repoPath: 'https://github.com/diverintech/python-projects',
  },
];
