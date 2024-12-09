// src/app/pages/work/job.data.ts

import { Job } from "../interfaces/job.interface";


export const JOBS_PT: Job[] = [
    {
        company: 'Everis (Ntt Data)',
        roles: [
            {
                title: 'Frontend Developer',
                startDate: 'Sep 2019',
                endDate: 'Dec 2019',
                technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML'],
            },
            {
                title: 'RPA Developer',
                startDate: 'Sep 2019',
                endDate: 'Dec 2019',
                technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML'],
            },
        ],
    },
    {
        company: 'TechFirm (Bubble-go)',
        roles: [
            {
                title: 'Frontend Developer',
                startDate: 'Oct 2020',
                endDate: 'Mar 2022',
                technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML', 'Cypress', 'Spring'],
            },
        ],
    },
    {
        company: 'Diconium',
        roles: [
            {
                title: 'Software Engineer',
                startDate: 'May 2022',
                endDate: null,
                technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML', 'Codecept', 'AWS', 'GitHub', 'New Relic'],
            },
        ],
    },
];
