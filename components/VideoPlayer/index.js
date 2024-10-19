import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

const VideoPlayer = ({ videoId, imageUrl, width, height }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Trigger image for opening the modal */}
            <Image
                className="cursor-pointer"
                width={width}
                height={height}
                src={imageUrl}
                alt="Play Video"
                onClick={() => setIsOpen(true)}
            />

            {/* Modal video component */}
            <ModalVideo
                channel='youtube'
                isOpen={isOpen}
                videoId={videoId}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
};

export default VideoPlayer;
