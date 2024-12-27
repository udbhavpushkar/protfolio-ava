"use client";
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";
import Button from "@/components/Button";

export default function Mvup() {
  return (
    <Layout>
      <div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <Button text="Back" href="/work" />
            <div className="text-3xl font-semibold mt-5">MVUP</div>
            <div className="bg-[#F8E8FF] p-3 rounded-xl text-2xl font-semibold mt-8">
              My Role: <br />
              <span className="font-normal">
                I handled all content-related tasks for the MVUP project. My
                responsibilities included:
              </span>
              <br />
              <ul className="list-disc ml-6">
                <li>
                  Content Designing:{" "}
                  <span className="font-normal">
                    Developed and optimized content across all touchpoints.
                  </span>
                </li>
                <li>
                  Branding & Marketing:{" "}
                  <span className="font-normal">
                    Developed content that aligned with MVUP’s brand and
                    educational goals including email marketing campaigns, and
                    meta ads.
                  </span>
                </li>
                <li>
                  Project Leadership:{" "}
                  <span className="font-normal">
                    Led the content development process, managed timelines, and
                    coordinated efforts across teams to ensure timely and
                    effective delivery of the project.
                  </span>
                </li>
              </ul>
            </div>

            <div className="my-5">
              <div className="text-3xl font-semibold">Overview</div>
              <div className="text-2xl">
                MVUP required a compelling and informative digital platform to
                promote its comprehensive technical courses for fresh graduates.
                <span className="bg-[#ffd7e5]">
                  The challenge was to present detailed informational content in
                  an easily navigable manner that would attract and convert
                  potential learners.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1325px] mx-auto py-10">
          <Vimeo
            className="w-full"
            width="1325"
            video="1012546454"
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
                The website needed to clearly communicate the value of the
                hands-on courses, their credibility, and the expertise of the
                trainers.
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-10 font-crimson ">
          <div className="text-3xl font-semibold">
            User Research Objectives:
          </div>
          <div className=" text-2xl mt-4">
            <ul className="list-disc ml-8">
              <li>Understand the target audience&apos;s needs and preferences.</li>
              <li>Identify pain points.</li>
              <li>
                Gather insights on how to effectively communicate course value,
                trainer credibility, and participant success stories.
              </li>
            </ul>
          </div>

        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">
              Surveys and Interviews:{" "}
            </div>
            <div className=" text-2xl mt-5">
              <ul className="list-disc ml-8">
                <li>
                  Distributed{" "}
                  <span className="bg-[#ffd7e5]"> online surveys</span> to
                  potential users to gather quantitative data on their
                  preferences and pain points.
                </li>
                <li>
                  Crafted <span className="bg-[#ffd7e5]">key questions </span>{" "}
                  focused on user experience and content clarity.
                </li>
                <li>
                  Conducted <span className="bg-[#ffd7e5]"> one-on-one</span>{" "}
                  interviews with a diverse group of graduates to understand
                  their needs.
                </li>
                <li>
                  Discussed their expectations, challenges faced, and what they
                  valued most in an educational platform.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto py-12 font-crimson">
            <div className="text-3xl font-semibold">
              Key Findings from User Research for the Mvup Project
            </div>
            <div className="text-2xl my-5">
              <span className="font-semibold italic py-10">
                Need for Clear Value Proposition:
              </span>{" "}
              Users expressed the
              <span className="bg-[#ffd7e5] semibold">
                {" "}
                importance of a straightforward explanation of the course
                benefits and unique features.{" "}
              </span>
              They wanted to understand what set the courses apart and how they
              would directly benefit from them.
            </div>
            <div className="text-2xl my-5">
              <span className="font-semibold italic py-10">
                Assured Internship:
              </span>{" "}
              There was a significant demand for guaranteed internships.
              Prospective
              <span className="bg-[#ffd7e5] semibold">
                {" "}
                students looked for assurance that they would gain practical
                experience{" "}
              </span>
              through internships as part of the course offerings.
            </div>
            <div className="text-2xl my-5">
              <span className="font-semibold italic py-10">
                Focus on Real-World Projects:
              </span>{" "}
              Users showed a clear preference for
              <span className="bg-[#ffd7e5] semibold">
                {" "}
                courses that emphasized practical learning through real-world
                projects.
              </span>
              They were less interested in traditional PowerPoint-based learning
              and more inclined towards hands-on, industry-relevant experiences.
            </div>
            <div className="text-2xl my-5 font-semibold ">
              Product Use Cases, Vision & USPs
            </div>
            <div className="flex flex-col justify-center items-center space-y-6 shadow-pink p-6 bg-[#FFFCDE] w-[1200px] h-[1174px] rounded">
              <Image
                className="mx-auto rounded-lg"
                src="/images/mvp1.png"
                alt="mvp1"
                height={531}
                width={1110}
              />
              <Image
                className="mx-auto rounded-lg"
                src="/images/mvp2.png"
                alt="mvp2"
                height={531}
                width={1110}
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto py-14 font-crimson">
            <div className="text-3xl font-semibold">
              Content Implementation Based on the User Research:
            </div>
            <div className=" text-2xl mt-8">
              <ul className="list-disc ml-8">
                <li>
                  <span className=" font-semibold italic ">
                    {" "}
                    Clear Value Proposition:
                  </span>{" "}
                  To address the need for a clear value proposition, the MVUP
                  landing page prominently features concise and impactful
                  messaging that outlines the course benefits and unique
                  features.
                </li>
                <li className="mt-8">
                  <span className=" font-semibold italic">
                    {" "}
                    Assured Internships:
                  </span>{" "}
                  Understanding the demand for guaranteed internships, we
                  highlighted information about assured internships.
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center mt-5 items-center space-y-6 shadow-pink p-6 bg-[#F2F2F2] rounded">
              <Image
                className="mx-auto rounded-lg"
                src="/images/frame-99.png"
                alt="mvp3"
                height={733}
                width={1200}
              />

            </div>

            {/* <Image
              className="mx-auto rounded-lg"
              src="/images/mvp3-frame.png"
              alt="mvp3"
              height={733}
              width={1200}
            /> */}
            <div className=" text-2xl mt-8">
              <ul className="list-disc ml-8">
                <li>
                  <span className=" font-semibold italic ">
                    {" "}
                    Demonstrated Credibility:
                  </span>{" "}
                  To showcase our industry credibility, I suggested a dynamic
                  strip at the bottom of the website displaying key achievements
                  of MVUP.
                </li>
              </ul>
              <div className="flex flex-col justify-center mt-5 items-center space-y-6 shadow-pink p-6 bg-[#F2F2F2] w-[1200px] rounded">
                <Image
                  className="mx-auto rounded-lg"
                  src="/images/frame-100.png"
                  alt="mvp4"
                  height={625}
                  width={1200}
                />

              </div>
            </div>
            {/* <div>
                  <Image
              className="mx-auto rounded-lg"
              src="/images/mvp4-frame.png"
              alt="mvp4"
              height={625}
              width={1200}
            />
            </div> */}
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto py-14 font-crimson">
            <div className="text-3xl font-semibold">
              Wireframes of some final designs:{" "}
            </div>
            <div className="flex flex-col justify-center mt-5 items-center space-y-6 shadow-pink p-6 bg-[#F2F2F2] w-[1200px] rounded">
              {" "}
              <Image
                className="mx-auto rounded-lg"
                src="/images/mvp5.png"
                alt="mvp3"
                height={605}
                width={918}
              />
              <Image
                className="mx-auto rounded-lg"
                src="/images/mvp6.png"
                alt="mvp4"
                height={439.24}
                width={918}
              />
              <Image
                className="mx-auto rounded-lg"
                src="/images/mvp7.png"
                alt="mvp4"
                height={439.24}
                width={918}
              />
            </div>
            {/* <div>
              <Image
                className="mx-auto p-5  rounded-lg"
                src="/images/mvp5-frame.png"
                alt="mvp3"
                height={1616}
                width={1200}
              />
            </div> */}
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto py-14 font-crimson">
            <div className="text-3xl font-semibold">Mobile View: </div>
            <div className=" flex justify-center items-center  mt-5  shadow-pink p-6 bg-[#F2F2F2] w-[1200px] h-[600px] rounded">
              <Image
                className="mx-auto rounded-lg"
                src="/images/mvp8.png"
                alt="mvp3"
                height={532}
                width={246}
              />
            </div>
            {/* <div>
              <Image
                className="mx-auto p-5  rounded-lg"
                src="/images/mvp6-frame.png"
                alt="mvp3"
                height={632}
                width={1200}
              />
            </div> */}
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto py-14 font-crimson">
            <div className="text-3xl font-semibold">
              Marketing Reel for MVUP:{" "}
            </div>
            <div className="flex justify-center items-center mt-5  shadow-pink p-6 bg-[#F2F2F2] w-[1200px] rounded">
              <div className="w-[375px] ">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/jFSl-CB-S4E?autoplay=1&loop=1&playlist=jFSl-CB-S4E"
                  title="YouTube Shorts Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">Result</div>
            <div className="my-5">
              <div className="text-2xl">
                MVUP successfully addressed the initial challenges, providing a
                clear and informative platform that effectively communicated
                complex information in simpler language, making it easier for
                the target audience (fresh graduates) to navigate and take
                quicker decision.
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center mt-5 rounded-lg shadow-xl p-6 bg-[#DADFFF] w-[1200px] h-[211px] ">
              <Image
                className="mx-auto rounded-lg "
                src="/images/mvp10.png"
                alt="mvp3"
                height={103}
                width={726}
              />
            </div>
            <div
              onClick={() => {
                window.location.assign("https://mvup.leanpitch.com/");
              }}
              className="rounded-3xl text-sm mt-4 font-semibold bg-[#0D1A71] text-white py-2 px-5 w-fit drop-shadow-sm cursor-pointer mx-auto"
            >
              Visit Mvup <span className="ml-2">→</span>
            </div>
          </div>
        </div>

        {/* <FooterBanner link="/work" text="See Main Projects" /> */}
      </div>
    </Layout>
  );
}
