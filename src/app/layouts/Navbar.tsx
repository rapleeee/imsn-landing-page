"use client";

import ButtonPrimary from '@/components/Button';
import Head from 'next/head';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiAlignRight, RiCloseFill } from 'react-icons/ri';

function Navbar() {
    const [dropdowns, setDropdowns] = useState({
        profile: false,
        programs: false
      });
      
      const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    
      const navLinks = [
        { name: "Team", href: "#" },
        { name: "Portfolio", href: "#" },
        { name: "Partnership", href: "#" },
        { name: "Calender Event", href: "#" },
      ];
    
      const categories = ["Our Journey", "Struktur Organisasi", "Visi dan Misi"];
      const categoriesPrograms = ["Sharing Session", "Workshop", "Siltam dan Kopdar"];
    
      const handleMouseEnter = (menu:any) => {
        setDropdowns({ ...dropdowns, [menu]: true });
      };
    
      const handleMouseLeave = (menu:any) => {
        setDropdowns({ ...dropdowns, [menu]: false });
      };
    
      return (
        <>
          <nav className="fixed top-0 left-0 w-full z-50 p-2 shadow-md bg-neutral-900">
            <div className="m-2 mx-8 flex items-center justify-between">
              <div className="text-4xl text-neutral-50">
                <img
                  src="./assets/images/LogoIMSN_no_bg.png"
                  alt="logo techxperience"
                  className="w-36"
                />
              </div>
    
              <div className="hidden md:flex gap-12 items-center">
                <ul className="flex space-x-4">
                  <li className="relative"
                    onMouseEnter={() => handleMouseEnter("profile")}
                    onMouseLeave={() => handleMouseLeave("profile")}
                  >
                    <button className="hover:text-[#C40000] text-neutral-50 font-bold text-base">
                      Profile
                    </button>
    
                    {dropdowns.profile && (
                      <div className="absolute left-0 w-48 bg-neutral-700 shadow-lg rounded-lg">
                        <div className="p-2">
                          <span className="block px-4 py-2 text-neutral-100 font-bold">
                            Our Profile
                          </span>
                          {categories.map((category, index) => (
                            <a
                              key={index}
                              href="#"
                              className="block px-4 py-2 text-sm hover:bg-[#C40000] hover:text-white"
                            >
                              {category}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
    
                  <li className="relative"
                    onMouseEnter={() => handleMouseEnter("programs")}
                    onMouseLeave={() => handleMouseLeave("programs")}
                  >
                    <button className="hover:text-[#C40000] text-neutral-50 font-bold text-base">
                      Programs
                    </button>
    
                    {dropdowns.programs && (
                      <div className="absolute left-0 w-48 bg-neutral-700 shadow-lg rounded-lg">
                        <div className="p-2">
                          <span className="block px-4 py-2 text-neutral-100 font-bold">
                            Our Programs
                          </span>
                          {categoriesPrograms.map((category, index) => (
                            <a
                              key={index}
                              href="#"
                              className="block px-4 py-2 text-sm hover:bg-[#C40000] hover:text-white"
                            >
                              {category}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
    
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="hover:text-[#C40000] text-neutral-50 font-bold text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
    
                <div className="flex gap-2">
                  <button className="bg-indigo-100 text-neutral-900 px-4 py-2 rounded-lg">
                    Masuk
                  </button>
                  <button className="bg-[#C40000] text-neutral-50 px-4 py-2 rounded-lg">
                    Daftar
                  </button>
                </div>
              </div>
    
              <button
                className="md:hidden text-neutral-50 text-3xl"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <RiCloseFill /> : <RiAlignRight />}
              </button>
            </div>
    
            {isMobileMenuOpen && (
              <div className="md:hidden bg-neutral-900 text-neutral-50 p-4">
                <ul className="space-y-4">
                  <li>
                    <button
                      onClick={() => setDropdowns({ ...dropdowns, profile: !dropdowns.profile })}
                      className="hover:text-[#C40000] font-bold text-base"
                    >
                      Profile
                    </button>
                    {dropdowns.profile && (
                      <div className="mt-2 bg-neutral-700 text-black p-2 rounded-lg">
                        <span className="block px-4 py-2 text-neutral-100 font-bold">
                          Kategori
                        </span>
                        {categories.map((category, index) => (
                          <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 hover:bg-[#C40000] text-sm text-neutral-300 hover:text-white"
                          >
                            {category}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
    
                  <li>
                    <button
                      onClick={() => setDropdowns({ ...dropdowns, programs: !dropdowns.programs })}
                      className="hover:text-[#C40000] font-bold text-base"
                    >
                      Programs
                    </button>
                    {dropdowns.programs && (
                      <div className="mt-2 bg-neutral-700 text-black p-2 rounded-lg">
                        <span className="block px-4 py-2 text-neutral-100 font-bold">
                          Kategori
                        </span>
                        {categoriesPrograms.map((category, index) => (
                          <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 hover:bg-[#C40000] text-sm text-neutral-300 hover:text-white"
                          >
                            {category}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
    
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="hover:text-[#C40000] font-bold text-base block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
    
                <div className="mt-4 space-y-2">
                  <button className="w-full bg-indigo-100 text-neutral-900 px-4 py-2 rounded-lg">
                    Masuk
                  </button>
                  <button className="w-full bg-[#C40000] text-neutral-50 px-4 py-2 rounded-lg">
                    Daftar
                  </button>
                </div>
              </div>
            )}
          </nav>
        </>
      )    
}

export default Navbar