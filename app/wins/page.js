'use client'
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import FooterBanner from "@/components/Footer/FooterBanner";
import WinDisplay from "@/components/Wins/WinDisplay";

const items = [
    {
        mediaItems: [
            { type: 'image', src: '/images/slider/1.png' },
            { type: 'image', src: '/images/slider/2.png' },
            { type: 'image', src: '/images/slider/3.png' },
        ],
        title: `University Gold Medalist: President’s Award`,
        text: `Awarded the University Gold Medal by the University
            President for excelling in academics and demonstrating
            exceptional achievements in co-curricular activities
            during my college years.`,
        reverse: false
    },
    {
        mediaItems: [
            { type: 'image', src: '/images/slider/4.png' },
            { type: 'image', src: '/images/slider/5.png' },
        ],
        title: `Achieved CSPO & CSM Certifications`,
        text: `Certified by Scrum Alliance as a CSPO (Certified Scrum Product Owner)
         and CSM (Certified ScrumMaster), I gained deep insights into agile and dynamic 
         work environments. These certifications have equipped me with knowledge of product
          development processes, sprints, retrospectives, agile methodologies,
           and more, enabling me to write numerous expert blogs on Agile and Scrum topics.`,
        reverse: true
    },
    {
        mediaItems: [
            { type: 'image', src: '/images/slider/6.png' },
            { type: 'image', src: '/images/slider/7.png' },
            { type: 'image', src: '/images/slider/8.png' },
        ],
        title: `Anchoring Events & Recording Educational E-Learning Content`,
        text: `Successfully anchored various events and recorded educational e-learning
         content, showcasing my ability to engage audiences and deliver informative 
         and compelling videos`,
        reverse: false
    },
    {
        mediaItems: [
            { type: 'image', src: '/images/slider/9.png' },
            { type: 'image', src: '/images/slider/10.png' },
            { type: 'image', src: '/images/slider/11.png' },
        ],
        title: `Guest Speaker at DY Patil  College`,
        text: `Invited as a guest speaker at DY Patil Hospitality College to
         deliver a lecture on “Professional Communication,” sharing insights and
          expertise with aspiring hospitality professionals.`,
        reverse: true
    },
    {
        mediaItems: [
            { type: 'image', src: '/images/slider/12.png' },
            { type: 'image', src: '/images/slider/13.png' },
        ],
        title: `Best Outgoing Student Award`,
        text: `This prestigious award is given to the most promising senior
         of the university after a series of competitive rounds. Judged by 
         both academic excellence and co-curricular achievements, I was honoured
          to be recognised as the best-performing student across all criteria.`,
        reverse: false
    },
]

export default function Wins() {

    return <Layout>
        <div>
            <div className="max-w-[1325px] mx-auto font-crimson">
                <div className="flex justify-center">
                    <Image src="/images/svgs/win.svg" alt="wins" width={421} height={330} />
                </div>
                {items.map((item, index) => <WinDisplay key={`item_${index}`} data={item} />)}
            </div>
            <FooterBanner link="/work" text="See Main Projects" />
        </div>
    </Layout>
}