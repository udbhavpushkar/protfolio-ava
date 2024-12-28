import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import DesignCarousel from "../MediaCarousel/DesignCarousel";

const ContentDesign = () => {
    const router = useRouter()
    return <div className="bg-white">
        <div className="py-6 max-w-[1325px] mx-auto flex flex-col items-center">
            <div className="text-5xl font-bold my-6">Content Design Challenge</div>
            <DesignCarousel />
            <div onClick={() => { router.push("/content-design") }} className="mx-auto text-2xl cursor-pointer rounded-[40px] mt-4 font-semibold bg-[#A80021] text-white py-3 px-5 w-fit">
                View All
            </div>
        </div>
    </div>
}

export default ContentDesign