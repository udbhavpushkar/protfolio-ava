import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
    return <div className="flex pt-5 pb-16 max-w-[1325px] mx-auto">
        <div className="relative h-100 w-[60%] left-[-4%] ">
            <Image alt="home-pic-1" src="/images/svgs/resume-image.svg" layout="fill" />
        </div>
        <div className="w-[40%]">
            <div className="flex text-7xl font-extrabold items-end">
                <div>Hello &</div>
                <div className="ml-3">
                    <Image alt="feather" src="/images/svgs/feather.svg" width={86} height={120} />
                </div>
            </div>
            <div className="text-7xl font-extrabold">Namaste !</div>
            <div className="font-crimson font-medium mt-8 text-4xl leading-snug">
                <div>I&rsquo;m Avantika Nayak, a </div>
                <div className="text-[#A80021] text-[40px]">Content Designer & Strategist</div>
                <div>based in India. </div>
                <div>Member of the <span className="relative inline-block">&lsquo;Can Do&rsquo;
                    <img src="/images/svgs/resume-line.svg" alt="Line Design" className="absolute bottom-[-10px] left-0 w-full max-w-[200px]" />
                </span> club!</div>
            </div>
            <Link href="/resume">
                <div className="text-2xl rounded-[40px] mt-4 font-crimson font-semibold bg-[#A80021] text-white py-3 px-5 w-fit">See Resume</div>
            </Link>
        </div>
    </div>
}

export default Banner