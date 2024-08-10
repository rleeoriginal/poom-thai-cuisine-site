import { Pacifico } from 'next/font/google';
import Image from 'next/image';

const pacifico = Pacifico({ 
    weight: ['400'],
    subsets: ['latin'] 
});

export default function ContactCard() {
    return <>
        <div className="flex-1 flex justify-center items-center">
            <div className={`bg-[#FFF5E1]/60 w-[65vw] rounded-[50px] flex flex-col justify-between items-center text-center p-10 border-8 border-[#1c6f42] ${pacifico.className}`}>
                <div className="flex flex-col gap-3">
                    <div className="rounded-[40px] overflow-hidden">
                        <Image
                            src="/inside.jpg"
                            width={500}
                            height={500}
                            alt="Picture of restaurant for contact card"
                        />
                    </div>
                    <div>
                        <div>
                            310-452-2150
                        </div>
                        <div>
                            2204 Lincoln Blvd A, Santa Monica, CA 90405
                        </div>
                    </div>
                    <div>
                        Family owned storefront serving Thai food since 2003.
                    </div>
                </div>
            </div>
        </div>
    </>
}