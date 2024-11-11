'use client'
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Vimeo from '@u-wave/react-vimeo';
import { AUDIENCE_CARDS, CHALLENGES_LIST, COMPETITOR_LIST, IMPLEMENTATION_LIST, KEY_FINDINGS, MARKET_SEGMENT_LIST, TRENDS_LIST, USER_RESEARCH_LIST } from "./constants";

export default function Glampies() {
    return <Layout>
        <div>
            <div className="bg-white w-full">
                <div className="max-w-[1325px] mx-auto font-crimson py-14">
                    <div className="text-4xl font-semibold">The Glampies : A Glamourous Gateaway!</div>
                    <div className="bg-[#F8E8FF] p-3 rounded-xl text-2xl font-semibold mt-8">
                        My Role: <br />
                        As the Content Designer for the Glampies, my role encompassed:: <br />
                        <ul className="list-disc ml-6">
                            <li>
                                Content Designing: Developed comprehensive content that aligned with
                                Glampies&apos; brand identity and business goals. This included defining the
                                tone of voice, key messages, and content structure.
                            </li>
                            <li>
                                Content Creation: I was responsible for <span className="text-[#8329AA]">all content-related tasks, including
                                    designing, writing, editing, and testing clear, compelling in-product language,</span>
                                ensuring it was engaging, informative, and persuasive. This included Content for
                                all the service descriptions, error messages, button naming, navigational
                                nomenclature and taxonomies
                            </li>
                            <li>
                                Collaboration: Worked closely with UX designers, web developers, and marketing teams to
                                ensure the content was seamlessly integrated into the website’s design and met user needs.
                            </li>
                            <li>
                                Project Management: Led the content creation process, set timelines, and
                                coordinated with various stakeholders to ensure the project stayed on track and
                                met all deadlines.
                            </li>
                        </ul>
                    </div>
                    <div className="my-5">
                        <div className="text-3xl font-semibold">
                            Overview
                        </div>
                        <div className="text-2xl">
                            The case study highlights the significance of strategic branding and user-centric
                            content design in redefining luxury camping experiences. By meticulously understanding
                            the target audience “affluent travellers seeking opulent yet authentic outdoor
                            retreats” <span className="bg-[#ffd7e5]">I curated the brand identity and user-centric content that helped
                                Glampies resonate with its target audience.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto py-10 font-crimson">
                <Image className="mx-auto rounded-xl shadow my-10" src="/images/gl1.png" alt="lp2" height={625} width={1200} />
            </div>
            <div className="bg-white w-full">
                <div className="max-w-[1200px] mx-auto font-crimson py-14">
                    <div className="text-3xl font-semibold">Problem Statement:</div>
                    <div className="my-5">
                        <div className="text-2xl">
                            Glampies needed a compelling online presence that would effectively communicate
                            the unique value proposition of their luxurious glamping experiences. The challenge
                            was to blend the essence of glamour and camping into a seamless, engaging narrative
                            that would attract potential customers and set Glampies apart in a competitive market.
                            <br />
                            <br />
                            The website had to <span className="bg-[#ffd7e5]">highlight the high-end amenities and breathtaking natural
                                settings, while also providing a user-friendly experience that would guide visitors
                                smoothly from curiosity to booking.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto py-10 font-crimson">
                <div className="text-3xl font-semibold">Understanding The Audience:</div>
                <div className="my-5 text-2xl">
                    Before diving into Content design, it was crucial to comprehend our target demographic.
                    <br />
                    <br />
                    Glampies aimed to attract affluent travellers seeking unique outdoor experiences without
                    compromising on comfort and luxury. This demographic valued exclusivity, authenticity,
                    and impeccable service. They sought to escape the hustle and bustle of city life while
                    indulging in lavish amenities amidst picturesque natural settings.
                </div>
                <div className="rounded-xl shadow-lg w-full p-6 grid grid-cols-3 gap-6 bg-[#F4F0E7]">
                    {AUDIENCE_CARDS.map((item, index) => (
                        <div style={{ backgroundColor: `#${item.color}` }} className={`px-4 py-6 rounded-md shadow-md`} key={`k_${index}`}>
                            <div className="text-2xl font-semibold mb-6">{item.title}</div>
                            {item.list.map((listItem, listIndex) => (
                                <div key={listIndex} className="mb-2">
                                    <div className="text-xl font-medium">{listItem.title}</div>
                                    <div>{listItem.text}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white w-full">
                <div className="max-w-[1200px] mx-auto font-crimson py-14">
                    <div className="text-3xl font-semibold">User Research :</div>
                    {USER_RESEARCH_LIST.map((item, index) => (
                        <div key={index} className="my-5">
                            <div className="text-3xl font-semibold">{item.title} :</div>
                            <div className="text-2xl">{item.text}</div>
                        </div>
                    ))}



                </div>
            </div>
            {/* <FooterBanner link="/work" text="See Main Projects" /> */}
        </div>
    </Layout>
}