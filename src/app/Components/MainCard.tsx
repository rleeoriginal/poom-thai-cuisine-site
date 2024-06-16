import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ 
    weight: ['400'],
    subsets: ['latin'] 
});

export default function MainCard() {
    return <>
        <div className="flex-1 flex justify-center items-center">
            <div className={`bg-[#FFF5E1]/60 h-[500px] w-[65vw] rounded-[50px] flex flex-col justify-between items-center text-center p-10 border-8 border-[#007E3A] ${pacifico.className}`}>
                <div className=" bg-[#007E3A]/75 w-[45vw] border-[#FFE838] rounded-[20px] text-[30px] text-[#FFE838] font-bold p-4">
                    <span className="block">Poom Thai</span> Cuisine
                </div>
                <div className="text-[20px] font-bold">
                    Open for Takeout and Delivery
                </div>
                <div>
                    2204 Lincoln Boulevard #A, Santa Monica, CA, 90025
                </div>
                <div>
                    (310)-450-2150
                </div>
            </div>
        </div>
    </>
}

// FFF5E1

// FFE838
// 007E3A