import CarouselComponent from "./CarouselComponent"
import CarouselComponent2 from "./CarouselComponent2"
import CarouselComponent3 from "./CarouselComponent3"

export default function LowerBody() {
    return <>
        <div className="bg-[#FFF5E1] min-h-[55vh] flex justify-center items-center">
            <div className="flex flex-row gap-5">
                <CarouselComponent />
                <div className="hidden lg:block">
                    <CarouselComponent2 />
                </div>
                <div className="hidden lg:block">
                    <CarouselComponent3 />
                </div>
        
            </div>
        </div>
    </>
}