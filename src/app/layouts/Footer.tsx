import React from "react";
import { FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaFax } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex justify-start">
            <img
              src="./assets/images/LogoIMSN_no_bg.png"
              alt="IMSN Logo"
              className="w-40 h-auto"
            />
          </div>
          <div className="text-left">
            <h2 className="text-lg font-semibold text-white">
              Indonesia Mining Student Network
            </h2>
            <p className="text-gray-400 text-sm">
              Jl. Rawagelam I No. 9, Kawasan Industri Pulogadung,<br />
              Jakarta 13930, Indonesia
            </p>
            <div className="mt-3">
              <p className="flex items-center text-gray-400 text-sm">
                <FaPhone className="mr-2 text-white" /> (+62 21) 460 2015 (hunting)
              </p>
              <p className="flex items-center text-gray-400 text-sm">
                <FaFax className="mr-2 text-white" /> (+62 21) 461 4010 / 460 1916
              </p>
            </div>
          </div>
          <div className="text-left">
            <h2 className="text-base font-semibold text-white">TENTANG KAMI</h2>
            <ul className="text-gray-400 space-y-2 mt-4">
              <li className="hover:text-white cursor-pointer text-sm">Visi dan Misi</li>
              <li className="hover:text-white cursor-pointer text-sm">Profil Perusahaan</li>
              <li className="hover:text-white cursor-pointer text-sm">Sertifikasi</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-left">
          <div className="relative group">
            <p className="text-gray-400 text-sm">
              © 2024 Indonesia Mining Student Network™. All Rights Reserved.
            </p>
            <span className="absolute -top-6 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 scale-0 transition-transform group-hover:scale-100 text-xs bg-gray-800 text-white px-2 py-1 rounded">
              Web Developer IMSN
            </span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[
              {
                icon: FaLinkedin,
                label: "LinkedIn",
                url: "https://www.linkedin.com/company/indonesia-mining-student-network",
              },
              {
                icon: FaYoutube,
                label: "YouTube",
                url: "https://www.youtube.com/@indonesiaminingstudentnetw9622",
              },
              {
                icon: FaInstagram,
                label: "Instagram",
                url: "https://www.instagram.com/miningstudentnetwork.id",
              },
            ].map(({ icon: Icon, label, url }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <Icon className="text-xl cursor-pointer hover:text-blue-400" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 scale-0 transition-transform group-hover:scale-100 text-xs bg-neutral-800 text-white px-2 py-1 rounded">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
