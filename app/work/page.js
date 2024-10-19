'use client'
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import FooterBanner from "@/components/Footer/FooterBanner";
import { CONTENT_STRATEGIST_1, item1 } from "./constants";
import Link from "next/link";
import ContentDesign from "@/components/Home/ContentDesign";
import { Glampies, Leanpitch, Mvup, Turient } from "@/components/Home/Projects";
import VideoPlayer from "@/components/VideoPlayer";

export default function Work() {
    return <Layout>
        <div>
            <div className="max-w-[1325px] mx-auto font-crimson">
                <div className="grid  md:grid-cols-3 md:gap-8 sm:grid-cols-1 pt-14 pb-24">
                    {item1.map((item, index) => (
                        <div key={index} className="bg-white text-center pt-12 pb-8 shadow-2xl" style={{ borderRadius: "200px 200px 10px 10px" }}>
                            <div>
                                <Image className="mx-auto" alt={item.title} src={`/images/${item.image}`} width={124} height={124} />
                            </div>
                            <div className="my-7 text-4xl font-semibold">
                                {item.title}
                            </div>
                            <div className="w-2/3 mx-auto text-xl text-gray-600">
                                {item.text}
                            </div>
                            <div className="mt-6 text-2xl font-semibold">
                                <Link className="text-pink-600 underline" href={item.link}>See Work</Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ContentDesign />
            <div className="w-full h-3"></div>
            <div className="bg-white w-full">
                <div className="max-w-[1325px] mx-auto font-crimson py-14">
                    <div className="text-4xl font-semibold">As a Content Designer</div>
                    <div className="text-2xl my-5">
                        I’ve successfully contributed to developing 4 major products, from the conceptual stage to
                        deployment. My role involves close collaboration with cross-functional teams, ensuring that
                        content design aligns with overall product goals and user needs.
                    </div>
                    <div className="grid grid-cols-2 gap-8 py-4">
                        <Turient />
                        <Leanpitch />
                        <Glampies />
                        <Mvup />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#ECEDFF]">
                <div className="max-w-[1325px] mx-auto font-crimson text-[#545794] text-center py-3 font-semibold">
                    UxWriting | Content Designing | User Research | Market Research | Design Thinking |
                    User Persona | Information Architecture | Taxonomy | Navigation Nomenclature
                </div>
            </div>
            <div className="bg-white w-full">
                <div className="max-w-[1325px] mx-auto font-crimson py-14">
                    <div className="text-4xl font-semibold">As a Content Strategist</div>
                    <div className="text-2xl my-5">
                        As a seasoned content strategist, I excel in transforming complex information into engaging, easily digestible
                        content. I often communicate my thoughts through a blend of text and visuals, ensuring clarity and
                        simplicity. Through this approach, I ensure that every piece of content is both impactful and accessible.
                    </div>
                    <div className="relative flex items-center">
                        <div id="slider" className="w-full h-full flex items-start overflow-x-scroll scroll gap-4 whitespace-nowrap scroll-smooth scrollbar-hide">
                            {CONTENT_STRATEGIST_1.map((data, index) => (
                                <div key={index} className="text-center max-w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
                                    <div className="shadow-md rounded-[14px]">
                                        {/* <Image src={`/images/${data.image}`} alt={data.image} fill /> */}
                                        <VideoPlayer videoId={data.videoId} imageUrl={`/images/${data.image}`} width={350} height={350} />
                                    </div>
                                    <div>{data.text.split('\n').map(text => <React.Fragment key={text}>
                                        {text}
                                        <br />
                                    </React.Fragment>)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* <FooterBanner link="/work" text="See Main Projects" /> */}
        </div>
    </Layout>
}