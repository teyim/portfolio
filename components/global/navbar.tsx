import { useState } from 'react';
import { routes } from 'data/global';
import Link from 'next/link';
import { IoMenuOutline } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';
import { useRouter } from 'next/router';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const router = useRouter();
  const { route: currentRoute } = router;

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <div className="py-8 px-10 md:px-40 z-100">
      <div className="flex justify-between">
        <Link href="/" passHref>
          <a className="font-lexend font-semibold text-2xl md:text-3xl gradient-text">
            TEYIM A.
          </a>
        </Link>

        <ul className="hidden w-3/5 md:flex justify-evenly my-auto text-xl text-gray-500 font-bold">
          {routes.map((route) => (
            <li
              key={route.title}
              className={`hover:gradient-text ${
                currentRoute === route.path ? 'gradient-text' : ''
              }`}
            >
              <Link href={route.path}>{route.title}</Link>
            </li>
          ))}
        </ul>

        <div className="xs:flex md:hidden">
          {navbarOpen ? (
            <MdClose className="w-8 h-8" onClick={handleToggle} />
          ) : (
            <IoMenuOutline className="w-8 h-8" onClick={handleToggle} />
          )}
        </div>
      </div>
      {navbarOpen && (
        <ul className="bg-gray-800 w-screen absolute h-screen left-0 mt-10 text-3xl text-gray-500 font-bold text-center p-10">
          {routes.map((route) => (
            <a key={route.path} href="#">
              <li className="hover:gradient-text my-6">{route.title}</li>
            </a>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
