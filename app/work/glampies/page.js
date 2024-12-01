"use client";
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";
import {
  AUDIENCE_CARDS,
  CHALLENGES_LIST,
  COMPETITOR_LIST,
  CONTENT_IDENTITY_LIST,
  IMPLEMENTATION_LIST,
  KEY_FINDINGS,
  LANGUAGE_LIST,
  MARKET_SEGMENT_LIST,
  MESSAGING_LIST,
  OUTCOMES_LIST,
  TRENDS_LIST,
  USER_RESEARCH_LIST,
} from "./constants";

export default function Glampies() {
  return (
    <Layout>
      <div>
        <div className="bg-white w-full">
          <div className="max-w-[1325px] mx-auto font-crimson py-14">
            <div className="text-4xl font-semibold">
              The Glampies : A Glamourous Gateaway!
            </div>
            <div className="bg-[#F8E8FF] p-3 rounded-xl text-2xl  mt-8">
              <span className="font-semibold">
                My Role: <br />
                As the Content Designer for the Glampies, my role encompassed:{" "}
              </span>
              <br />
              <ul className="list-disc ml-6">
                <li>
                  <span className="font-semibold">Content Designing:</span>{" "}
                  Developed comprehensive content that aligned with
                  Glampies&apos; brand identity and business goals. This
                  included defining the tone of voice, key messages, and content
                  structure.
                </li>
                <li>
                  <span className="font-semibold">Content Creation:</span> I was
                  responsible for{" "}
                  <span className="text-[#8329AA] font-semibold">
                    all content-related tasks, including designing, writing,
                    editing, and testing clear, compelling in-product language,
                  </span>
                  ensuring it was engaging, informative, and persuasive. This
                  included Content for all the service descriptions, error
                  messages, button naming, navigational nomenclature and
                  taxonomies
                </li>
                <li>
                  <span className="font-semibold">Collaboration:</span> Worked
                  closely with UX designers, web developers, and marketing teams
                  to ensure the content was seamlessly integrated into the
                  website’s design and met user needs.
                </li>
                <li>
                  <span className="font-semibold">Project Management:</span> Led
                  the content creation process, set timelines, and coordinated
                  with various stakeholders to ensure the project stayed on
                  track and met all deadlines.
                </li>
              </ul>
            </div>
            <div className="my-5">
              <div className="text-3xl font-semibold">Overview</div>
              <div className="text-2xl">
                The case study highlights the significance of strategic branding
                and user-centric content design in redefining luxury camping
                experiences. By meticulously understanding the target audience
                “affluent travellers seeking opulent yet authentic outdoor
                retreats”{" "}
                <span className="bg-[#ffd7e5]">
                  I curated the brand identity and user-centric content that
                  helped Glampies resonate with its target audience.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-10 font-crimson">
          <Image
            className="mx-auto rounded-xl shadow my-10"
            src="/images/gl1.png"
            alt="lp2"
            height={625}
            width={1200}
          />
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">Problem Statement:</div>
            <div className="my-5">
              <div className="text-2xl">
                Glampies needed a compelling online presence that would
                effectively communicate the unique value proposition of their
                luxurious glamping experiences. The challenge was to blend the
                essence of glamour and camping into a seamless, engaging
                narrative that would attract potential customers and set
                Glampies apart in a competitive market.
                <br />
                <br />
                The website had to{" "}
                <span className="bg-[#ffd7e5]">
                  highlight the high-end amenities and breathtaking natural
                  settings, while also providing a user-friendly experience that
                  would guide visitors smoothly from curiosity to booking.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-10 font-crimson">
          <div className="text-3xl font-semibold">
            Understanding The Audience:
          </div>
          <div className="my-5 text-2xl">
            Before diving into Content design, it was crucial to comprehend our
            target demographic.
            <br />
            <br />
            Glampies aimed to attract affluent travellers seeking unique outdoor
            experiences without compromising on comfort and luxury. This
            demographic valued exclusivity, authenticity, and impeccable
            service. They sought to escape the hustle and bustle of city life
            while indulging in lavish amenities amidst picturesque natural
            settings.
          </div>
          <div className="rounded-xl shadow-lg w-full p-6 grid grid-cols-3 gap-6 bg-[#F4F0E7]">
            {AUDIENCE_CARDS.map((item, index) => (
              <div
                style={{ backgroundColor: `#${item.color}` }}
                className={`px-4 py-6 rounded-md shadow-md`}
                key={`k_${index}`}
              >
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
            <div className="text-2xl">
              Once we collected the research data,{" "}
              <span className="bg-[#ffd7e5]">
                I analysed the findings to identify patterns, trends, and
                actionable insights that would define the content design
                decisions.
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-10 font-crimson">
          <Image
            className="mx-auto rounded-xl shadow my-10"
            src="/images/gl2.png"
            alt="gl2"
            height={625}
            width={1200}
          />
          <div className="italic text-l text-center">
            1st draft of the user journey mapping based on the initial user
            research
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">
              Information Architecture:
            </div>
            <div className="my-5">
              <div className="text-2xl">
                Based on the user research and sales team suggestions, I
                developed the information architecture for Glampies&apos; website.
                Structured the content to optimize navigation, making
                information easily accessible and engaging.
                <br />
                <br />
                My primary goal was to{" "}
                <span className="bg-[#ffd7e5]">
                  ensure that the website meets users needs while supporting
                  business objectives effectively.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-10 font-crimson">
          <Image
            className="mx-auto rounded-xl shadow my-10"
            src="/images/gl3.png"
            alt="gl3"
            height={625}
            width={1200}
          />
          <div className="italic text-l text-center">
            Information Architecture for Glampies
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">
              Brand’s Content Identity:
            </div>
            <div className="my-5">
              <div className="text-2xl">
                It was crucial to articulate a clear and compelling content
                identity that encapsulates our brand&apos;s essence and resonates
                deeply with our target audience. Hence to establish an emotional
                connection with our audience, I developed a compelling brand
                narrative centred around the concept of{" "}
                <span className="bg-[#ffd7e5]">
                  &apos;Reconnect with Nature, Rediscover Luxury’.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[1200px] mx-auto py-10 font-crimson">
          <div className="rounded-xl shadow-lg w-full p-6  bg-[#F4F0E7]">
            <Image
              className="mx-auto rounded-xl shadow my-10"
              src="/images/gl4.png"
              alt="gl4"
              height={509}
              width={709}
            />
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">Brand Voice</div>
            <div className="my-1">
              <div className="text-2xl">
                Here&apos;s a detailed explanation of our content identity:
              </div>
              <div className="max-w-[1200px] mx-auto font-crimson py-10">
                <div className="text-3xl font-semibold">Tone</div>
                {CONTENT_IDENTITY_LIST.map((item, index) => (
                  <div key={index} className="my-5">
                    <div className="text-3xl font-semibold italic">
                      {item.title} :
                    </div>
                    <div className="text-2xl">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-10 font-crimson">
          <div className="rounded-xl shadow-lg w-full p-6 flex justify-between  bg-[#F4F0E7]">
            <Image
              className="mx-auto my-10"
              src="/images/gl5-a.png"
              alt="gl4"
              height={629}
              width={597}
            />
            <Image
              className="mx-auto rounded-xl shadow my-10"
              src="/images/gl5-b.png"
              alt="gl4"
              height={531}
              width={245}
            />
            <Image
              className="mx-auto rounded-xl shadow my-10"
              src="/images/gl5-c.png"
              alt="gl4"
              height={531}
              width={244}
            />
          </div>
          <div className="italic text-l text-center">
            “Get Notified” Pop-up message content
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">Language</div>
            {LANGUAGE_LIST.map((item, index) => (
              <div key={index} className="my-5">
                <div className="text-3xl font-semibold italic">
                  {item.title}
                </div>
                <div className="text-2xl"> {item.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className=" max-w-[1200px] mx-auto py-10 font-crimson">
          <div className="rounded-xl shadow-lg w-full p-6 bg-[#F4F0E7]">
            <Image
              className="mx-auto "
              src="/images/gl6.png"
              alt="gl6 "
              height={525}
              width={274}
            />
          </div>
          <div className="italic text-l text-center">Offer Pop-ups</div>
        </div>
        <div className="bg-white w-full ">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">Key Messaging pillars</div>
            {MESSAGING_LIST.map((item, index) => (
              <div key={index} className="my-5">
                <div className="text-3xl font-semibold italic">
                  {item.title}
                </div>
                <div className="text-2xl">{item.text}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center space-y-8 ">
            {/* Top Row */}
            <div className="grid grid-cols-2 gap-6 rounded-xl shadow-lg p-6 bg-[#EBCCBF] w-[1200px]">
              <Image
                className="mx-auto rounded-lg"
                src="/images/gl7-a.png"
                alt="gl7-a"
                height={450}
                width={450}
              />
              <Image
                className="mx-auto rounded-lg"
                src="/images/gl7-b.png"
                alt="gl7-b"
                height={450}
                width={450}
              />
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-2 gap-6 rounded-xl shadow-lg p-6 bg-[#B9F5DA] w-[1200px]">
              <Image
                className="mx-auto rounded-lg"
                src="/images/gl8-a.png"
                alt="gl8-a"
                height={384}
                width={702}
                style={{ height: "100%", width: "auto" }}
              />
              <Image
                className="mx-auto rounded-lg"
                src="/images/gl8-b.png"
                alt="gl8-b"
                height={384}
                width={383}
                style={{ height: "100%", width: "auto" }}
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">Results</div>
            <div className="my-1">
              <div className="text-2xl">
                The Glampies website successfully addressed the initial
                challenge, delivering a visually appealing and user-friendly
                platform that effectively communicated the brand&apos;s luxurious
                glamping experience.
              </div>
              <div className="max-w-[1200px] mx-auto font-crimson py-12 ">
                <div className="text-3xl font-semibold">
                  Key outcomes include:
                </div>
                {OUTCOMES_LIST.map((item, index) => (
                  <div key={index} className="my-5">
                    <div>
                      <span className=" text-3xl font-semibold italic">
                        {item.title}{" "}
                      </span>{" "}
                      <span className="text-2xl">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center space-y-8 ">
                {/* Top Row */}
                <div className=" flex justify-center items-center rounded-xl shadow-lg p-6 bg-[#F2FFF9] w-[1200px] h-[220px]">
                  <Image
                    className="mx-auto rounded-lg"
                    src="/images/gl9.png"
                    alt="gl7-a"
                    height={200}
                    width={1100}
                  />
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col justify-center items-center   shadow-lg p-6 bg-[#F4F0E7] w-[1200px] h-[490px]">
                  <Image
                    className="mx-auto rounded-lg"
                    src="/images/gl10.png"
                    alt="gl10"
                    height={357}
                    width={1111}
                  />
                  <div
                    onClick={() => {
                      window.location.assign("https://theglampies.com/");
                    }}
                    className="rounded-3xl text-sm mt-4 font-semibold bg-[#2F865F] text-white py-2 px-5 w-fit drop-shadow-sm cursor-pointer mx-auto"
                  >
                    Visit Glampies <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <FooterBanner link="/work" text="See Main Projects" /> */}
      </div>
    </Layout>
  );
}
