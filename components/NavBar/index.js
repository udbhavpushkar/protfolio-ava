import Image from "next/image";
import React from "react";

const Navbar = (props) => {
    return <div className='flex py-4 px-16 justify-between items-center max-w-[1325px] mx-auto'>
        <div className="flex items-center">
            <div className="text-2xl font-bold">Avantika</div>
            <div>
                <Image alt="feather" src="/images/svgs/feather.svg" width={40} height={80} />
            </div>
        </div>
        <div className="flex">
            <div className="mr-5 font-semibold">Work</div>
            <div className="mr-5 font-semibold">Wins</div>
            <div className="mr-5 font-semibold">Resume</div>
            <div className="mr-5 font-semibold">About</div>
        </div>
    </div>
}

export default Navbar