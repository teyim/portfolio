import Cards from '@components/ui/cards/cards';
import PageStructure from 'HOC/pageStructure';

function Projects() {
  return (
    <PageStructure heading="Projects" width="md:w-3/5">
      <div>
        <Cards />
      </div>
    </PageStructure>
  );
}

export default Projects;
