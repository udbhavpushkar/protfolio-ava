'use client'
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import ContentDesign from "@/components/Home/ContentDesign";
import { Glampies, Leanpitch, Mvup, Turient } from "@/components/Home/Projects";
import VideoPlayer from "@/components/VideoPlayer";

export default function Work() {
    return <Layout>
        <div>
            <div className="bg-white w-full">
                <div className="max-w-[1325px] mx-auto font-crimson py-14">
                    <div className="text-4xl font-semibold">
                        Content Design Challenge
                    </div>
                    <div className="bg-[#FDD49D] w-max px-3 py-2 mt-4" style={{ borderRadius: "0 20px 20px 0" }}>Created Content + Designed using Figma</div>
                    <div className="my-5">
                        <div className="text-3xl font-semibold">Overview</div>
                        <div className="text-2xl">

                            Over the 15-day content design challenge, using <span className="bg-[#ffd7e5]">Figma I designed a variety of user-centric designs ,
                                focusing on clarity, engagement, and user needs.</span> Each day&apos;s task was a fresh opportunity to create
                            impactful content designs.
                            <br />
                            <br />
                            My approach was methodical and ensured that each piece not only met the daily requirements but also stood out as
                            a unique creation, <span className="bg-[#ffd7e5]">showcasing my ability to innovate and adapt across different design scenarios.</span>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-3"></div>
        </div>
    </Layout>
}