import Image from "next/image";
import React from "react";

export const Turient = () => {
    return <div className="bg-[#E3E6FF] rounded-2xl flex py-5 pl-7 items-center drop-shadow-lg">
        <div className="w-3/5">
            <div className="text-2xl font-semibold mt-3">Turient : Your Online School!</div>
            <div className="text-slate-600 mt-3 font-medium">
                Spearheaded content-related tasks, including designing,
                writing, editing, and testing clear, compelling in-product language
            </div>
            <div className="rounded-3xl text-sm mt-4 font-semibold bg-[#323C98] text-white py-2 px-5 w-fit drop-shadow-sm">See Full Project</div>
        </div>
        <div className="mr-3 ml-3">
            <Image src="/images/turient.png" alt="turient" width={137} height={179} />
        </div>
    </div>
}

export const Leanpitch = () => {
    return <div className="bg-[#E8F9FF] rounded-2xl flex py-5 pl-7 items-center drop-shadow-lg">
        <div className="w-3/5">
            <div className="text-2xl font-semibold mt-3">Leanpitch </div>
            <div className="text-slate-600 mt-3 font-medium">
                Led Leanpitch content strategy, ensuring cohesive systems thinking,
                user-friendly architecture, optimised content, and cross-team collaboration.
            </div>
            <div className="rounded-3xl text-sm mt-4 font-semibold bg-[#065D7D] text-white py-2 px-5 w-fit drop-shadow-sm">See Full Project</div>
        </div>
        <div className="mr-3 ml-3">
            <Image src="/images/lp.png" alt="lp" width={137} height={179} />
        </div>
    </div>
}

export const Glampies = () => {
    return <div className="bg-[#EAFFF5] rounded-2xl flex py-5 pl-7 items-center drop-shadow-lg">
        <div className="w-3/5">
            <div className="text-2xl font-semibold mt-3">The Glampies </div>
            <div className="text-slate-600 mt-3 font-medium">
                Designed content strategy that aligned with the brand identity and
                business goals. This included defining the tone of voice, key messages, and content structure.
            </div>
            <div className="rounded-3xl text-sm mt-4 font-semibold bg-[#005B2D] text-white py-2 px-5 w-fit drop-shadow-sm">See Full Project</div>
        </div>
        <div className="mr-3 ml-3">
            <Image src="/images/svgs/glampies.svg" alt="glampies" width={137} height={179} />
        </div>
    </div>
}

export const Mvup = () => {
    return <div className="bg-[#E3E6FF] rounded-2xl flex py-5 pl-7 items-center drop-shadow-lg">
        <div className="w-3/5">
            <div className="text-2xl font-semibold mt-3">MVUP: Move UP</div>
            <div className="text-slate-600 mt-3 font-medium">
                Developed MVUP content design and strategies for branding and marketing, optimized touchpoints,
                and united cross-team efforts for timely delivery.
            </div>
            <div className="rounded-3xl text-sm mt-4 font-semibold bg-[#323C98] text-white py-2 px-5 w-fit drop-shadow-sm">See Full Project</div>
        </div>
        <div className="mr-3 ml-3">
            <Image src="/images/mvup.png" alt="mvup" width={137} height={179} />
        </div>
    </div>
}