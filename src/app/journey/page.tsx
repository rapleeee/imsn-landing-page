"use client"
import React from 'react'
import 'react-vertical-timeline-component/style.min.css'
import { CubeIcon, UserGroupIcon, AcademicCapIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/outline'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const timelineData = [
  {
    year: "2020",
    title: "Pendirian IMSN",
    description: "Indonesia Mining Student Network didirikan sebagai wadah kolaborasi dan networking mahasiswa pertambangan Indonesia",
    icon: <UserGroupIcon className="w-6 h-6" />,
    iconBackground: "#1f2937"
  },
  {
    year: "2021-2022",
    title: "Pengembangan Program",
    description: "Menyelenggarakan berbagai program seperti Mining Class, Mining Talk, dan kegiatan pengembangan soft skill mahasiswa tambang",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    iconBackground: "#047857"
  },
  {
    year: "2023",
    title: "Ekspansi Nasional",
    description: "Memperluas jaringan ke berbagai universitas dengan program pertambangan di Indonesia dan mengadakan kolaborasi dengan industri",
    icon: <CubeIcon className="w-6 h-6" />,
    iconBackground: "#0369a1"
  },
  {
    year: "2025",
    title: "Vision: Reach the Global",
    description: "Mewujudkan visi menjadi organisasi mahasiswa pertambangan yang berskala global dan memberikan kontribusi pada industri pertambangan internasional",
    icon: <GlobeAsiaAustraliaIcon className="w-6 h-6" />,
    iconBackground: "#b45309"
  }
]

export default function Journey() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Perjalanan IMSN
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            Membentuk generasi muda tambang Indonesia menuju visi global
          </p>
        </div>

        <VerticalTimeline lineColor={'#525252'}>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ 
                background: '#202327FF', 
                color: '#ffff',
                boxShadow: '0 3px 0 #1B1F68FF',
                borderRadius: '0.75rem'
              }}
              contentArrowStyle={{ borderRight: '7px solid #202327FF' }}
              date={item.year}
              dateClassName="text-gray-300 sm:text-lg"
              iconStyle={{ background: item.iconBackground, color: '#fff' }}
              icon={item.icon}
            >
              <h3 className="vertical-timeline-element-title font-bold text-xl text-white">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-4">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      <Footer/>
    </div>
  )
}