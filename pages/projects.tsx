import Cards from '@components/ui/cards/cards';
import PageStructure from 'HOC/pageStructure';
import { NextSeo } from 'next-seo';

function Projects() {
  return (
    <>
      <NextSeo title="About Me" />
      <PageStructure heading="Projects" width="md:w-3/5">
        <div>
          <Cards />
        </div>
      </PageStructure>
    </>
  );
}

export default Projects;
