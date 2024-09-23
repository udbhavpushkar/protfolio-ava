import Image from "next/image";
import React from "react";

const ContentDesign = () => {
    return <div className="bg-white">
        <div className="py-6 text-center max-w-[1325px] mx-auto">
            <div className="text-5xl font-bold my-6">Content Design Challenge</div>
            <div className="relative h-[623px] w-full my-4">
                <Image src="/images/svgs/content-design.png" alt="banner" fill />
            </div>
            <div className="mx-auto text-2xl rounded-[40px] mt-4 font-semibold bg-[#A80021] text-white py-3 px-5 w-fit">
                View All
            </div>
        </div>
    </div>
}

export default ContentDesign