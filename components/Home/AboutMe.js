import Image from "next/image";
import React from "react";
import Vimeo from '@u-wave/react-vimeo';
import { useRouter } from "next/navigation";

const AboutMe = () => {
    const router = useRouter()
    return <div className="bg-white">
        <div className="py-16 font-crimson px-32 flex gap-16 items-center max-w-[1325px] mx-auto">
            <div className="w-2/5 mr-12">
                <div className="flex">
                    <div className="ml-3">
                        <Image alt="feather" src="/images/svgs/feather.svg" width={56} height={80} />
                    </div>
                    <div className="text-5xl font-bold my-6">About Me</div>
                </div>
                <div className="font-medium text-2xl">
                    <p>I’m a Writer, Design Thinker and a ‘Versatile Performer’ who thrives under spotlight. </p>
                    <br />
                    <p>
                        Content has always been my passion and escape,
                        so eventually, I decided to turn it into my full-time career.
                    </p>
                </div>
                <div onClick={() => { router.push("/about") }} className="text-2xl rounded-[40px] mt-4 font-semibold bg-[#A80021] text-white py-3 px-5 w-fit cursor-pointer">
                    Know More →
                </div>
            </div>
            <div className="ml-20">
                <Vimeo video="1012429720" className="w-full"
                    width="313"
                    height="525"
                />
            </div>
        </div>
    </div>
}

export default AboutMe