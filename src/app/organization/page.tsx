import MemberCard from "@/components/MemberCard";
import React from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const members = [
    { name: "Oktariana Meliana Putri", position: "Sekretaris IMSN", image: "./assets/images/mining.webp"  }, // Ganti dengan gambar asli
    { name: "Richar Farantino", position: "Kepala Design And Pubication", image: "./assets/images/mining4.webp"  },
    { name: "Raihan Saputra", position: "Divisi Kepala 3 IMSN", image: "./assets/images/mining3.webp"  },
    { name: "Miftahurrizka Afrah", position: "Kepala Divisi Event Management", image: "./assets/images/mining2.webp"  },
    { name: "Chelsie Three Octary", position: "Divisi Kepala 5 IMSN", image: "./assets/images/mining.webp"  },
];

export default function Organization() {
    return (
        <>
        <Navbar/>
        <div className="min-h-screen mt-28">
        <div className="flex flex-col items-center p-10">
            <div className="flex justify-center">
                <MemberCard
                    name="Samuel Christian Sitompul"
                    position="Founder IMSN"
                    image="./assets/images/minig.webp" 
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
                {members.map((member, index) => (
                    <MemberCard key={index} {...member} />
                ))}
            </div>
        </div>
        </div>
        <Footer/>
        </>
    );
}
