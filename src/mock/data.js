import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Md Aquib Yazdani | ReactJS dev', // e.g: 'Name | Developer'
  lang: 'en,hin', // e.g: en, es, fr, jp
  description: 'This is my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpeg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/aquibyazdani', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'More than Basic To Do App',
    info: 'ReactJS, CSS opens a new world for a developer. This application represents the power of hooks i.e new definition of the world of ReactJS',
    info2: '',
    url: 'https://todo-lovat-one.vercel.app/',
    repo: 'https://github.com/aquibyazdani/todoapp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Power of HTML5, CSS3 & Bootstrap',
    info: 'A web template with power of HTML5, CSS3 and Bootstrap is a responsive design that can be used to build your own website. Users visiting the website from desktop browsers can view the Web template with a full-fledged view. where mobile and tablet users may see the optimized version of the actual web template.',
    info2: '',
    url: '',
    repo: 'https://github.com/aquibyazdani/html-css-bootstrap', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
