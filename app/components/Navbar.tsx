"use client";  // Ensure the page is client-rendered

import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsWhatsapp, BsFacebook, BsYoutube } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';  // Import the Link component
import logo from "/public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const socialLinks = [
    { href: "https://www.linkedin.com/in/saimahmed24", icon: <BsWhatsapp /> },
    { href: "https://github.com/saimahmed24", icon: <BsFacebook /> },
    { href: "https://www.behance.net/saimahmedqazi24", icon: <BsYoutube /> },
  ];

  return (
    <nav className="fixed z-20 top-0 flex items-center w-full justify-between border-b border-b-[#fb923c] bg-orange-100/40 px-16 py-2 text-white backdrop-blur-md">
      {/* Home link now uses Next.js Link */}
      <Link href="/" className="text-3xl font-semibold transition-all duration-300 hover:opacity-100">
        <Image src={logo} alt="Logo" className="w-24" />
      </Link>

      <ul className="hidden md:flex gap-10 text-gray-700 font-semibold">
        {["home", "hajj", "umrah", "tours", "gallery", "contact"].map((item) => (
          <li key={item}>
            {/* Link for navigation instead of <a> tag */}
            <Link
              href={item === 'home' ? '/' : `/${item}`}  // Home links to root
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="hidden md:flex items-center justify-center gap-3 text-[#e4b025]">
        {socialLinks.map(({ href, icon }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
              {icon}
            </li>
          </a>
        ))}
      </ul>

      <button onClick={menuOpen} className="md:hidden text-4xl">
        {isOpen ? <BiX /> : <BiMenu />}
      </button>

      {isOpen && (
        <div
          className={`fixed right-0 top-[94px] md:hidden flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12`}
        >
          <ul className="flex flex-col gap-8">
            {["home", "hajj", "umrah", "tours", "gallery", "contact"].map((item) => (
              <li key={item}>
                {/* Link for mobile navigation */}
                <Link
                  href={item === 'home' ? '/' : `/${item}`}  // Home links to root
                  className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-5">
            {socialLinks.map(({ href, icon }, index) => (
              <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
                  {icon}
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
