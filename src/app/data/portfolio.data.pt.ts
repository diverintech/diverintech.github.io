import { Projects } from '../interfaces/portfolio.interface';

export const PROJECTS_PT: Projects[] = [
  {
    title: 'My Website',
    description:
      'Este repo mostra o que está por trás desta webpage. O site está hospedado no GitHub Pages e conta com workflows de CI/CD.',
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
      'Esta aplicação mostra dados metereológicos em tempo real graças à API OpenWeatherMap.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'GitHub Actions'],
    repoPath: 'https://github.com/diverintech/angular-weather-app',
  },
  {
    title: 'To-Do List',
    description:
      'Criei uma simples Lista de Tarefas de forma a explorar os signals do Angular para o gerenciamento reativo de estado.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
    repoPath: 'https://github.com/diverintech/angular-todo-list',
  },
  {
    title: 'Mini-Games',
    description:
      'Conjunto de 7 jogos desenvolvidos em Python, focados na exploração da linguagem e em conceitos técnicos como "random walk"',
    technologies: ['Python', 'Pandas'],
    repoPath: 'https://github.com/diverintech/python-projects',
  },
];
