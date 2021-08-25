import Image from "next/image";

const InfoCard = ({img, location, title, description, star, price, total}) => {
    return (
        <div>
            <div>
                <Image src={img}/>
            </div>
        </div>
    )
}

export default InfoCard
