import Image from 'next/image';
import React from 'react';
import { Project } from 'types';

function Card({ desc, img, tags, title, github, link }: Project) {
  return (
    <div className="ring-1 ring-gray-600 my-10 rounded-md shadow-sm p-4 md:w-[500px]  mx-auto flex flex-col justify-center">
      <Image
        src={img}
        alt={title}
        width={400}
        height={200}
        className="mx-auto"
      />
      <div className="my-2 p-4 text-center">
        <h1 className="text-gray-400 text-2xl font-bold font-SG">{title}</h1>
        <h2 className="text-lg">{desc}</h2>
        <div className="flex my-3 justify-center flex-wrap">
          {tags.map((tag) => (
            <h3 key={tag} className="text-gray-400 text-sm font-bold mx-3 ">
              {tag}
            </h3>
          ))}
        </div>
      </div>
      <div className="text-gray-400 text-md font-bold text-center">
        <a className="mx-3 cursor-pointer hover:underline" href={link}>
          Live
        </a>
        <a className="mx-3 cursor-pointer hover:underline" href={github}>
          Github
        </a>
      </div>
    </div>
  );
}

export default Card;
