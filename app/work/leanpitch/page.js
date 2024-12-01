'use client'
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Vimeo from '@u-wave/react-vimeo';
import { CHALLENGES_LIST, COMPETITOR_LIST, IMPLEMENTATION_LIST, KEY_FINDINGS, LIST_1, LIST_2, LIST_3, MARKET_SEGMENT_LIST, TRENDS_LIST } from "./constants";

export default function Leanpitch() {
    return <Layout>
        <div>
            <div className="bg-white w-full">
                <div className="max-w-[1325px] mx-auto font-crimson py-14">
                    <div className="text-4xl font-semibold">Leanpitch</div>
                    <div className="bg-[#F8E8FF] p-3 rounded-xl text-2xl font-semibold mt-8">
                        My Role: <br />
                        As the Content Designer for Leanpitch, my role involved: <br />
                        <ul className="list-disc ml-6">
                            <li>
                                Content Strategy: Developed a comprehensive content strategy that aligned with Leanpitch’s brand identity and business goals.
                            </li>
                            <li>
                                Systems Thinking: Applied systems thinking to ensure consistency across all touchpoints. This involved:
                                <ul className="list-disc ml-12">
                                    <li>Audits: Conducted thorough audits of existing content to identify gaps and areas for improvement.</li>
                                    <li>Information Architecture: Along with my team I redesigned the information architecture to create a logical and user-friendly navigation structure.</li>
                                </ul>
                            </li>
                            <li>Content Creation: Wrote, edited, and optimized all website content, including course descriptions, blogs, and newsletters</li>
                            <li>Collaboration: Worked closely with UX designers, developers, and marketing teams to ensure a cohesive integration of content, design, and functionality.</li>
                            <li>Project Management: Led the content redesign process, set project timelines, and coordinated efforts across different teams to ensure timely completion and high-quality output.</li>
                        </ul>
                    </div>
                    <div className="my-5">
                        <div className="text-3xl font-semibold">
                            Overview
                        </div>
                        <div className="text-2xl">
                            An innovative ed-tech platform designed to cater to the needs of agile and scrum enthusiasts,
                            trainees seeking certification, and professionals looking to enhance their skills in product management.
                            <br />
                            Leanpitch stands out in Indian and international markets with hands-on, experiential
                            workshops and a community of over 30,000 agile and scrum enthusiasts.
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1325px] mx-auto py-10">
                <Vimeo className="w-full" width="1325" video="1012542472" />
            </div>
            <div className="bg-white w-full">
                <div className="max-w-[1200px] mx-auto font-crimson py-14">
                    <div className="text-3xl font-semibold">Problem Statement:</div>
                    <div className="my-5">
                        <div className="text-2xl">
                            Leanpitch required a comprehensive redesign of their website content and brand
                            communication to better reflect their expertise in agile and product management training.
                            <br />
                            The existing content was fragmented and lacked a cohesive narrative that could effectively
                            convey the brand’s value proposition. The challenge was <span className="bg-[#ffd7e5]"> to create a streamlined,
                                engaging, and user-centric content redesign that would enhance brand perception as
                                industry experts and drive higher engagement and conversions.</span>
                            <br />
                        </div>
                    </div>
                    <div className="bg-[#F4F0E7] rounded-lg shadow-xl mx-auto py-10 my-8">
                        <Image className="mx-auto" src="/images/lp1.png" alt="lp1" height={326} width={1092} />
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto py-10 font-crimson">
                <div className="text-3xl font-semibold">User Research</div>
                <Image className="mx-auto rounded shadow my-6" src="/images/lp2.png" alt="lp2" height={628} width={1200} />
                <Image className="mx-auto rounded-xl shadow my-10" src="/images/lp3.png" alt="lp2" height={1834} width={1200} />

            </div>
            <div className="bg-white w-full">
                <div className="max-w-[1200px] mx-auto font-crimson py-14">
                    <div className="text-3xl font-semibold">Key factors influencing user’s decisions</div>
                    <div className="my-5">
                        <div className="text-2xl">
                            The user research provided insights into what drives consumers to choose
                            Leanpitch&apos;s training programs over the competitors. By identifying the primary
                            motivations we highlighted what matters most to users.
                        </div>
                    </div>
                    <div className="rounded-lg shadow-b-pink- w-full mt-10">
                        <Image className="mx-auto " src="/images/lp4.png" alt="design" height={440} width={632} />
                    </div>
                </div>
            </div>
            <div className="bg-white w-full">
                <div className="max-w-[1200px] mx-auto font-crimson py-14">
                    <div className="text-3xl font-semibold">Key Findings from the user research </div>
                    <div className="my-5">
                        <div className="text-2xl">
                            {KEY_FINDINGS.map((item, index) => (
                                <div key={index}>
                                    <span className="font-semibold">{index + 1}. {item.title}</span>: {item.text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="text-3xl font-semibold mt-16 mb-12">User Personas</div>
                    <div className="my-5">
                        <Image className="mx-auto rounded-lg shadow-xl" style={{ border: "12px solid #9EA0CC" }} src="/images/lp5.png" alt="design" height={575} width={1200} />
                    </div>
                </div>
            </div>
            <div className="bg-white w-full">
                <div className="max-w-[1200px] mx-auto font-crimson py-14">
                    <div className="text-3xl font-semibold">Market Research :</div>
                    <div className="my-5">
                        <div className="text-2xl mt-6">
                            The market research study aimed at analysing the market landscape, identifing opportunities
                            for growth, and providing actionable insights to enhance Leanpitch&apos;s market position.
                        </div>
                    </div>

                    <div className="text-3xl font-semibold mt-16">Key Market Segments:</div>
                    <div className="my-5 text-2xl">
                        <ul className="list-disc text-[#626262] italic">
                            {MARKET_SEGMENT_LIST.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-3xl font-semibold mt-16">Emerging Trends & opportunities:</div>
                    <div className="my-5 text-2xl">
                        <ul className="list-disc text-[#626262] italic">
                            {TRENDS_LIST.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="text-3xl font-semibold mt-16">Competitor Analysis :</div>
                    <div className="my-5 text-2xl">
                        <div>
                            The competitor analysis for Leanpitch reveals key insights into the strengths
                            and weaknesses of major players in the agile and scrum training market.
                            <br />
                            <br />
                            Competitor analysis included:
                            <br />
                            <br />
                            <ul className="list-disc text-[#626262] italic">
                                {COMPETITOR_LIST.map((item, index) => (
                                    <li key={index}><span className="font-semibold">{item.title} : </span>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-3xl font-semibold mt-16">
                        Key challenges identified for Leanpitch based on comprehensive user, market,
                        and competitor research:
                    </div>
                    <div className="my-5 text-2xl">
                        <ul className="list-disc text-[#626262] italic">
                            {CHALLENGES_LIST.map((item, index) => (
                                <li key={index}><span className="font-semibold">{item.title} : </span>{item.text}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-5">
                        <Image className="mx-auto rounded-lg shadow-xl" src="/images/lp6.png" alt="design" height={803} width={1200} />
                    </div>
                    <div className="text-5xl mt-16">
                        <span className="font-semibold">Implementation 01:</span> Designing Tailored Learning Experience
                    </div>
                    <div className="my-5 text-2xl">
                        <div>
                            Designing a personalized and engaging learning path for learners required a deep
                            understanding of their individual needs, preferences, and goals. It began by <span className="bg-[#ffd7e5]"> conducting thorough
                                learner assessments to identify their current knowledge level, learning styles, and areas for improvement.
                            </span>
                            <br />
                            <br />
                            Creating a personalized and engaging learning path required a <span className="bg-[#ffd7e5]">combination of empathy, creativity,
                                and adaptability to meet the unique needs of each learner.</span>
                            <br />
                            <br />
                        </div>
                        <div>
                            This includes:
                            <ul className="list-disc text-[#626262] italic">
                                {IMPLEMENTATION_LIST.map((item, index) => (
                                    <li key={index}>{item}</li> 
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="text-3xl font-semibold mt-16">Low-fidelity mockups </div>
                    <div className="my-5 text-2xl">
                        <div>
                            During the low-fidelity (low-fi) mockup stage, I collaborated with UX designers to draft and refine interface
                            language, ensuring clarity and user alignment. I established initial content structures and navigational
                            elements, focusing on user flows. This stage involved refining terminology and taxonomies for consistency
                            and usability across the product.
                        </div>
                        <div className="rounded-lg shadow-xl mt-8 py-6 w-full bg-[#F4F0E6]">
                            <Image className="mx-auto" src="/images/table8.png" alt="design" height={1264} width={1024} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <FooterBanner link="/work" text="See Main Projects" /> */}
        </div>
    </Layout>
}