import Link from "next/link";
import React from "react";


const Button = ({ text, href }) => {
    return <Link className="rounded-3xl bg-[#FF8099] text-white cursor-pointer px-6 py-3 flex w-fit gap-3" href={href}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        {text}
    </Link>
}

export default Button