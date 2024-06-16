import LowerCard from "./Components/LowerCard";
import Image from "next/image";
import restaurantPic from '../../public/restaurant.png'
import MainCard from "./Components/MainCard";


export default function MainBody() {
    return <>
        <div className="min-h-[700px] flex flex-col">
            <Image
                src={restaurantPic}
                className="test"
                alt="Picture of the restaurant"
                fill={true}
            />
            <MainCard /> 
        </div>
    </>

}

//className="img-setting"