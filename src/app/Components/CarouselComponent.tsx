import { Carousel } from "flowbite-react";


// 80 


export default function CarouselComponent() {
  return (
    <div className="h-56 md:w-[30vw] w-[60vw]">
      <div className="h-56 sm:h-64 xl:h-[40vh] 2xl:h-96 ">
        <Carousel slideInterval={5000} className="rounded-[70px] overflow-hidden bg-[#1c6f42]/75">
          <img src="/people_1.jpg" alt="..." width="100%" height="100%" />
          <img src="/dish7.png" alt="..." width="100%" height="auto"/>
          <img src="/people_4.jpg" alt="..." width="100%" height="auto"/>
          <img src="/dish5.png" alt="..." width="100%" height="auto"/>
          <img src="/place2.png" alt="..." width="100%" height="auto"/>
        </Carousel>
      </div>
    </div>

  );
}

