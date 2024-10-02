import React from "react";
import Image from "next/image";
import MediaCarousel from "../MediaCarousel";

const WinDisplay = ({ data }) => {
    const { mediaItems, title, text, reverse } = data
    return <div className="grid py-4 px-36 grid-cols-2 gap-6">
        <div className={reverse ? "order-last" : ""}>
            <div className="flex items-center mb-4">
                <div>
                    <Image src="/images/svgs/win.svg" alt="wins" width={75} height={60} />
                </div>
                <div className="text-4xl font-semibold">{title}</div>
            </div>
            <div className="text-2xl font-medium">{text}</div>
        </div>
        <div>
            <MediaCarousel mediaItems={mediaItems} width={500} height={300} />
        </div>
    </div>
}

export default WinDisplay