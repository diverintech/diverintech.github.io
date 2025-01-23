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
    description:
      'A set of 7 Python games focused on exploring the language and technical concepts like "random walk".',
    technologies: ['Python', 'Pandas'],
    repoPath: 'https://github.com/diverintech/python-projects',
  },
  {
    title: 'Super Mario Shop',
    description:
      'A Mario Kart game store built using React with useState for state management and custom handlers for user interactions.',
    technologies: ['React', 'JavaScript', 'HTML', 'SCSS'],
    repoPath: 'https://github.com/diverintech/react-super-mario-shop',
  },
];
