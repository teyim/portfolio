import { useContext } from 'react';
import Link from 'next/link';
import { IoMenuOutline } from 'react-icons/io5';
import { useRouter } from 'next/router';
import { routes } from 'data/global';
import Modal from './modal';
import { NavbarContext } from 'helpers/context';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const navbarContext = useContext(NavbarContext);

  const router = useRouter();
  const { route: currentRoute } = router;

  const handleToggle = () => {
    navbarContext?.setIsNavbarOpen((prev) => !prev);
  };

  const handleMobileRoute = (route: string) => {
    router.push(route);
    handleToggle();
  };

  return (
    <div className={`py-8 px-10 md:px-40 z-100`}>
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
          <IoMenuOutline className="w-8 h-8" onClick={handleToggle} />
        </div>
        <Modal isModalOpen={navbarContext?.isNavbarOpen as boolean}>
          <ul className="bg-gray-800 w-screen  h-screen left-0  text-3xl text-gray-500 font-bold text-center p-10 top-0 right-0  overflow-hidden fixed">
            <AiOutlineClose
              className="w-6 top-3 absolute right-5 text-gray-500 z-100"
              onClick={handleToggle}
            />
            {routes.map((route) => (
              <li className="hover:gradient-text my-6" key={route.path}>
                <span onClick={() => handleMobileRoute(route.path)}>
                  {route.title}
                </span>
              </li>
            ))}
          </ul>
        </Modal>
      </div>
    </div>
  );
}

export default Navbar;
