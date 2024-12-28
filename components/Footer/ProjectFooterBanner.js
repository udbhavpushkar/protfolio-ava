import Link from "next/link";
import React from "react";

const ProjectFooterBanner = ({ link, isLast }) => {
    return <div className="w-full py-20 flex justify-around bg-[#B6BAF9] font-crimson">
        <Link href="/work#design">
            <div className="text-2xl rounded-[40px] font-semibold bg-[#0D1255] text-white py-3 px-5 w-fit flex items-center gap-4">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </div>
                <div>
                    All Projects
                </div>
            </div>
        </Link>
        {!isLast && <Link href={link}>
            <div className="text-2xl rounded-[40px] font-semibold bg-[#0D1255] text-white py-3 px-5 w-fit flex items-center gap-4">
                <div>
                    Next Project
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>
        </Link>}

    </div>
}

export default ProjectFooterBanner