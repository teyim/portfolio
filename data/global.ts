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
    path: '/projects',
  },
  {
    title: 'Resume',
    path: 'https://drive.google.com/file/d/1--968nSqTFTjsRKbn-Hkcq8XHgeCWpE0/view?usp=sharing',
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
