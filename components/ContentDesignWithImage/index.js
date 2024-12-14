import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContentDesignWithImage = ({ children, image, isLeft }) => {
    return <div className={`flex w-100 ${isLeft ? "flex-row-reverse" : ""}`}>
        <div className="bg-[#F2F2F2] px-3 py-5 w-[55%]">
            {children}
        </div>
        <div className="w-[45%]"><Image src={image} width={700} height={610} alt="cdimg" /></div>
    </div>
}

export default ContentDesignWithImage