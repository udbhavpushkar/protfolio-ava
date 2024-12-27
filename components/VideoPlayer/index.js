import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

const VideoPlayer = ({ videoId, imageUrl, width, height, insta }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (insta) {
            window.open(insta, "_blank")
        } else {
            setIsOpen(true)
        }
    }

    return (
        <>
            {/* Trigger image for opening the modal */}
            <Image
                className="cursor-pointer"
                width={width}
                height={height}
                src={imageUrl}
                alt="Play Video"
                onClick={handleClick}
            />

            {/* Modal video component */}
            <ModalVideo
                channel='youtube'
                isOpen={isOpen}
                videoId={videoId ? videoId : ""}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default VideoPlayer;
