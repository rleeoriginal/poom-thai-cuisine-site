
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import Image from "next/image";

import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ 
    weight: ['400'],
    subsets: ['latin'] 
});

export default function FooterComponent() {
  return (
    <div className={`bg-[#007E3A]/90 ${pacifico.className}`}>
      <Footer container className="bg-[#007E3A]/90">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Image
                      src="/logo.png"
                      width={90}
                      height={90}
                      alt="Logo of restaurant" 
                  />
            <FooterLinkGroup>
              <FooterLink className="text-[#FFE838]" href="#">"It's damn good!"</FooterLink>
            </FooterLinkGroup>
          </div>
          <div className="text-[#FFE838] grid grid-rows-2 py-4">
              <div className="border-4 border-b-[#FFE838] border-t-transparent border-l-transparent border-r-transparent">
              </div>
              <div>
              </div>
          </div>
          

            <span className={`text-[#FFE838] font-poom ${pacifico.className}`}>Poom Thai Cuisine</span>
        </div>
      </Footer>

    </div>
  );
}
// <FooterDivider className=""/>
