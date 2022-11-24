import React from 'react';

export interface NavbarContextInterface {
  isNavbarOpen: boolean;
  setIsNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarContext = React.createContext<NavbarContextInterface | null>(
  null
);
