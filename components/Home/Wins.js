import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6"

const WIN_DATA = [
    { image: "win1.png", text: "University Gold Medalist: President’s Award" },
    { image: "win2.png", text: "Achieved CSPO & CSM Certifications" },
    { image: "win4.png", text: "Guest Speaker at DY Patil College" },
    { image: "win5.png", text: `Anchored Events & Recorded Educational\nE-Learning Content` },
    { image: "win3.png", text: "Best Outgoing Student Award" },
]

const Wins = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        let intervalId = setInterval(() => {
            if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
                slider.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: 400, behavior: "smooth" });
            }
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return <div className="bg-[#ffffffcd]">
        <div className="py-6 text-center max-w-[1220px] mx-auto">
            <div className="flex items-center">
                <div className="mr-3">
                    <Image src="/images/svgs/win.svg" alt="win" height={60} width={75} />
                </div>
                <div className="text-5xl font-bold my-6">Wins</div>
                <Link href="/wins" className="text-[#A80021] font-extrabold ml-auto cursor-pointer flex items-center hover:underline">
                    <div className="mr-2">See all</div>
                    <div><FaArrowRight /></div>
                </Link>
            </div>
            <div className="relative flex items-center font-crimson">
                <div id="slider" ref={sliderRef} className="w-full h-full flex items-start overflow-x-scroll scroll gap-4 whitespace-nowrap scroll-smooth scrollbar-hide">
                    {WIN_DATA.map((data, index) => (
                        <div key={index} className="text-center max-w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                            <div className="w-[380px] h-[222px] relative shadow-md rounded-[14px]">
                                <Image src={`/images/${data.image}`} alt={data.image} fill />
                            </div>
                            <div>{data.text.split('\n').map(text => <React.Fragment key={text}>
                                {text}
                                <br />
                            </React.Fragment>)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
}

export default Wins