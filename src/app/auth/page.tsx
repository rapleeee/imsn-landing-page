'use client';
import { useState } from 'react';
import { FaGoogle, FaFacebook, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';

export default function Auth() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
            <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10">
                <div className="w-full max-w-sm md:max-w-md">
                    <h2 className="text-3xl font-bold mb-4 text-center md:text-left">Welcome to IMSN</h2>
                    <p className="text-gray-400 mb-6 text-center md:text-left">Let's get our big dreams come true</p>
                    <div className="relative mb-4">
                        <input 
                            type="email" 
                            id="email" 
                            placeholder=" " 
                            className="w-full p-3 text-sm bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 peer" 
                        />
                        <label 
                            htmlFor="email" 
                            className="absolute left-3 top-2 text-neutral-400 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
                        >
                        Masukan email
                        </label>
                    </div>

                    <div className="relative mb-6">
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder=" "
                            className="w-full p-3 pr-10 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500 peer"
                        />
                        <label 
                            htmlFor="password" 
                            className="absolute left-3 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500"
                        >
                            Password
                        </label>
                        <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    
                    <button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-md mb-4"
                        onClick={() => alert('Sedang dalam maintenance')}
                    >
                       Login      
                    </button>
                    <p className="text-center text-gray-400 mb-4">Or sign up with</p>
                    <div className="flex justify-center gap-4">
                        <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700" onClick={() => alert('Sedang dalam maintenance')} aria-label='Google'>
                            <FaGoogle size={20} />
                        </button>
                        <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700" onClick={() => alert('Sedang dalam maintenance')} aria-label='Facebook'>
                            <FaFacebook size={20} />
                        </button>
                        <button className="p-3 bg-gray-800 rounded-full hover:bg-gray-700" onClick={() => alert('Sedang dalam maintenance')} aria-label='Apple'>
                            <FaApple size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 bg-blue-900 flex flex-col justify-center p-6 md:p-10 ">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Make a Dream.</h2>
                <p className="text-gray-300 mb-6">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."</p>
                <div className="flex items-center gap-4">
                    <Image src="/assets/images/logo_bgwhite.png" alt="User" width={40} height={40} className="rounded-full" />
                    <div>
                        <p className="font-semibold">Samuel Christian Sitompul</p>
                        <p className="text-gray-400 text-sm">Founder Indonesia Mining Student Network</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
