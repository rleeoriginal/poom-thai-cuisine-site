'use client'

import Image from "next/image";
import Dropdown from "./Dropdown";
import NavButtons from "./NavButtons";


// original navbar color: #6B8A7A
export default function Navbar() {

    return (
        <div className="min-h-14 bg-[#007E3A]/90 p-3 grid grid-cols-3"> 
            <div className="">
            </div>
            <div className="flex-col flex items-center w-[100%] ">
                <Image
                    src="/logo.png"
                    width={90}
                    height={90}
                    alt="Logo of restaurant" 
                />
                <div className="text-[#FFE838] text-xl text-center">
                    <b>Poom Thai Cuisine</b>
                </div>
            </div>
            <div className="grid grid-cols-2 text-[#FFE838] font-semibold">
                <NavButtons />
            </div>
        </div>
    )
}
// drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));