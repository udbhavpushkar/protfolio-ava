'use client'
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import FooterBanner from "@/components/Footer/FooterBanner";
import { SKILLS, STRENGTHS } from "./constants";
import TalkToMe from "@/components/Home/TalkToMe";
import FadeInSection from "@/components/FadeInSection";

export default function Resume() {
    const words = ["Designer", "Strategist", "Creator"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [words.length]);

    return <Layout className="bg-[#ffffff97]">
        <div>
            <div className="max-w-[1325px] mx-auto font-crimson">
                <FadeInSection>
                    <div className="flex py-4 px-24 justify-between items-center">
                        {/* <div className="">
                            <Image src="/images/resume-banner.png" alt="banner" height={468} width={600} className="mt-12" />
                        </div> */}
                        <div className="flex flex-col items-center justify-center w-[650px] h-[550px] gap-4 rounded-[45px] bg-[#FFE5C7] mt-4">
                            <Image
                                alt="resume-image"
                                src="/images/svgs/resume-image.svg"
                                width={602}
                                height={420}
                                className="mb-2" // Use margin-bottom here for spacing between the image and text
                            />
                            <div className="text-[#652607] font-crimson text-[24px] font-semibold leading-[32px] text-center from-font text-decoration-skip-ink-none">
                                3+ Years | 4+ Products <br /> 0 Failures, Only Learnings
                            </div>
                        </div>

                        <div className="w-fit">
                            <div className="flex items-end justify-between">
                                <div className="text-4xl">
                                    Hey,
                                    <div>I’m Avantika Nayak, a</div>
                                </div>

                                <div className="ml-3">
                                    <Image alt="feather" src="/images/svgs/feather.svg" width={86} height={120} />
                                </div>
                            </div>
                            <div className="flex text-5xl my-8 text-[#A80021]">
                                <div className="italic font-medium">Content &nbsp;</div>
                                <div className="font-semibold">
                                    <span>{words[currentWordIndex]}</span>
                                    <div className="mt-2">
                                        <Image alt="line under words" src="/images/svgs/resume-line.svg" width={232} height={29} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <Link href="https://docs.google.com/document/d/110666TuAN_gosqA-mFXTGwo4l02_tz4dx3EwKRARpJ4/edit?usp=sharing" legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                        <div className="text-2xl rounded-[40px] mt-4 font-semibold bg-[#A80021] text-white py-3 px-5 w-fit">
                                            View Resume
                                        </div>
                                    </a>
                                </Link>
                                <Link href="https://docs.google.com/document/d/110666TuAN_gosqA-mFXTGwo4l02_tz4dx3EwKRARpJ4/export?format=pdf" >
                                    <div className="text-2xl rounded-[40px] mt-4 font-semibold bg-[#A80021] text-white py-3 px-5 w-fit">
                                        Download Resume - PDF
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <div className="my-16 ml-20 py-4 px-22">
                    <FadeInSection>
                        <div className="mb-8">
                            <div className="text-5xl font-bold mb-6">Strengths</div>
                            <div className="text-3xl font-crimson">
                                <p>
                                    These skill sets highlight my ability to design content that is <br />
                                    user-centred, strategically aligned, & adaptable across diverse platforms. </p>
                            </div>
                        </div>
                        <div className="mb-5">
                            {STRENGTHS.map(strength => (
                                <div key={strength.title} className="mb-4">
                                    <div className="text-4xl font-semibold">{strength.title}</div>
                                    <div className="text-2xl">{strength.text}</div>
                                </div>
                            ))}
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                        <div className="mt-14">
                            <div className="text-5xl font-bold mb-6">Skills</div>
                            <div className="grid grid-cols-3 gap-3">
                                {SKILLS.map((skill) => (
                                    <div key={skill} className="flex gap-3 items-center">
                                        <div>
                                            <Image src="/images/green-tick.png" alt="tick" height={25} width={25} />
                                        </div>
                                        <div className="text-3xl">{skill}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
            <FadeInSection>
                <TalkToMe />
                <FooterBanner link="/work" text="See Main Projects" />
            </FadeInSection>
        </div>
    </Layout>
}