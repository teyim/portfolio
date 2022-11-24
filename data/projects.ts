import { Project } from 'types';

export const projects: Project[] = [
  {
    id: 0,
    title: 'Markdown Blog',
    desc: 'A simple, yet fast markdown blog',
    img: '/static/projects/markdown-blog.png',
    link: 'https://markdown-blog-teyim.vercel.app/',
    github: 'https://github.com/teyim/Nextjs-markdown-blog',
    tags: ['Nextjs', 'Tailwind', 'MDX', 'MongoDB'],
  },
  {
    id: 1,
    title: 'Infolio',
    desc: 'A collection of well designed developer portfolios, to get inspiration from',
    img: '/static/projects/infolio.png',
    link: 'https://infolio.vercel.app/',
    github: 'https://github.com/teyim/Infolio',
    tags: ['Nextjs', 'Tailwind', 'Typescript', 'Sanity'],
  },
  {
    id: 2,
    title: 'Cultured kid',
    desc: 'Platform to buy and sell arts works',
    img: '/static/projects/culturedkid.png',
    link: 'https://cultured-kid.vercel.app/',
    github: 'https://github.com/teyim/Arts-store',
    tags: ['Nextjs', 'Tailwind', 'Firebase', 'Zustand'],
  },
  {
    id: 3,
    title: 'Walle',
    desc: 'A dynamic Readme image that changes based on github activity',
    img: '/static/projects/walle.png',
    github: 'https://github.com/teyim/Walle',
    tags: ['Nodejs', 'Github actions', 'Vercel-og'],
  },
  {
    id: 4,
    title: 'Jadoo',
    desc: 'Frontend for a Bus ticket booking platform to reduce wait time at travelling agencies',
    img: '/static/projects/jadoo.png',
    link: 'https://teyim.github.io/Jadoo/',
    github: 'https://github.com/teyim/Jadoo',
    tags: ['React', 'Redux', 'Tailwind', 'Firebase'],
  },
];
