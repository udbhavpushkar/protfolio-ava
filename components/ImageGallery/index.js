import Image from "next/image";
import React, { useState } from "react";

const ImageGallery = ({ list }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    const openModal = (url) => {
        setVideoUrl(url);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVideoUrl("");
    };

    return (
        <div className="py-4">
            {/* Scrollable div */}


            <div className="flex flex-nowrap overflow-x-auto space-x-4 scrollbar-hide">
                {list.map((item, index) => (
                    <div key={index} className="text-center w-[360px]">
                        <Image
                            height={350}
                            width={350}
                            src={item.image}
                            alt={`Thumbnail ${index + 1}`}
                            className="cursor-pointer rounded-lg"
                            onClick={() => openModal(item.video)}
                        />
                        <p className="mt-2 text-sm text-gray-600">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                    <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-lg font-semibold">Video</h2>
                            <button
                                onClick={closeModal}
                                className="text-black hover:text-red-500 text-lg font-bold"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="p-4">
                            <iframe
                                src={videoUrl}
                                title="YouTube Video"
                                className="w-full h-72"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
