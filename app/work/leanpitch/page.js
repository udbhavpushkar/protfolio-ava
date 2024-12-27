"use client";
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";
import {
  CHALLENGES_LIST,
  COMPETITOR_LIST,
  FINAL_RESULTS_LIST,
  IMPLEMENTATION_LIST,
  IMPLEMENTATION_LIST_2,
  KEY_FINDINGS,
  LESSONS_LEARNED,
  LIST_1,
  LIST_2,
  LIST_3,
  MARKET_SEGMENT_LIST,
  MEMBERSHIP,
  MEMBERSHIP_2,
  OBJECTIVES,
  TRENDS_LIST,
} from "./constants";
import Button from "@/components/Button";

export default function Leanpitch() {
  return (
    <Layout>
      <div>
        <div className="bg-white w-full">
          <div className="max-w-[1325px] mx-auto font-crimson py-14">
            <Button text="Back" href="/work" />
            <div className="text-4xl font-semibold mt-5">Leanpitch</div>
            <div className="bg-[#F8E8FF] p-3 rounded-xl text-2xl mt-8">
              <span className="font-semibold">My Role:</span> <br />
              As the Content Designer for Leanpitch, my role involved: <br />
              <ul className="list-disc ml-6">
                <li>
                  <span className="font-semibold">Content Strategy:</span>{" "}
                  Developed a comprehensive content strategy that aligned with
                  Leanpitch&apos;s brand identity and business goals.
                </li>
                <li>
                  <span className="font-semibold">Systems Thinking:</span>{" "}
                  Applied systems thinking to ensure consistency across all
                  touchpoints. This involved:
                  <ul className="list-disc ml-12">
                    <li>
                      <span className="font-semibold">Audits:</span> Conducted
                      thorough audits of existing content to identify gaps and
                      areas for improvement.
                    </li>
                    <li>
                      <span className="font-semibold">
                        Information Architecture:
                      </span>{" "}
                      Along with my team, I redesigned the information
                      architecture to create a logical and user-friendly
                      navigation structure.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Content Creation:</span>{" "}
                  Wrote, edited, and optimized all website content, including
                  course descriptions, blogs, and newsletters.
                </li>
                <li>
                  <span className="font-semibold">Collaboration:</span> Worked
                  closely with UX designers, developers, and marketing teams to
                  ensure a cohesive integration of content, design, and
                  functionality.
                </li>
                <li>
                  <span className="font-semibold">Project Management:</span> Led
                  the content redesign process, set project timelines, and
                  coordinated efforts across different teams to ensure timely
                  completion and high-quality output.
                </li>
              </ul>
            </div>
            <div className="my-5">
              <div className="text-3xl font-semibold">Overview</div>
              <div className="text-2xl">
                An innovative ed-tech platform designed to cater to the needs of
                agile and scrum enthusiasts, trainees seeking certification, and
                professionals looking to enhance their skills in product
                management. Leanpitch stands out in Indian and international
                markets with hands-on, experiential workshops and a community of
                over 30,000 agile and scrum enthusiasts.
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1325px] mx-auto py-10">
          <Vimeo
            className="w-full"
            width="1325"
            video="1012542472"
            autoplay
            loop
            muted
          />
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">Problem Statement:</div>
            <div className="my-5">
              <div className="text-2xl">
                Leanpitch required a comprehensive redesign of their website
                content and brand communication to better reflect their
                expertise in agile and product management training. The existing
                content was fragmented and lacked a cohesive narrative that
                could effectively convey the brand’s value proposition. The
                challenge was{" "}
                <span className="bg-[#ffd7e5]">
                  {" "}
                  to create a streamlined, engaging, and user-centric content
                  redesign that would enhance brand perception as industry
                  experts and drive higher engagement and conversions.
                </span>
                <br />
              </div>
            </div>
            <div className="bg-[#F4F0E7] rounded-lg shadow-xl mx-auto py-10 my-8">
              <Image
                className="mx-auto"
                src="/images/lp1.png"
                alt="lp1"
                height={326}
                width={1092}
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-10 font-crimson">
          <div className="text-3xl font-semibold">User Research</div>
          <Image
            className="mx-auto rounded shadow my-6"
            src="/images/lp2.png"
            alt="lp2"
            height={628}
            width={1200}
          />
          <Image
            className="mx-auto rounded-xl shadow my-10"
            src="/images/lp3.png"
            alt="lp2"
            height={1834}
            width={1200}
          />
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">
              Key factors influencing user’s decisions
            </div>
            <div className="my-5">
              <div className="text-2xl">
                The user research provided insights into what drives consumers
                to choose Leanpitch&apos;s training programs over the
                competitors. By identifying the primary motivations we
                highlighted what matters most to users.
              </div>
            </div>
            <div className="rounded-lg shadow-b-pink- w-full mt-10">
              <Image
                className="mx-auto "
                src="/images/lp4.png"
                alt="design"
                height={440}
                width={632}
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">
              Key Findings from the user research
            </div>
            <div className="my-5">
              <div className="text-2xl">
                {KEY_FINDINGS.map((item, index) => (
                  <div key={index}>
                    <span className="font-semibold">
                      {index + 1}. {item.title}
                    </span>
                    : {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-3xl font-semibold mt-16 ">User Personas</div>

            <div className="text-2xl mt-4">
              After analysing all the data points from our user research, I
              created user personas to guide us in the content redesign process.
            </div>

            <div className="my-5">
              <Image
                className="mx-auto rounded-lg shadow-xl"
                style={{ border: "12px solid #9EA0CC" }}
                src="/images/lp5.png"
                alt="design"
                height={575}
                width={1200}
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">Market Research :</div>
            <div className="my-5">
              <div className="text-2xl mt-6">
                The market research study aimed at analysing the market
                landscape, identifing opportunities for growth, and providing
                actionable insights to enhance Leanpitch&apos;s market position.
              </div>
            </div>

            <div className="text-3xl font-semibold mt-16">
              Key Market Segments:
            </div>
            <div className="my-5 text-2xl">
              <ul className="list-disc ml-8 text-[#626262] italic">
                {MARKET_SEGMENT_LIST.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-3xl font-semibold mt-16">
              Emerging Trends & opportunities:
            </div>
            <div className="my-5 text-2xl">
              <ul className="list-disc ml-8 text-[#626262] italic">
                {TRENDS_LIST.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-3xl font-semibold mt-16">
              Competitor Analysis :
            </div>
            <div className="my-5 text-2xl">
              <div>
                The competitor analysis for Leanpitch reveals key insights into
                the strengths and weaknesses of major players in the agile and
                scrum training market.
                <br />
                <br />
                Competitor analysis included:
                <br />
                <br />
                <ul className="list-disc ml-8 text-[#626262] italic">
                  {COMPETITOR_LIST.map((item, index) => (
                    <li key={index}>
                      <span className="font-semibold">{item.title} : </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-3xl font-semibold mt-16">
              Key challenges identified for Leanpitch based on comprehensive
              user, market, and competitor research:
            </div>
            <div className="my-5 text-2xl">
              <ul className="list-disc ml-8 text-[#626262] italic">
                {CHALLENGES_LIST.map((item, index) => (
                  <li key={index}>
                    <span className="font-semibold">{item.title} : </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-5 bg-[#F4F0E7] rounded-xl shadow-pink ">
              <Image
                className="mx-auto rounded-xl"
                src="/images/lp6.png"
                alt="design"
                height={803}
                width={1200}
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-5xl mt-4">
              <span className="font-semibold">Implementation 01:</span>{" "}
              Designing Tailored Learning Experience
            </div>
            <div className="my-5 text-2xl">
              <div>
                Designing a personalized and engaging learning path for learners
                required a deep understanding of their individual needs,
                preferences, and goals. It began by{" "}
                <span className="bg-[#ffd7e5]">
                  {" "}
                  conducting thorough learner assessments to identify their
                  current knowledge level, learning styles, and areas for
                  improvement.
                </span>
                <br />
                <br />
                Creating a personalized and engaging learning path required a{" "}
                <span className="bg-[#ffd7e5]">
                  combination of empathy, creativity, and adaptability to meet
                  the unique needs of each learner.
                </span>
                <br />
                <br />
              </div>
              <div>
                This includes:
                <ul className="list-disc ml-8 text-[#626262] italic">
                  {IMPLEMENTATION_LIST.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-3xl font-semibold mt-16">
              Information Architecture and user flows for the redesign :
            </div>
            <div className="my-5 text-2xl">
              <div>
                By adopting a learner-centric approach and leveraging various
                training modes, we created tailored learning experiences that
                cater to the diverse needs and preferences of learners.
              </div>
            </div>
            <div className="my-5 bg-[#202D41] rounded-xl shadow-pink ">
              <Image
                className="mx-auto "
                src="/images/lp7-try.png"
                alt="design"
                height={1241}
                width={1200}
              />
            </div>
            <div className="text-3xl font-semibold mt-16">Final Design:</div>

            <div className="my-8 bg-[#F0F6FB] rounded-xl shadow-pink">
              <Image
                className="mx-auto  "
                src="/images/lp8.png"
                alt="design"
                height={1154}
                width={1200}
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-5xl mt-4">
              <span className="font-semibold">Implementation 02:</span>{" "}
              Fostering Community Engagement
            </div>
            <div className="my-5 text-2xl">
              <div>
                Leanpitch had successfully built a strong community of over
                30,000 agile and scrum enthusiasts. However, they faced issues
                in keeping the community engaged and active.
              </div>
              <div className="mt-8">
                key issues:
                <ul className="list-disc ml-8 text-[#626262] italic">
                  {IMPLEMENTATION_LIST_2.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-3xl font-semibold mt-16">
              Solution:  A Community Platform ‘The Perceptors’{" "}
            </div>
            <div className="my-5 text-2xl">
              <div>
                <span className="bg-[#ffd7e5]">
                  We created a space where industry experts can connect with
                  aspiring professionals to share their knowledge, insights, and
                  best practices.{" "}
                </span>
                Preceptors is more than just a platform - it&apos;s a
                community-driven ecosystem{" "}
                <span className="bg-[#ffd7e5]">
                  dedicated to empowering individuals to excel in their careers
                  and achieve their professional aspirations.
                </span>
                <br />
                <br />
                This overview highlights{" "}
                <span className="bg-[#ffd7e5]">
                  {" "}
                  the strategies we used to foster and engage the community and
                  the innovative methods we used to keep it active and growing.
                </span>
              </div>
            </div>
            <div className="my-5 bg-[#F4F0E7] rounded-xl shadow-pink">
              <Image
                className="mx-auto  "
                src="/images/lp9.png"
                alt="design"
                height={1241}
                width={1200}
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-5xl mt-4">
              <span className="font-semibold">Implementation 03:</span> Prime
              Membership Program
            </div>
            <div className="my-5 text-2xl">
              <div>
                To enhance leanpitch’s value proposition and cater to the needs
                of dedicated learners, we introduced the Prime Membership
                program. This overview explores the Prime Membership&apos;s
                objectives, implementation, benefits, market reception, and
                impact on Leanpitch&apos;s overall growth and customer
                satisfaction.
              </div>
            </div>

            <div className="text-3xl font-semibold mt-16">
              User Journey Mapping for Prime Membership Program{" "}
            </div>

            <div className="my-5 bg-[#F4F0E7] rounded-xl shadow-pink">
              <Image
                className="mx-auto "
                src="/images/lp10.png"
                alt="design"
                height={1241}
                width={1200}
              />
            </div>
            <div className="text-3xl font-semibold mt-16">
              Objectives for Prime Membership Program:{" "}
            </div>
            <div className="mt-5">
              {OBJECTIVES.map((item, index) => (
                <div key={index}>
                  <div>
                    <span className=" text-2xl font-semibold ">
                      {item.title}{" "}
                    </span>{" "}
                    <span className="text-2xl">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-3xl font-semibold mt-16">
              Key Features of Prime Membership Program:{" "}
            </div>
            <div className="mt-5">
              <ol className="list-decimal ml-6">
                {MEMBERSHIP.map((item, index) => (
                  <li key={index} className="text-2xl ">
                    <span className="font-semibold">{item.title}</span>{" "}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="text-3xl font-semibold mt-16">
              Outcomes of Prime Membership Program:{" "}
            </div>
            <div className="my-5 text-2xl">
              <div>
                The Prime Membership program has seen slow growth since its
                inception, with monthly subscriptions increasing by 3-4% on
                average. But it started to gain momentum in subsequent months
                with the subscriptions increasing to almost 9% monthly.
              </div>
            </div>
            <div className="mt-5">
              <ul className="list-disc ml-6">
                {MEMBERSHIP_2.map((item, index) => (
                  <li key={index} className="text-2xl">
                    <span className="font-semibold">{item.title}</span>{" "}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-5 bg-[#F4F0E7] rounded-xl shadow-pink">
              <Image
                className="mx-auto  "
                src="/images/lp11.png"
                alt="design"
                height={1241}
                width={1200}
              />
            </div>
            <div className="text-3xl font-semibold mt-16">Final Results: </div>
            <div className="my-5 text-2xl">
              <div>
                Leanpitch website redesign addressed all initial challenges,
                creating a cohesive and engaging digital experience that
                effectively communicated the brand&apos;s value and fostered a
                strong, active community.
                <br />
                <br />
                key results include
              </div>
            </div>
            <div className="mt-5">
              <ul className="list-disc ml-6">
                <li className="text-2xl ">
                  {" "}
                  <span className="font-semibold">
                    {" "}
                    Increased User Engagement:
                  </span>{" "}
                  Higher engagement metrics, such as{" "}
                  <span className="bg-[#ffd7e5]">
                    time spent on the site, page views, and interaction with key
                    content elements.{" "}
                  </span>
                </li>
                {FINAL_RESULTS_LIST.map((item, index) => (
                  <li key={index} className="text-2xl">
                    <span className="font-semibold">{item.title}</span>{" "}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="my-5 bg-[#F5EAFF]  rounded-xl shadow-pink ">
              <Image
                className="mx-auto  "
                src="/images/lp12.png"
                alt="design"
                height={295}
                width={1200}
              />
            </div>
            <div className="text-3xl font-semibold mt-16">
              Lessons Learned:{" "}
            </div>

            <div className="mt-5">
              <ul className="list-disc ml-10">
                {LESSONS_LEARNED.map((item, index) => (
                  <li key={index} className="text-2xl mb-5">
                    <span className="font-semibold">{item.title}</span>{" "}
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              onClick={() => {
                window.location.assign("https://leanpitch.com/");
              }}
              className="rounded-3xl text-sm mt-10 font-semibold bg-[#2B3F9A] text-white py-2 px-5 w-fit drop-shadow-sm cursor-pointer mx-auto"
            >
              Visit Leanpitch<span className="ml-2">→</span>
            </div>
          </div>
        </div>

        {/* <FooterBanner link="/work" text="See Main Projects" /> */}
      </div>
    </Layout>
  );
}