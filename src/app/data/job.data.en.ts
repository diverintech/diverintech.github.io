import { Job } from '../interfaces/job.interface';

export const JOBS_EN: Job[] = [
  {
    company: 'Everis',
    newName: 'Ntt Data',
    logo: 'assets/images_logos/logo_nttdata.jpeg',
    website: 'https://pt.nttdata.com/',
    roles: [
      {
        title: 'Frontend Developer',
        startDate: 'Sep 2019',
        endDate: 'Aug 2020',
        technologies: ['Angular', 'TypeScript', 'SCSS', 'HTML'],
        description:
          'I transitioned from RPA to Frontend, where I took my first steps with HTML and SCSS in a Salesforce project for De Beers. Later, I gained my initial experience with Angular while working on a development project for EDP. This journey allowed me to acquire fundamental frontend skills and expand my expertise in user interface development.',
      },
      {
        title: 'RPA Developer',
        startDate: 'Sep 2018',
        endDate: 'Sep 2019',
        technologies: ['Uipath', 'SQL', 'Excel'],
        description:
          'I worked as an RPA developer using technologies such as UiPath, SQL, and Excel. I contributed to projects for clients like EDP, Hiscox, and BPI, where I was responsible for analyzing and documenting operational processes for automation. I then defined an implementation plan focusing on optimizing and streamlining workflows. After the plan was approved, I developed automated solutions using UiPath, ensuring the clients requirements were met.Finally, the automated programs generated and sent processed reports or information via email to the respective clients.',
      },
    ],
  },
  {
    company: 'Tech Firm',
    newName: 'Bubble Goo',
    logo: 'assets/images_logos/logo_bubbleGoo.jpeg',
    website: 'https://bubble-go.pt/',
    roles: [
      {
        title: 'Frontend Developer',
        startDate: 'Oct 2020',
        endDate: 'Mar 2022',
        technologies: [
          'Angular',
          'TypeScript',
          'SCSS',
          'HTML',
          'Cypress',
          'Spring',
        ],
        description:
          'I worked for the Swiss company Interiware on a project focused on developing a human resources management application. My main focus was on the frontend, using Angular, but I also had the opportunity to contribute to the backend, particularly with Spring, whenever needed.',
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
        startDate: 'May 2022',
        endDate: null,
        technologies: [
          'Angular',
          'TypeScript',
          'SCSS',
          'HTML',
          'Codecept',
          'AWS',
          'GitHub',
          'New Relic',
        ],
        description:
          "I worked at Porsche's Connect Store, where I was responsible for redesigning the page using Angular. Additionally, I managed configurations in AWS, migrated repositories between organizations, created translations in the Phrase app, and performed E2E tests using CodeceptJS.",
      },
    ],
  },
];
