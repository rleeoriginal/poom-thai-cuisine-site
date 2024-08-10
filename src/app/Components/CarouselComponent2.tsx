import { Carousel } from "flowbite-react";


// 80 


export default function CarouselComponent2() {
  return (
    <div className="h-56 w-[30vw]">
      <div className="h-56 sm:h-64 xl:h-[40vh] 2xl:h-96 w-[30vw]">
        <Carousel slideInterval={5000} className="rounded-[70px] overflow-hidden bg-[#1c6f42]/75">
          <img src="/people_2.jpg" alt="..." width="100%" height="auto" />
          <img src="/dish1.png" alt="..." width="100%" height="auto" />
          <img src="/people_5.jpg" alt="..." width="100%" height="auto"/>
          <img src="/dish3.png" alt="..." width="100%" height="auto"/>
          <img src="/poom.png" alt="..." width="100%" height="auto"/>
        </Carousel>
      </div>
    </div>

  );
}
