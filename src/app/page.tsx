"use client";

import Head from 'next/head';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { RiAlignRight, RiCloseFill } from 'react-icons/ri';

export default function page() {

  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Programs", href: "#" },
    { name: "Team", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Partnership", href: "#" },
    { name: "Calender Event", href: "#" },
  ];
  
  const categories = [
    "Web Dev",
    "Mobile Dev",
    "Fundamental",
    "Pemula",
    "Framework",
    "Frontend",
    "Backend",
  ];
  
  const popularTechs = ["React", "Next Js", "Laravel", "React Native"];

  return (
    <>
    <Head>
      <title>Dashboard - IMSN</title>
      <meta name="description" content="Dashboard for Indonesia Mining Student Network" />
    </Head>
      <nav className="p-2 shadow-md bg-neutral-900">
        <div className="m-2 mx-8 flex items-center justify-between">
          <div className="text-4xl text-neutral-50">
            <img
              src="./assets/images/LogoIMSN_no_bg.png"
              alt="logo techxperience"
              className="w-36"
            />
          </div>

          <div className="hidden md:flex gap-12  items-center">
            <ul className="flex space-x-4">
              <li className="relative">
                <button
                  onClick={() => setDropDownOpen(!isDropDownOpen)}
                  className="hover:text-[#C40000] text-neutral-50 font-bold text-base"
                >
                  Profil
                </button>
                {isDropDownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                    <div className="p-2">
                      <span className="block px-4 py-2 text-gray-500 font-bold">
                        Kategori
                      </span>
                      {categories.map((category, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 hover:bg-[#C40000] hover:text-white"
                        >
                          {category}
                        </a>
                      ))}
                      <hr className="my-2" />
                      <span className="block px-4 py-2 text-gray-500 font-bold">
                        Teknologi Populer
                      </span>
                      {popularTechs.map((tech, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 hover:bg-[#C40000] hover:text-white"
                        >
                          {tech}
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
                  onClick={() => setDropDownOpen(!isDropDownOpen)}
                  className="hover:text-[#C40000] font-bold text-base"
                >
                  Kelas
                </button>
                {isDropDownOpen && (
                  <div className="mt-2 bg-white text-black p-2 rounded-lg">
                    <span className="block px-4 py-2 text-gray-500 font-bold">
                      Kategori
                    </span>
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 hover:bg-[#C40000] hover:text-white"
                      >
                        {category}
                      </a>
                    ))}
                    <hr className="my-2" />
                    <span className="block px-4 py-2 text-gray-500 font-bold">
                      Teknologi Populer
                    </span>
                    {popularTechs.map((tech, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-4 py-2 hover:bg-[#C40000] hover:text-white"
                      >
                        {tech}
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
