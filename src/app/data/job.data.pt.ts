import { Job } from "../interfaces/job.interface";

export const JOBS_PT: Job[] = [
    {
        company: 'Everis',
        newName: 'Ntt Data',
        logo: 'assets/images_logos/logo_nttdata.jpeg',
        website: 'https://pt.nttdata.com/',
        roles: [
            {
                title: 'Frontend Developer',
                startDate: 'Set 2019',
                endDate: 'Agt 2020',
                technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML'],
                description: 'Transitei da área de RPA para Frontend, onde dei os meus primeiros passos com HTML e SCSS num projeto de Salesforce para a De Beers. Posteriormente, tive o meu primeiro contacto com Angular ao integrar a equipa de desenvolvimento num projeto para a EDP. Este percurso permitiu-me adquirir conhecimentos fundamentais em tecnologias de frontend e expandir a minha experiência no desenvolvimento de interfaces de utilizador.',
            },
            {
                title: 'RPA Developer',
                startDate: 'Set 2018',
                endDate: 'Set 2019',
                technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML'],
                description: 'Desempenhei funções como desenvolvedor RPA, utilizando tecnologias como UiPath, SQL e Excel. Trabalhei em projetos para clientes como a EDP, Hiscox e BPI, onde era responsável por realizar o levantamento e análise de processos operacionais a serem automatizados. Posteriormente, definia um plano de implementação com foco na optimização e eficiência dos processos. Após a aprovação do plano, desenvolvia as soluções de automação com recurso ao UiPath, garantindo que os requisitos dos clientes eram atendidos. Por fim, os programas automatizados geravam e enviavam relatórios ou informações tratadas via e-mail para os respetivos clientes.',
            },
        ],
    },
    {
        company: 'TechFirm',
        newName: 'Bubble Goo',
        logo: 'assets/images_logos/logo_bubbleGoo.jpeg',
        website: 'https://bubble-go.pt/',
        roles: [
            {
                title: 'Frontend Developer',
                startDate: 'Out 2020',
                endDate: 'Mar 2022',
                technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML', 'Cypress', 'Spring'],
                description: 'Trabalhei para a empresa suíça Interiware, num projeto focado no desenvolvimento de uma aplicação de gestão de recursos humanos. O meu principal foco foi o trabalho no frontend, utilizando Angular, mas também tive a oportunidade de colaborar no backend, nomeadamente no desenvolvimento com Spring, sempre que foi necessário.',
            },
        ],
    },
    {
        company: 'Diconium',
        logo: 'assets/images_logos/logo_diconium.jpeg',
        website: 'https://diconium.com/en/',
        roles: [
            {
                title: 'Software Engineer',
                startDate: 'Mai 2022',
                endDate: null,
                technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML', 'Codecept', 'AWS', 'GitHub', 'New Relic'],
                description: 'Trabalhei na Connect Store da Porsche, onde fui responsável pelo redesign da página utilizando Angular. Além disso, gerenciei configurações no AWS, realizei a migração de repositórios entre organizações, criei traduções na aplicação Phrase e realizei testes E2E utilizando o CodeceptJS.',
            },
        ],
    },
];
