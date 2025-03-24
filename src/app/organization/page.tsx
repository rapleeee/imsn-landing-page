import MemberCard from "@/components/MemberCard";
import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const members = [
    { name: "Oktariana Meliana Putri", position: "Sekretaris IMSN", image: "./assets/images/mining.webp" }, // Ganti dengan gambar asli
    { name: "Richar Farantino", position: "Kepala Design And Pubication", image: "./assets/images/mining4.webp" },
    { name: "Raihan Saputra", position: "Divisi Kepala 3 IMSN", image: "./assets/images/mining3.webp" },
    { name: "Miftahurrizka Afrah", position: "Kepala Divisi Event Management", image: "./assets/images/mining2.webp" },
    { name: "Chelsie Three Octary", position: "Divisi Kepala 5 IMSN", image: "./assets/images/mining.webp" },
];

export default function Organization() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen mt-28 flex flex-col items-center p-10">
                <div className="relative flex flex-col items-center">
                    <MemberCard
                        name="Samuel Christian Sitompul"
                        position="Founder IMSN"
                        image="./assets/images/minig.webp"
                    />
                    {/* Garis ke bawah */}
                    <div className="w-0.5 h-20 bg-gray-500"></div>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6 ">
                    {/* Garis horizontal yang menyambungkan anggota */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-500"></div>

                    {members.map((member, index) => (
                        <div key={index} className="relative flex flex-col items-center">

                            <MemberCard {...member} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

