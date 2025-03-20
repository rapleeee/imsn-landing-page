"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

function HeroSection() {
  const images = [
    "/assets/images/mining.webp",
    "/assets/images/mining2.webp",
    "/assets/images/mining3.webp",
    "/assets/images/mining4.webp",
  ];

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={image}
              alt={`Mining ${index + 1}`}
              className="w-full h-screen object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-80"></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-white">
          Indonesia Mining Student Network
        </h1>
        <p className="text-white mt-4">
          Menghubungkan mahasiswa pertambangan di seluruh Indonesia
        </p>
        <div className="flex justify-center mt-8">
          <Link href="/recruitment" className="bg-[#C40000] hover:bg-[#FF0000] text-white font-bold py-2 px-4 rounded-lg">
            Join IMSN Now!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
