import { Carousel } from "flowbite-react";


// 80 


export default function CarouselComponent3() {
  return (
    <div className="h-56 w-[30vw]">
      <div className="h-56 sm:h-64 xl:h-[40vh] 2xl:h-96 w-[30vw]">
        <Carousel slideInterval={5000} className="rounded-[70px] overflow-hidden bg-[#1c6f42]/75">
          <img src="/people_3.jpg" alt="..." width="100%" height="auto" />
          <img src="/dish2.png" alt="..." width="100%" height="auto"/>
          <img src="/place1.png" alt="..." width="100%" height="auto"/>
          <img src="/dish4.png" alt="..." width="100%" height="auto"/>
          <img src="/dish6.png" alt="..." width="100%" height="auto"/>
        </Carousel>
      </div>
    </div>

  );
}
