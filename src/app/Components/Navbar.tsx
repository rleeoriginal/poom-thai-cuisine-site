'use client'

import Image from "next/image";
import Dropdown from "./Dropdown";
import NavButtons from "./NavButtons";
import Link from 'next/link'

import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ 
    weight: ['400'],
    subsets: ['latin'] 
});


// original navbar color: #6B8A7A
export default function Navbar() {

    return (
        <div className="min-h-14 bg-[#1c6f42] p-3 grid grid-cols-3"> 
            <div className="text-[#FFE838] grid grid-rows-2">
                <div className="border-4 border-b-[#FFE838] border-t-transparent border-l-transparent border-r-transparent">
                </div>
                <div>
                </div>
            </div>
            <div className="flex-col flex items-center w-[100%] ">
                <Link href="/">
                <Image
                    src="/logo.png"
                    width={90}
                    height={90}
                    alt="Logo of restaurant" 
                />
                </Link>
                <div className={`text-[#FFE838] text-xl text-center ${pacifico.className}`}>
                    <b>Poom Thai Cuisine</b>
                </div>
            </div>
            <div className="text-[#FFE838] font-semibold flex gap-5">
                <div className="w-[100%] flex flex-col justify-center">
                    <div className="border-4 border-b-[#FFE838] border-t-transparent border-l-transparent border-r-transparent">
                    </div>
                    <div>
                    </div>
                </div>
                <NavButtons />
            </div>
        </div>
    )
}
// drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
/* 
                <div className="bg-red-500 w-[100%]">

                </div>
*/