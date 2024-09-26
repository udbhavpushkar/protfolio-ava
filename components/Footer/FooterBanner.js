import Link from "next/link";
import React from "react";

const FooterBanner = ({ link, text }) => {
    return <div className="w-full py-20 flex justify-center bg-[#B6BAF9] font-crimson">
        <Link href={link}>
            <div className="text-2xl rounded-[40px] font-semibold bg-[#0D1255] text-white py-3 px-5 w-fit">{text}</div>
        </Link>
    </div>
}

export default FooterBanner