import React from 'react';
import Card from './card';
import { projects } from 'data/projects';

function Cards() {
  return (
    <section className="md:max-w-7xl">
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </section>
  );
}

export default Cards;
