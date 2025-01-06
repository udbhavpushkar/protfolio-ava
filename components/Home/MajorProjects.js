import Image from "next/image";
import React from "react";
import { Glampies, Leanpitch, Mvup, Turient } from "./Projects";
import { useRouter } from "next/navigation";

const MajorProjects = () => {
    const router = useRouter()
    return <div className="py-6 max-w-[1325px] mx-auto">
        <div className="text-5xl  font-bold my-6 flex justify-center">
            <div className="mr-3">
                <Image src="/images/svgs/book.svg" alt="banner" height={30} width={40} />
            </div>
            <div>
                Major Projects
            </div>
        </div>
        <div className=" font-crimson grid grid-cols-2 gap-8 py-4 px-32">
            <Turient />
            <Leanpitch />
            <Glampies />
            <Mvup />
        </div>
        <div className="mx-auto text-2xl rounded-[40px] mt-4 font-crimson font-semibold bg-[#A80021] text-white py-3 px-5 w-fit cursor-pointer" onClick={() => { router.push("/work") }}>
            Explore All Work →
        </div>
    </div>
}

export default MajorProjects