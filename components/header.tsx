import { externalLinks } from 'data/global';
import Link from 'next/link';
import { AiOutlineEye } from 'react-icons/ai';

function Header() {
  return (
    <section className="p-5 md:py-10 md:px-6 flex-col inset-0 h-full w-full bg-dark bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px];">
      <div className="md:max-w-7xl md:w-3/5 md:mx-auto  md:p-2">
        <div className=" text-center gradient-text text-5xl font-bold">
          Howdy!!
        </div>
        <div className="text-4xl  text-center leading-normal my-10">
          I am{' '}
          <span className="gradient-text font-semibold font-SG">
            TEYIM ASOBO
          </span>
          , A Frontend developer who combines design flair with technical know-how for seamless user experiences. I excel in teamwork, turning visions into reality. Always learning, I stay updated with industry trends to drive innovation. With a proven track record, I'm ready to enhance your development team.
        </div>
        <div className="flex justify-evenly md:w-3/4 mx-auto text-2xl  p-2 my-10 flex-wrap">
          {externalLinks.map((links) => (
            <a
              key={links.name}
              href={links.link}
              className="hover:ring-2 hover:ring-gray-600 rounded-md py-1 px-2 hover:bg-gray-800"
            >
              {links.name}
            </a>
          ))}
        </div>
        <div className="">
          <h1>
            {' '}
            <AiOutlineEye className="w-10 h-10 mx-auto mt-10" />
            <button className=" flex text-center text-2xl font-semibold hover:gradient-text mx-auto">
              <Link href="/about">Explore</Link>
            </button>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Header;
