import React from 'react';

function VisiMisi() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img 
          src="./assets/images/minig.webp" 
          alt="visimisiimsn" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl text-white">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Visi & Misi IMSN</h1>
            <p className="text-sm sm:text-lg">
              Visi kami adalah Menghubungkan mahasiswa pertambangan di seluruh Indonesia, dan misi kami adalah menyediakan peluang pendidikan dan kolaborasi.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <video controls autoPlay className="w-full max-w-md rounded-lg shadow-lg">
              <source src="./assets/images/video/companyprofile.mp4" type="video/mp4" />
              Browser Anda tidak mendukung pemutaran video.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;
