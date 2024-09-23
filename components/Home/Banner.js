import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
    return <div className="flex py-6 max-w-[1325px] mx-auto">
        <div className="relative h-96 w-[60%]">
            <Image alt="home-pic-1" src="/images/svgs/home-ava.svg" fill />
        </div>
        <div className="w-[40%]">
            <div className="flex text-7xl font-extrabold items-end">
                <div>Hello &</div>
                <div className="ml-3">
                    <Image alt="feather" src="/images/svgs/feather.svg" width={86} height={120} />
                </div>
            </div>
            <div className="text-7xl font-extrabold">Namaste !</div>
            <div className="font-medium mt-8 text-4xl leading-snug">
                <div>I’m Avantika Nayak, a </div>
                <div className="text-[#A80021] text-[40px]">Content Designer & Strategist</div>
                <div>based in India. </div>
            </div>
            <Link href="">
                <div className="text-2xl rounded-[40px] mt-4 font-semibold bg-[#A80021] text-white py-3 px-5 w-fit">See Resume</div>
            </Link>
        </div>
    </div>
}

export default Banner