import menuOpen from "./../images/menu-open.svg";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavBar = () => {
    if (navOpen) {
      setNavOpen(false);
      return;
    }
    setNavOpen(true);
  };

  return (
    <>
      <div className='w-full h-20 flex items-center justify-end relative md:justify-start md:pl-4 lg:pl-8 xl:pl-12 md:border-b'>
        <div className='w-3 absolute left-10 md:hidden cursor-pointer'>
          <img
            src={menuOpen}
            onClick={handleNavBar}
            alt='menu'
            className='w-full'
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)",
            }}
          />
        </div>
        <h1 className='text-white text-2xl font-bold italic pr-8 md:p-0 md:text-3xl lg:text-4xl xl:text-5xl'>
          NelDev
        </h1>
      </div>
      <main className='relative md:flex items-start justify-start'>
        <NavBar open={navOpen} setNavOpen={setNavOpen} />
        <div className='w-full pt-10 px-4'>{children}</div>
      </main>
    </>
  );
}
