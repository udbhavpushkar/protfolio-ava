import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = (props) => {
    return <div className="bg-white font-crimson">
        <div className='flex py-4 px-16 justify-between items-center max-w-[1325px] mx-auto'>
            <div>
                <div>
                    <Image className="rotate-90" alt="feather" src="/images/svgs/feather.svg" width={40} height={80} />
                </div>
                <div className="text-3xl font-semibold">Avantika Nayak</div>
                <div>avantikanayak68184@gmail.com</div>
                <div>+ 91 8317465595</div>
            </div>
            <div className="mt-28">
                <div className="text-center text-xl font-semibold mb-3">Lets Connect</div>
                <div className="flex justify-center mb-4 gap-4">
                    <Link href="">
                        <Image alt="insta" src="/images/svgs/insta.svg" width={20} height={20} />
                    </Link>
                    <Link href="">
                        <Image alt="insta" src="/images/svgs/linkedin.svg" width={20} height={20} />
                    </Link>
                    <Link href="">
                        <Image alt="insta" src="/images/svgs/gmail.svg" width={20} height={20} />
                    </Link>
                </div>
                <div>Made with 💓 by Avantika Nayak</div>
            </div>
            <div className="flex text-xl gap-5 mt-6">
                <div className="flex flex-col">
                    <div className="text-2xl">Work</div>
                    <div>
                        <Link href="">Content Designer</Link>
                    </div>
                    <div>
                        <Link href="">Content Strategist</Link>
                    </div>
                    <div>
                        <Link href="">Content Creator</Link>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl">Quick Links</div>
                    <div>
                        <Link href="/resume">Resume</Link>
                    </div>
                    <div>
                        <Link href="/wins">Wins</Link>
                    </div>
                    <div>
                        <Link href="/about">About</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Footer