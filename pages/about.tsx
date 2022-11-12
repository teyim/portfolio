import Link from 'next/link';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
function About() {
  return (
    <div className="p-5 text-xl text-gray-500">
      <div className="md:w-3/5 max-w-7xl flex-col mx-auto p-4 md:p-10">
        <div className="text-gray-400 text-5xl font-bold">About Me</div>
        <div className=" font-lexend leading-relaxed">
          <p className="my-5">
            Hi, I am TEYIM ASOBO. A frontend developer from cameroon, and a
            level 4 student of the University of Bamenda in Combined Maths and
            Computer Science.
          </p>
          <p className="my-5">
            I leverage modern tools: frameworks and libraries, to create modern
            and intuitive web experiences. I strive to become a better developer
            by working on projects that interest me, reading code written by
            others , writting blog post and contributing to open source
            projects.
          </p>
          <p className="my-5">
            When am not doing school stuff or writting code, i love watching
            sports(football), playing video games or waching movies.
          </p>
        </div>
        <Link href="/projects">
          <button className=" flex text-center text-2xl font-semibold hover:gradient-text mx-auto mt-20">
            projects
            <HiOutlineArrowLongRight className="w-5 h-5 flex my-auto mx-2" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
