"use client";

import { NavItems } from "@/lib/utils";
import { useState } from "react";
import { UilBars, UilMultiply } from "@iconscout/react-unicons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderMenuButton = (): JSX.Element =>
    isMenuOpen ? (
      <button onClick={toggleMenu} className="md:hidden" type="button">
        <UilMultiply className="h-8 w-8" />
      </button>
    ) : (
      <button onClick={toggleMenu} className="md:hidden" type="button">
        <UilBars className="h-8 w-8" />
      </button>
    );

  const closeMenu = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <section className="bg-[#fff] w-full sticky top-0 z-[9999]">
      <nav className="flex h-16 justify-between items-center gap-4 lg:mx-6 mx-4">
        <a href="#" className="text-lg font-bold">
          Ola
        </a>
        <div className="hidden md:flex flex-col md:flex-row gap-8">
          {NavItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.link} className="flex flex-col items-center">
                <div className="md:hidden">
                  <IconComponent />
                </div>
                <a href={item.link} className="ml-2">
                  {item.name}
                </a>
              </li>
            );
          })}
        </div>
        <div className="flex md:hidden">{renderMenuButton()}</div>
      </nav>
      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="md:hidden fixed inset-0 bg-black w-full h-screen bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-8 rounded-md shadow-lg relative">
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <UilMultiply />
            </button>
            <ul className="flex w-80 flex-col gap-4">
              {NavItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.link} className="flex items-center">
                    <IconComponent />
                    <a href={item.link} className="ml-2" onClick={toggleMenu}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Header;
