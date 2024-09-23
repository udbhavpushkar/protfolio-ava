import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = (props) => {
    return <div className="bg-white">
        <div className='flex py-4 px-16 justify-between items-center max-w-[1325px] mx-auto'>
            <div>
                <div>
                    <Image className="rotate-90" alt="feather" src="/images/svgs/feather.svg" width={40} height={80} />
                </div>
                <div className="text-3xl font-semibold">Avantika Nayak</div>
                <div>avantikanayak68184@gmail.com</div>
                <div>+ 91 8317465595</div>
            </div>
            <div>
                <div>Lets Connect</div>
                <div className="flex justify-between">
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
            </div>
            <div></div>
        </div>
    </div>
}

export default Footer