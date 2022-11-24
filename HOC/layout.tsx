import Navbar from '@components/global/navbar';
import { NavbarContext, NavbarContextInterface } from 'helpers/context';
import { useState } from 'react';

type LayoutProps = {
  children: React.ReactNode;
};
function Layout({ children }: LayoutProps) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const NavbarContextValues: NavbarContextInterface = {
    isNavbarOpen: isNavbarOpen,
    setIsNavbarOpen: setIsNavbarOpen,
  };
  return (
    <NavbarContext.Provider value={NavbarContextValues}>
      <section className="text-gray-400 font-lexend ">
        <Navbar />
        {children}
      </section>
    </NavbarContext.Provider>
  );
}

export default Layout;
