import { Carousel } from "flowbite-react";


// 80 


export default function CarouselComponent() {
  return (
    <div className="h-56 w-[30vw]">
      <div className="h-56 sm:h-64 xl:h-[40vh] 2xl:h-96 w-[30vw]">
        <Carousel slideInterval={5000}>
          <img src="/people_1.jpg" alt="..." width="100%" height="auto" />
          <img src="/people_2.jpg" alt="..." />
          <img src="/people_3.jpg" alt="..." />
          <img src="/people_4.jpg" alt="..." />
          <img src="/people_5.jpg" alt="..." />
        </Carousel>
      </div>
    </div>

  );
}

