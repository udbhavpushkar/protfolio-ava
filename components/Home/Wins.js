import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6"

const WIN_DATA = [
    { image: "win1.png", text: "University Gold Medalist: President’s Award" },
    { image: "win2.png", text: "Achieved CSPO & CSM Certifications" },
    { image: "win3.png", text: "Best Outgoing Student Award" },
    { image: "win4.png", text: "Guest Speaker at DY Patil College" },
    { image: "win5.png", text: `Anchoring Events & Recording Educational\nE-Learning Content` },
]

const Wins = () => {
    return <div className="bg-[#ffffffcd]">
        <div className="py-6 text-center max-w-[1220px] mx-auto">
            <div className="flex items-center">
                <div className="mr-3">
                    <Image src="/images/svgs/win.svg" alt="win" height={60} width={75} />
                </div>
                <div className="text-5xl font-bold my-6">Wins</div>
                <div className="text-[#A80021] font-semibold ml-auto cursor-pointer flex items-center">
                    <div className="mr-2">See all</div>
                    <div><FaArrowRight /></div>
                </div>
            </div>
            <div className="relative flex items-center">
                <div id="slider" className="w-full h-full flex items-start overflow-x-scroll scroll gap-4 whitespace-nowrap scroll-smooth scrollbar-hide">
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