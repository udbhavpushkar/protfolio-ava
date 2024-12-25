'use client'
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import { CONTENT_STRATEGIST_1, CONTENT_STRATEGIST_2, CONTENT_STRATEGIST_3, CONTENT_STRATEGIST_4, CONTENT_STRATEGIST_5, item1 } from "./constants";
import Link from "next/link";
import ContentDesign from "@/components/Home/ContentDesign";
import { Glampies, Leanpitch, Mvup, Turient } from "@/components/Home/Projects";
import VideoPlayer from "@/components/VideoPlayer";
import ImageGallery from "@/components/ImageGallery";
import SquareCarousel from "@/components/SquareCarousal";

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
                    <div className="my-6">
                        <div className="text-3xl font-semibold mb-3">Visual Communication</div>
                        <ImageGallery list={CONTENT_STRATEGIST_1} />
                    </div>
                    <div className="my-3 grid grid-cols-3 gap-3">
                        <SquareCarousel images={CONTENT_STRATEGIST_3} />
                        <SquareCarousel images={CONTENT_STRATEGIST_4} />
                        <SquareCarousel images={CONTENT_STRATEGIST_3} />
                    </div>
                    <div className="my-3">
                        <div className="text-3xl font-semibold my-6">Storytelling (Script Writing | Conceptualisation | Strategy)</div>
                        <ImageGallery list={CONTENT_STRATEGIST_2} />
                    </div>
                    <div className="my-3">
                        <div className="text-3xl font-semibold my-6">Linkedin Article & blog</div>
                        <div className="grid grid-cols-3 gap-8">
                            {CONTENT_STRATEGIST_5.map((item, index) => (
                                <Image
                                    key={index}
                                    alt={item}
                                    src={item}
                                    width={350}
                                    height={350}
                                    className="w-100 min-w-full"
                                />
                            ))}

                        </div>
                    </div>
                    <div className="my-3">
                        <div className="text-3xl font-semibold my-6">Branding & Marketing</div>
                        <Image src="/images/solos.png" width={1325} height={766} alt="solos" />
                        <div className="text-3xl font-semibold my-6">Brand Name, Tag-line & Branding for an Ice Cream Brand</div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#ECEDFF]">
                <div className="max-w-[1325px] mx-auto font-crimson text-[#545794] text-center py-3 font-semibold">
                    Concept | Strategy| Story Boarding | Visualisation | Branding| Content Writing | Content Aesthetics
                </div>
            </div>
            <div className="bg-white w-full">
                <div className="max-w-[1325px] mx-auto font-crimson py-14">
                    <div className="text-4xl font-semibold">Work as a Content Creator</div>
                    <div className="text-2xl my-5">
                        As a content creator, I’ve had the privilege of collaborating with major brands such as TRESemmé, Dove,
                        Lakmé, Nivea, and 30+ other brands for Instagram collaboration, UGC content projects, and sponsored ads
                        content. These collaborations provided me valuable insights into diverse content strategies and brand goals
                        of famous brands, enhancing my understanding of how different brands approach content creation and engagement.
                    </div>
                    <div className="my-6">
                        <div className="text-3xl font-semibold mb-3">Meta X Lakmé Event</div>
                        <div className="text-2xl my-5">
                            Invited to the Meta X Lakmé event as a content creator. Networked and collaborated with various creators,
                            sharing insights and building connections.
                        </div>
                    </div>
                </div>
            </div>

            {/* <FooterBanner link="/work" text="See Main Projects" /> */}
        </div>
    </Layout>
}