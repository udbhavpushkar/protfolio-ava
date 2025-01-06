import React from "react";
import Image from "next/image";
import MediaCarousel from "../MediaCarousel";

const WinDisplay = ({ data }) => {
    const { mediaItems, title, text, reverse } = data
    return <div className="grid items-center justify-center py-4 px-36 grid-cols-2 gap-20">
        <div className={reverse ? "order-last" : ""}>
            <div className="flex justify-center items-center gap-6 mb-4 text-3xl font-semibold">
                <Image src="/images/svgs/win.svg" alt="wins" width={85} height={60} />
                <span className="">{title}</span>
            </div>
            <div className="text-2xl font-medium">{text}</div>
        </div>
        <div className="flex justify-center items-center ">
            <MediaCarousel mediaItems={mediaItems} width={500} height={300} />
        </div>
    </div>
}

export default WinDisplay