import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const SquareCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="flex flex-col gap-4 space-y-4">
            <div className="relative">
                <Image
                    width={350}
                    height={350}
                    src={images[currentIndex]}
                    alt="carousel"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default SquareCarousel;
