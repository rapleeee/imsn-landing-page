"use client";

import Link from "next/link";
import React, { useState, useCallback } from "react";
import { RiAlignRight, RiCloseFill } from "react-icons/ri";

function Navbar() {
  const [dropdowns, setDropdowns] = useState({ profile: false, programs: false });
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Team", href: "/not-found" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Partnership", href: "/partnership" },
    { name: "Calendar Event", href: "/calendar" },
  ];

  const categories = [
    { name: "Our Journey", href: "/profile/journey" },
    { name: "Struktur Organisasi", href: "/organization" },
    { name: "Visi dan Misi", href: "/profile/vision-mission" },
  ];

  const categoriesPrograms = [
    { name: "Sharing Session", href: "/programs/sharing-session" },
    { name: "Workshop", href: "/programs/workshop" },
    { name: "Siltam dan Kopdar", href: "/programs/siltam-kopdar" },
  ];

  const toggleDropdown = useCallback(
    (menu: "profile" | "programs") => {
      setDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
    },
    []
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-2 shadow-md bg-neutral-900">
      <div className="m-2 mx-8 flex items-center justify-between">
        <Link href="/" aria-label="Homepage">
          <img src="/assets/images/LogoIMSN_no_bg.png" alt="TechXperience Logo" className="w-36" />
        </Link>

        <div className="hidden md:flex gap-12 items-center">
          <ul className="flex space-x-4">
            <li className="relative" onMouseEnter={() => toggleDropdown("profile")} onMouseLeave={() => toggleDropdown("profile")}>
              <button className="hover:text-[#C40000] text-neutral-50 font-bold text-base">Profile</button>
              {dropdowns.profile && (
                <div className="absolute left-0 w-48 bg-neutral-700 shadow-lg rounded-lg">
                  <div className="p-2">
                    <span className="block px-4 py-2 text-neutral-100 font-bold">Our Profile</span>
                    {categories.map((category) => (
                      <Link key={category.name} href={category.href} className="block px-4 py-2 text-sm hover:bg-[#C40000] hover:text-white">
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li className="relative" onMouseEnter={() => toggleDropdown("programs")} onMouseLeave={() => toggleDropdown("programs")}>
              <button className="hover:text-[#C40000] text-neutral-50 font-bold text-base">Programs</button>
              {dropdowns.programs && (
                <div className="absolute left-0 w-48 bg-neutral-700 shadow-lg rounded-lg">
                  <div className="p-2">
                    <span className="block px-4 py-2 text-neutral-100 font-bold">Our Programs</span>
                    {categoriesPrograms.map((category) => (
                      <Link key={category.name} href={category.href} className="block px-4 py-2 text-sm hover:bg-[#C40000] hover:text-white">
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>

            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#C40000] text-neutral-50 font-bold text-base">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-2">
            <Link href="/login" className="bg-indigo-100 text-neutral-900 px-4 py-2 rounded-lg">Masuk</Link>
            <Link href="/register" className="bg-[#C40000] text-neutral-50 px-4 py-2 rounded-lg">Daftar</Link>
          </div>
        </div>

        <button className="md:hidden text-neutral-50 text-3xl" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <RiCloseFill /> : <RiAlignRight />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 text-neutral-50 p-4">
          <ul className="space-y-4">
            <li>
              <button onClick={() => toggleDropdown("profile")} className="hover:text-[#C40000] font-bold text-base">Profile</button>
              {dropdowns.profile && (
                <div className="mt-2 bg-neutral-700 p-2 rounded-lg">
                  {categories.map((category) => (
                    <Link key={category.name} href={category.href} className="block px-4 py-2 hover:bg-[#C40000] text-sm text-neutral-300 hover:text-white">
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>
              <button onClick={() => toggleDropdown("programs")} className="hover:text-[#C40000] font-bold text-base">Programs</button>
              {dropdowns.programs && (
                <div className="mt-2 bg-neutral-700 p-2 rounded-lg">
                  {categoriesPrograms.map((category) => (
                    <Link key={category.name} href={category.href} className="block px-4 py-2 hover:bg-[#C40000] text-sm text-neutral-300 hover:text-white">
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#C40000] font-bold text-base block">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 space-y-2">
            <Link href="/login" className="w-full block bg-indigo-100 text-neutral-900 px-4 py-2 rounded-lg">Masuk</Link>
            <Link href="/register" className="w-full block bg-[#C40000] text-neutral-50 px-4 py-2 rounded-lg">Daftar</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
