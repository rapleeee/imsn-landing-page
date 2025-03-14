"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaUserShield, FaGlobe, FaChartLine, FaTruck } from "react-icons/fa";
import Link from "next/link";

function Section() {
  const stats = [
    {
      icon: <img src="/download.png" alt="imsn" className="w-30 h-30" />,
      title: "5 Tahun",
      description: "lorem ipsum dolor sit am eiusmod tempor incididunt ut labore et dolore mag n convallis nisi ut aliquip ex ea commodo consequat"
    },
    {
      icon: <img src="/communities.png" alt="imsn" className="w-25 h-25 mb-5" />,
      title: "100 + Anggota",
      description: "lorem ipsum dolor sit am eiusmod tempor incididunt ut labore et dolore mag n convallis nisi ut aliquip ex ea commodo consequat"
    },
    {
      icon: <img src="/download2.png" alt="imsn" className="w-30 h-30" />,
      title: "1000 + Partisipan",
      description: "lorem Ipsum dolor sit am eiusmod tempor incididunt ut labore et dol lorem ipsum dolor sit am e"
    },
    {
      icon: <img src="/organization.png" alt="imsn" className="w-25 h-25 mb-5" />,
      title: "1.803 Kerjasama",
      description: "lorem ipsum dolor sit am eiusmod tempor incididunt ut labore et dolore mag n convallis nisi ut aliquip ex ea commodo consequat"
    },
  ];

  const newsData = [
    {
      date: "05 Januari 2025",
      title: "Silturahmi tambang 28.0 bersama Pak Adi Risfandi Direktur PT Mifa Bersaudara & PT Bara Energi Lestari",
      image: "/assets/images/kopdar/kopdar.jpg",
    },
    {
      date: "07 November 2024",
      title: "Silaturahmi tambang 25.0 bersama Pak Wisnu Salman Direktur PT Geo Mining Berkah",
      image: "/assets/images/kopdar/kopdar2.jpg",
    },
    {
      date: "22 Oktober 2024",
      title: "lorem Ipsum dolor sit amet, con et temp element nulla p whenever matt becomes",
      image: "/assets/images/kopdar/kopdar3.jpg",
    },
    {
      date: "09 Oktober 2024",
      title: "Silaturahmi tambang 22.0 bersama Bang Charles Andrianto Manager Reclamation and Rehabilitation PT Vale Indonesia Tbk",
      image: "/assets/images/kopdar/kopdar4.jpg",
    },
    {
      date: "18 September 2024",
      title: "Silaturahmi tambang 20.0 bersama Pak Azwan Zam Roni HR Head Merdeka Mining Servis",
      image: "/assets/images/kopdar/kopdar5.jpg",
    },
  ];

  return (
    <div className="mx-4 my-8">
      <h1 className="text-2xl font-bold mb-4">Latest Siltam dan Kopdar</h1>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3} 
        breakpoints={{
          300: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 }, 
        }}
        className="w-full"
      >
        {newsData.map((news, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-60 rounded-lg overflow-hidden">
              <img src={news.image} alt="kopdar" className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-black opacity-50"></div>

              <div className="absolute bottom-0 left-0 p-4 text-white">
                <p className="text-[8px] sm:text-sm">{news.date}</p>
                <h2 className="text-xs sm:text-lg font-bold">{news.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <div className="mt-12 items-center justify-center ">
        <h1 className="text-lg  text-center">IMSN is an organization that has a vision for connecting various institutions like students,<br /> fresh graduates, mining companies, and also professionals.</h1>
        <div className="text-blue-500 mb-12 text-center">
          <Link rel="stylesheet" href="#" className="mt-4 " >Learn More</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <h2 className="text-lg font-bold mt-2">{stat.title}</h2>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section;
