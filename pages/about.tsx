import PageStructure from 'HOC/pageStructure';
import Link from 'next/link';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
function About() {
  return (
    <PageStructure heading="About Me" width="md:w-3/5">
      <div className="leading-relaxed text-center md:text-left">
        <p className="my-5">
          Hi, I am TEYIM ASOBO. A frontend developer from cameroon, and a level
          4 student of the University of Bamenda in Combined Maths and Computer
          Science.
        </p>
        <p className="my-5">
          I leverage modern tools: frameworks and libraries, to create modern
          and intuitive web experiences. I strive to become a better developer
          by working on projects that interest me, reading code written by
          others , writting blog post and contributing to open source projects.
        </p>
        <p className="my-5">
          When am not doing school stuff or writting code, i love watching
          sports(football), playing video games or waching movies.
        </p>
      </div>
      <div className="my-5 text-center md:text-left">
        <h1 className="text-gray-400 text-3xl font-bold font-SG">
          Languages and Tools
        </h1>
        <p className="my-5">
          Here is a list of tools and languagues i have played around with:
        </p>
        <ul className="font-light list-disc px-6">
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Reactjs</li>
          <li>React Native</li>
          <li>Git/Github</li>
          <li>Nodejs</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>Nextjs</li>
        </ul>
      </div>
      <Link href="/projects">
        <button className=" flex text-center text-2xl font-semibold hover:gradient-text mx-auto mt-20">
          projects
          <HiOutlineArrowLongRight className="w-5 h-5 flex my-auto mx-2 mt-2" />
        </button>
      </Link>
    </PageStructure>
  );
}

export default About;
