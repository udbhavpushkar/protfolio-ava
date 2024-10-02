import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import Vimeo from '@u-wave/react-vimeo';

const MediaCarousel = ({ mediaItems, height, width }) => {

  return (
    <Carousel autoPlay infiniteLoop interval={6000} dynamicHeight width={width}>
      {mediaItems.map((item, index) => (
        <div key={index} className={`w-[${width}px] h-[${height}px] absolute`}>
          {item.type === 'image' ? (
            <Image
              className='rounded-3xl object-contain'
              src={item.src}
              alt={`media-${index}`}
              // width={width}
              // height={height}
              fill
            />
          ) : (
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              {item.type === "youtube" ?
                <iframe
                  width={width}
                  height={height}
                  src="https://www.youtube.com/embed/MV4q8XHUtwg?si=jnhdaW37m587R3eN"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen></iframe>
                : <Vimeo video={item.src} height={height} width={width} />}
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default MediaCarousel;
