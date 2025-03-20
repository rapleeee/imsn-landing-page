"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import { link } from "fs";
import { RiArrowRightCircleFill, RiArrowRightCircleLine } from "react-icons/ri";

export default function Recruitment() {
  const jobs = [
    {
      title: "Web Developer",
      description:
        "We are looking for a talented Frontend Developer to join our team.",
      responsibilities: [
        "Develop and maintain web applications",
        "Collaborate with UI/UX designers",
        "Ensure high performance and responsiveness",
      ],
      linkwebsite: "https://docs.google.com/forms/d/e/1FAIpQLSc4TBuX9vb4kSof_6BDX9w8V_Q02v8hz0uI28LgeKgHk74gOg/viewform"
    },
    {
      title: "Go Global Squad",
      description: "Join our squad team to build scalable to global services.",
      responsibilities: [
        "Develop API and backend services",
        "Optimize database queries",
        "Ensure security and best practices",
      ],
      linkwebsite: "https://docs.google.com/forms/d/e/1FAIpQLSfNaNUMYwEVNP1FMUYgdA8r7RHFIGuv0on8bwyBAumfh6SxFw/viewform"
    },
    {
      title: "Design and publication",
      description: "Help us design modern and user-friendly interfaces.",
      responsibilities: [
        "Create wireframes and prototypes",
        "Work closely with developers",
        "Enhance user experience",
      ],
      linkwebsite: "https://docs.google.com/forms/d/e/1FAIpQLSeCLzS4bjdkwaUzbgPNA-T-IrahM_AvJRCokIexeXCPKak3GA/viewform"
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-52 flex flex-col items-center px-6 md:px-10">
        <div className="max-w-5xl w-full text-left sm:text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-neutral-200">
            <span className="text-[#C40000]">WE LOOK FORWARD </span> TO
            COLLABORATING WITH TALENTED INDIVIDUALS.
          </h1>
          <p className="text-neutral-400 text-lg sm:text-2xl mt-6">
            Let's level up together and join us during our next recruitment.
          </p>
          <div>
            <img
              src="./imnsn.jpeg"
              alt="recruitment"
              className="w-full h-100 rounded-xl grayscale-75 my-10 object-cover"
            />
          </div>
        </div>

        <div className="max-w-5xl w-full my-10 space-y-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-neutral-700 shadow-lg rounded-xl overflow-hidden">
              <button
                className="w-full text-left p-6 flex justify-between items-center text-neutral-800 font-semibold text-xl"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-white"> <span></span> {job.title}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-neutral-700 text-neutral-100">
                  <p className="text-base font-medium text-neutral-100">{job.description}</p>
                  <h3 className="text-base font-semibold mt-3">Responsibilities:</h3>
                  <ul className="list-disc pl-5 text-sm mt-2 text-neutral-100">
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                  <div className="">
                    <a href={job.linkwebsite} target="_blank" rel="noopener noreferrer">
                      <button className="border py-1 px-4 mt-3 hover:bg-[#C40000] rounded-lg ">
                        <div className="flex items-center gap-4">
                        <span className="text-white text-sm">Apply Now </span>
                        <RiArrowRightCircleLine className="text-white text-sm" />
                        </div>
                      </button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}