import Image from "next/image";
import restaurantPic from '../../../public/restaurant.png';
import ContactCard from "./ContactCard";

export default function ContactBody() {
    return <>
    <div className="min-h-[600px] flex flex-col relative p-10 ">
        <Image
            src={restaurantPic}
            className="test"
            alt="Picture of the restaurant"
            fill={true}
        />
        <ContactCard />
    </div>
    </>

}