import Image from "next/image";
import React from "react";
import style from "../style.module.css"
import Link from "next/link";

const TalkToMe = () => {
    return <div className={`bg-white font-crimson`}>
        <div className={`${style.talk_gradient}`}>
            <div className="py-6 text-center max-w-[900px] mx-auto">
                <div className="font-semibold mb-3 text-3xl">Talk to me. I am Fabulous!</div>
                <div className="text-[#A80021] font-medium mt-3 text-3xl">
                    <span className="mr-2" style={{ textDecoration: "underline" }}>
                        <Link className="underline" href="mailto:avantikanayak68184@gmail.com">
                            avantikanayak68184@gmail.com
                        </Link>
                    </span>
                    |
                    <span className="ml-2">
                        <Link href="tel:+918317465595">
                            +91 8317465595
                        </Link>
                    </span>
                </div>
                <div className="rounded-2xl shadow-lg flex px-3 py-4 w-9/12 mx-auto bg-white my-4">
                    <div className="mr-3">
                        <Image className="rounded-full" width={100} height={100} src="/images/avantika1.JPG" alt="avantika" />
                    </div>
                    <div className="text-left">
                        <div className="font-semibold text-xl">Avantika Nayak</div>
                        <div className="mb-3 font-medium">Content Designer | Content Strategist | Content Creator</div>
                        <div onClick={() => { window.open("https://www.linkedin.com/in/avantika-nayak/", "_blank") }} className="border-[#2A67BC] border-2 w-fit py-1 px-4 rounded-3xl font-medium cursor-pointer text-[#2A67BC]">View Profile</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default TalkToMe