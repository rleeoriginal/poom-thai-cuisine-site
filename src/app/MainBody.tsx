
import Image from "next/image";
import restaurantPic from '../../public/restaurant.png'
import MainCard from "./Components/MainCard";


export default function MainBody() {
    return <>
        <div className="min-h-[500px] flex flex-col relative p-10 ">
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