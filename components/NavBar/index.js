import Image from "next/image";
import React from "react";
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

    return <div className="w-full fixed navbar" style={{ top: "0px", zIndex: "40" }}> 
        <div className='flex py-2 px-16 justify-between items-center max-w-[1325px] mx-auto'>
            <div onClick={() => { router.push("/") }} className="flex items-center cursor-pointer">
                <div className="text-xl font-bold">Avantika Nayak</div>
                <div>
                    <Image alt="feather" src="/images/svgs/feather.svg" width={35} height={70} />
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
    </div>
}

export default Navbar