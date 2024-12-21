import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation'

const NAV_ITEMS = [
    { name: "Work", link: "/work" },
    { name: "Wins", link: "/wins" },
    { name: "Resume", link: "/resume" },
    { name: "About", link: "/about" },
]

const Navbar = () => {
    const router = useRouter()
    const pathname = usePathname()

    return <div className='flex py-4 px-16 justify-between items-center max-w-[1325px] mx-auto'>
        <div onClick={() => { router.push("/") }} className="flex items-center cursor-pointer">
            <div className="text-2xl font-bold">Avantika Nayak</div>
            <div>
                <Image alt="feather" src="/images/svgs/feather.svg" width={40} height={80} />
            </div>
        </div>
        <div className="flex">
            {NAV_ITEMS.map((item) => (
                <div key={item.name} onClick={() => { router.push(item.link) }} className={`${pathname === item.link ? "text-[#A80021]" : ""} mr-5 font-semibold cursor-pointer`}>
                    <div>{item.name}</div>
                    {pathname === item.link && <div className="relative h-1">
                        <Image alt="feather" src="/images/svgs/underline1.svg" fill />
                    </div>}

                </div>
            ))}
        </div>
    </div>
}

export default Navbar