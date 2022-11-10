type Route = {
  title: string;
  path: string;
};

type externalLink = {
  name: string;
  link: string;
};

export const routes: Route[] = [
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Projects',
    path: '/project',
  },
  {
    title: 'Resume',
    path: '/resume',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export const externalLinks: externalLink[] = [
  {
    name: 'Github',
    link: 'https://github.com/teyim',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/teyimasobo/',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/asofex',
  },
  {
    name: 'Blog',
    link: 'https://dev.to/teyim',
  },
];
