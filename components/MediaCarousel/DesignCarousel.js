import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const LIST = Array.from({ length: 15 }, (_, index) => index + 1);

const DesignCarousel = () => {
    return <Carousel autoPlay infiniteLoop interval={2000} width={1000} showThumbs={false} showStatus={false} showIndicators={false}>
        {LIST.map((item, index) => {
            const image = `d${item}.png`
            return <div key={index} className="mt-2">
                <Image src={`/images/cd/${image}`} alt={image} width={1000} height={500} />
            </div>
        })}
    </Carousel>
}

export default DesignCarousel