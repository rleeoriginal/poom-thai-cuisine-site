import Image from "next/image";
import Navline from "./Navline";

export default function Navbar() {
    return (
        <div className="min-h-14 bg-[#FFFAE6]/40 p-3 flex justify-center"> 
            <Navline />
            <div className="flex-col flex items-center">
                <Image
                    src="/logo.png"
                    width={90}
                    height={90}
                    alt="Logo of restaurant"
                />
                <div className="text-[#0A6847] text-xl">
                    Poom Thai Cuisine
                </div>
            </div>
            <Navline />
        </div>
    )
}