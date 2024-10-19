import Image from "next/image";
import React from "react";
import VideoPlayer from "../VideoPlayer";

const AboutMe = () => {
    return <div className="bg-white">
        <div className="py-16 px-32 flex gap-16 items-center max-w-[1325px] mx-auto">
            <div className="w-2/5 mr-12">
                <div className="flex">
                    <div className="ml-3">
                        <Image alt="feather" src="/images/svgs/feather.svg" width={56} height={80} />
                    </div>
                    <div className="text-5xl font-bold my-6">About Me</div>
                </div>
                <div className="font-medium">
                    <p>I’m a Writer, Design Thinker and a ‘Versatile Performer’ who thrives under spotlight. </p>
                    <p>
                        Content has always been my passion & escape,
                        so eventually, I decided to turn it into my full-time career.
                    </p>
                </div>
                <div className="text-2xl rounded-[40px] mt-4 font-semibold bg-[#A80021] text-white py-3 px-5 w-fit">
                    Know More
                </div>
            </div>
            <div>
                <VideoPlayer videoId={'ivukpkSMoYQ'} imageUrl="/images/video-1.png" width={313} height={525} />
            </div>
        </div>
    </div>
}

export default AboutMe