import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

const MemberCard = ({ name, position, image }: any) => {
    return (
        <div className="relative bg-neutral-800 shadow-lg rounded-xl p-4 w-60 flex flex-col ">
            <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" aria-label="More options">
                <BsThreeDotsVertical size={20} />
            </button>

            <div className="flex items-center absolute -top-5 space-x-3">
                <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 rounded-full border-2 border-gray-300"
                />
            </div>

            <div className="mt-3 text-left">
                <h3 className="font-semibold mt-2 text-neutral-200">{name}</h3>
                <p className="text-neutral-600 text-sm">{position}</p>
                <div className="flex-row flex mt-2 gap-2 items-center">
                    <IoLogoLinkedin />
                    <IoLogoInstagram />
                </div>
            </div>
        </div>
    );
};

export default MemberCard;