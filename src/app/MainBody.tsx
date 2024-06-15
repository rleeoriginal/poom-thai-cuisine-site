import MainCard from "./Components/MainCard";
import LowerCard from "./Components/LowerCard";
import Image from "next/image";
import restaurantPic from '../../public/restaurant.png'

export default function MainBody() {
    return <>
        <div className="min-h-[500px]">
            <Image
                src={restaurantPic}
                className="test"
                alt="Picture of the restaurant"
            />
            <MainCard />
            
        </div>
    </>

}

/*

            <Image
                src={restaurantPic}
                className="bg-img"
                alt="Picture of the restaurant"
            />

*/