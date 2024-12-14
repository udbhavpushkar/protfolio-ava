"use client";
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";
import { LIST_1, LIST_2, LIST_3 } from "./constants";

export default function Turient() {
  return (
    <Layout>
      <div>
        <div className="bg-white w-full">
          <div className="max-w-[1325px] mx-auto font-crimson py-14">
            <div className="text-4xl font-semibold">
              Turient: All-in-One Platform For All Your Teaching Needs
            </div>
            <div className="bg-[#F8E8FF] p-3 rounded-xl text-2xl font-medium mt-8">
              My Role : Content Designer | Ux Writer | User Research| Product
              Flow| Navigational Nomenclature| Terminology|Taxonomy| Cross
              Functional Collaboration | Iteration & Enhancements
            </div>
            <div className="my-5">
              <div className="text-3xl font-semibold">Overview</div>
              <div className="text-2xl">
                Turient is an innovative Ed Tech product that aims to transform
                the digital education landscape by empowering educators with{" "}
                <span className="bg-[#ffd7e5]">
                  {" "}
                  tools and features to replicate the real world classroom
                  experience in the virtual world.
                </span>
                <br />
                <br />
                In this case study, we will delve into the intricacies of our
                design process and the research methodologies employed to create
                and enhance Turient. It highlights our dedication to creating a
                transformative learning environment that goes beyond the
                traditional boundaries.
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1325px] mx-auto py-10">
          <Vimeo className="w-full" width="1325" video="1012545428" />
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">
              What was this product all about?
            </div>
            <div className="my-5">
              <div className="text-2xl">
                Turient provides one of the finest class management tools which
                decreases classroom workload. With state-of-the-art live
                classroom features like
                <br />
                <br />
                <ul className="list-disc text-[#626262] italic">
                  {LIST_1.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-10">
          <Image
            className="mx-auto"
            src="/images/turient-website.png"
            alt="turient"
            height={575}
            width={1200}
          />
          <div
            onClick={() => {
              window.location.assign("https://turient.io/");
            }}
            className="rounded-3xl text-sm mt-4 font-semibold bg-[#0027FB] text-white py-2 px-5 w-fit drop-shadow-sm cursor-pointer mx-auto"
          >
            See Full Project
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">Problem Statement:</div>
            <div className="my-5">
              <div className="text-2xl">
                Replicating Real-World Classroom Experience in Virtual World:
                <br />
                <br />
                <ul className="list-disc text-[#626262] italic">
                  {LIST_2.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto py-10">
          <Image
            className="mx-auto"
            src="/images/turient-website1.png"
            alt="turient1"
            height={575}
            width={1200}
          />
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">My Role</div>
            <div className="my-5">
              <div className="text-2xl">
                As the content designer, I spearheaded the content design
                process and was involved in every phase of product development,
                from initial user research to the official launch.
                <br />
                <br />I was responsible{" "}
                <span className="bg-[#ffd7e5]">
                  {" "}
                  for all content-related tasks, including designing, writing,
                  editing, and testing clear, compelling in-product language.
                </span>{" "}
                This encompassed product flows, interface language, educational
                materials, button naming, navigational nomenclature,
                terminology, taxonomies, and other content elements to help
                users and teams meet their goals.
              </div>
            </div>
            <div className="text-3xl font-semibold">
              Content Designing Process
            </div>
            <div className="my-5">
              <div className="text-2xl">
                Our design process is meticulously crafted to blend creativity
                with functionality, aiming to deliver seamless user experiences
                that resonate with our audience.{" "}
                <span className="bg-[#ffd7e5]">
                  By combining user-centric research, innovative ideation, and
                  rigorous testing, we embarked on a journey of iterative
                  improvement, shaping our product into valuable solutions that
                  address real-world needs.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="gardient-1 w-full">
          <div className="max-w-[1325px] mx-auto font-crimson py-14">
            <div>
              <Image
                className="mx-auto"
                src="/images/design-process.png"
                alt="design"
                height={575}
                width={1200}
              />
              <div className="italic text-xl text-center">
                Design Process Overview from scratch to MVP
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div>
              <div className="text-3xl font-semibold mb-5">
                Research and Discovery:
              </div>
              <Image
                className="mx-auto"
                src="/images/table-rd.png"
                alt="design"
                height={276}
                width={1200}
              />
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="max-w-[1200px] mx-auto font-crimson py-14">
            <div className="text-3xl font-semibold">Market Analysis</div>
            <div className="my-5">
              <div className="bg-[#F8E8FF] p-3 rounded-xl text-2xl font-medium mt-8">
                Objective: To understand the current landscape of virtual
                classroom solutions, identify market opportunities, and define
                Turient&apos;s target audience .
              </div>
              <div className="text-2xl mt-6">
                The market research indicated a robust demand for advanced,
                interactive virtual classroom solutions. This analysis provided
                a foundation for subsequent user research and product design
                efforts, ensuring that Turient addresses market demands and user
                expectations comprehensively.
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  className="mx-auto rounded-lg shadow-xl"
                  src="/images/graph1.png"
                  alt="design"
                  height={430}
                  width={585}
                />
              </div>
              <div>
                <Image
                  className="mx-auto rounded-lg shadow-xl"
                  src="/images/graph2.png"
                  alt="design"
                  height={430}
                  width={585}
                />
              </div>
              <div>
                <Image
                  className="mx-auto rounded-lg shadow-xl"
                  src="/images/graph3.png"
                  alt="design"
                  height={430}
                  width={585}
                />
              </div>
              <div>
                <Image
                  className="mx-auto rounded-lg shadow-xl"
                  src="/images/graph4.png"
                  alt="design"
                  height={430}
                  width={585}
                />
              </div>
            </div>
            <div className="text-3xl font-semibold mt-16">Target Audience</div>
            <div className="my-5 text-2xl">
              <div className="my-6">Our target audience encompasses:</div>
              <ul className="list-disc text-[#626262] italic">
                {LIST_3.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="rounded-lg shadow-xl w-full mt-10">
                <Image
                  className="mx-auto "
                  src="/images/graph5.png"
                  alt="design"
                  height={430}
                  width={585}
                />
              </div>
            </div>
            <div className="text-3xl font-semibold mt-16">
              User Personas & Journey Maps:
            </div>
            <div className="my-5 text-2xl">
              <div className="my-6">
                We approached the user research process systematically to gather
                actionable insights into the needs, preferences, and pain points
                of our target audience. We reached out to around 500+ seasoned
                educators who have been teaching for more than 10+ years.
                Conducted interviews through Zoom calls, and met a few.
                <br />
                <br />
                We developed detailed user personas for each target audience
                segment reflecting their diverse needs. Our findings highlighted
                the need for advanced integration, user-friendly interfaces, and
                features that foster realtime engagement.
              </div>
              <Image
                className="mx-auto rounded-lg shadow-xl mt-8"
                src="/images/table2.png"
                alt="design"
                height={988}
                width={1200}
              />
              <div className="my-5 text-2xl">
                This table provides a clear and concise representation of the
                features and benefits tailored to each target audience segment,
                demonstrating how Turient supports their unique needs.
              </div>
              <Image
                className="mx-auto rounded-lg shadow-xl mt-8"
                src="/images/table3.png"
                alt="design"
                height={988}
                width={1200}
              />
              <div className="my-5 text-2xl">
                <span className="bg-[#ffd7e5]">
                  Comparision of user research demand and market analysis
                  priority for each feature, to understand how closely aligned
                  they are.
                </span>
              </div>
              <div className="rounded-lg shadow-xl w-full mt-10">
                <Image
                  className="mx-auto "
                  src="/images/graph6.png"
                  alt="design"
                  height={430}
                  width={585}
                />
              </div>
              <div className="italic text-xl text-center my-6">
                This chart compares user research demand and market analysis
                priority for each feature, showing how closely aligned they are
              </div>
            </div>
            <div className="text-3xl font-semibold mt-16">
              Ideation and Concept Development
            </div>
            <div className="my-5 text-2xl">
              <div className="font-semibold">
                Generating and evaluating ideas for features and
                functionalities:
              </div>
              <div>
                This phase involved generating a wide array of innovative ideas
                and refining them into viable concepts that align with our
                mission. During this phase, we engaged in brainstorming sessions
                and gathered input from key stakeholders, including educators,
                students, and technical experts.
                <br />
                <br />
                By leveraging insights from our market and user research, we
                prioritized ideas based on feasibility, impact, and alignment
                with user needs. The goal was to develop well-defined,
                user-centric concepts that address identified challenges, such
                as enhancing student engagement, providing robust teacher
                support, and ensuring data privacy and security.
                <br />
                <br />
                This collaborative and iterative process ensured that our
                concepts are not only innovative but also practical, effective
                and scalable, laying a strong foundation for subsequent design
                and development efforts.
              </div>
              <Image
                className="mx-auto rounded-lg shadow-xl mt-8"
                src="/images/table4.png"
                alt="design"
                height={988}
                width={1200}
              />
            </div>
            <div className="text-3xl font-semibold mt-16">Product Roadmap</div>
            <div className="my-5 text-2xl">
              <div>
                Our objective was to systematically prioritize features for
                development through a series of iterative brainstorming
                sessions.
                <br />
                <br />
                We aimed to categorize each feature based on its necessity and
                impact on our users. This structured approach allowed us to
                focus on delivering the most critical functionalities first,
                ensuring that Turient effectively addressed the key needs and
                pain points of our diverse target audience.
              </div>
              <Image
                className="mx-auto rounded-lg shadow-xl mt-8"
                src="/images/table5.png"
                alt="design"
                height={360}
                width={1200}
              />
              <Image
                className="mx-auto rounded-lg shadow-xl mt-8"
                src="/images/table6.png"
                alt="design"
                height={360}
                width={1200}
              />
              <div className="rounded-lg shadow-xl mt-8 w-full">
                <Image
                  className="mx-auto "
                  src="/images/table7.png"
                  alt="design"
                  height={879}
                  width={956}
                />
              </div>
            </div>
            <div className="text-3xl font-semibold mt-16">
              Wireframing & Prototyping
            </div>
            <div className="my-5 text-2xl">
              <div className="font-semibold">
                Developing tangible representations of ideas to test and refine
                them:
              </div>
              <div>
                We focused on developing initial wireframes to outline the basic
                structure and layout of the platform. These wireframes served as
                a visual guide, detailing the placement of key elements such as
                navigation menus, content areas, and interactive features. Our
                team prioritized simplicity and clarity, ensuring that the user
                interface was intuitive and accessible for all target audiences.
              </div>
              <div className="rounded-lg shadow-xl mt-8 py-6 w-full bg-[#F4F0E6]">
                <Image
                  className="mx-auto"
                  src="/images/table8.png"
                  alt="design"
                  height={1264}
                  width={1024}
                />
              </div>
            </div>
            <div className="text-3xl font-semibold mt-16">
              Low-fidelity mockups
            </div>
            <div className="my-5 text-2xl">
              <div>
                During the low-fidelity (low-fi) mockup stage, I collaborated
                with UX designers to draft and refine interface language,
                ensuring clarity and user alignment. I established initial
                content structures and navigational elements, focusing on user
                flows. This stage involved refining terminology and taxonomies
                for consistency and usability across the product.
              </div>
              <div className="rounded-lg shadow-xl mt-8 bg-[#A1AFC5] w-full ">
                <Image
                  className="mx-auto"
                  src="/images/table9.png"
                  alt="design"
                  height={1398}
                  width={1200}
                />
              </div>
            </div>
            <div className="text-3xl font-semibold mt-16">
              Design & Development
            </div>
            <div className="my-5 text-2xl">
              <div>
                The design and development phase was a period of intense
                collaboration and meticulous execution. Our goal was to
                translate the validated prototypes into final mockups and then
                into a fully functional platform that met the needs of our
                users.
              </div>
              <div className="rounded-lg shadow-xl mt-8 bg-[#A1AFC5] w-full ">
                <Image
                  className="mx-auto"
                  src="/images/table10.png"
                  alt="table10"
                  height={932}
                  width={1200}
                />
              </div>
              <div className="italic text-l mt-5 text-center">
                A glimpse of the final mockups of our key features{" "}
              </div>
            </div>
            <div className="text-3xl font-semibold mt-16">
              High Fidelity Mockups
            </div>
            <div className="my-5 text-2xl">
              <div>
                <span className="font-semibold">
                  Landing page for educators:
                </span>
                <br />
                The landing page for educators in Turient is designed to be a
                central hub that provides a comprehensive overview of their
                ongoing and pending activities. The page focuses on immediate
                tasks and ensures a clean, easy, and intuitive layout for
                seamless navigation.
                <br />
                <br />I meticulously crafted each word to ensure maximum clarity
                and engagement. From user navigation to course descriptions,
                every element was designed with careful consideration of the
                audience&apos;s needs. My{" "}
                <span className="bg-[#ffd7e5]">
                  strategic approach ensured that the content was not only
                  informative but also intuitive, making the user experience
                  seamless and effective.{" "}
                </span>
              </div>
              <div className="rounded-lg shadow-xl mt-8 bg-[#A1AFC5] w-full ">
                <Image
                  className="mx-auto"
                  src="/images/table11.png"
                  alt="table10"
                  height={2184}
                  width={1200}
                />
              </div>
              <div className="mt-16">
                <span className="font-semibold">Live Discussion Boards:</span>
                <br />
                The live discussion board for educators in Turient is a dynamic
                and interactive feature designed to facilitate real-time
                communication, collaboration, and knowledge sharing among
                educators.
                <br />
                <br />
                I crafted user-friendly texts to ease and foster real-time
                collaboration among educators focusing on creating engaging and
                meaningful discussions.
                <br />
                <br />
                <span className="bg-[#ffd7e5]">
                  For structured communication, I decided to include separate
                  panels for different aspects of the discussion, such as &quot;What
                  went well?&quot;, &quot;What did not go well?&quot;, and &quot;What can be
                  improved?&quot;. This structured approach helps educators to
                  organize their thoughts and focus on specific areas of
                  discussion.{" "}
                </span>
              </div>
              <div className="rounded-xl shadow-xl mt-8 bg-[#A1AFC5] w-full ">
                <Image
                  className="mx-auto"
                  src="/images/table12.png"
                  alt="table10"
                  height={132}
                  width={1200}
                />
              </div>
              <div className="rounded-xl shadow-xl mt-8 bg-[#A1AFC5] w-full ">
                <Image
                  className="mx-auto"
                  src="/images/table13.png"
                  alt="table10"
                  height={2066}
                  width={1200}
                />
              </div>
              <div className="mt-16">
                <span className="font-semibold">
                  Live Breakout Sessions and Group Activities Page:
                </span>
                <br />
                Turient&apos;s live breakout sessions and group activities are
                integral to creating an interactive and collaborative virtual
                classroom environment.
                <span className="bg-[#ffd7e5]">
                  The main objective was to develop a content design with clear
                  sections such as overall progress, activity-wise progress, and
                  shared items, which helped the students track their progress
                  seamlessly.
                </span>
              </div>
              <div className="rounded-xl shadow-xl mt-8 bg-[#A1AFC5] w-full ">
                <Image
                  className="mx-auto"
                  src="/images/table14.png"
                  alt="table14"
                  height={1189}
                  width={1200}
                />
              </div>
              <div className="mt-16">
                <span className="font-semibold">
                  Student Profile & Engagement Details:
                </span>
                <br />
                This feature in Turient is designed to provide a comprehensive
                and dynamic view of each student&apos;s academic journey, engagement
                levels, and overall performance.
                <br />
                <br />
                <span className="bg-[#ffd7e5]">
                  I incorporated unique elements like &quot;Likes and Interests,&quot;
                  &quot;Certifications and Badges,&quot; and detailed scores based on
                  &quot;Engagement,&quot; &quot;Knowledge,&quot; and &quot;Learning&quot; to provide a
                  comprehensive view of each student.
                </span>
                My goal was{" "}
                <span className="bg-[#ffd7e5]">
                  to create a rich, informative profile that offers educators
                  clear, actionable insights they need to tailor their teaching
                  effectively, fostering a more personalised and impactful
                  educational experience.
                </span>
              </div>
              <div className="rounded-xl shadow-xl mt-8 bg-[#A1AFC5] w-full ">
                <Image
                  className="mx-auto"
                  src="/images/table15.png"
                  alt="table15"
                  height={1249}
                  width={1200}
                />
              </div>
              <div className="mt-16">
                <span className="font-semibold">
                  Gamification and Student Engagement:
                </span>
                <br />
                By leveraging game-like elements such as leader boards, badges,
                progress tracking, and rewards, Turient fosters a culture of
                continuous learning, achievement, and personal growth.
                <br />
                <br />
                <span className="bg-[#ffd7e5]">
                  I proposed the &quot;Give a Badge&quot; feature on the Gamification and
                  Student Engagement page, allowing students to recognize and
                  reward their peers with badges like &quot;Team Player,&quot; &quot;Curious
                  Mind,&quot; &quot;Active Learner,&quot; and &quot;Knowledge Knight.&quot;
                </span>
                This feature fosters a culture of healthy competition and
                continuous learning, encouraging students to earn more badges
                and stay engaged. By integrating this peer recognition system,{" "}
                <span className="bg-[#ffd7e5]">
                  I aimed for a content design that facilitated student
                  motivation and collaboration, making the learning process more
                  interactive and enjoyable.
                </span>
              </div>
              <div className="rounded-xl shadow-xl mt-8 bg-[#A1AFC5] w-full ">
                <Image
                  className="mx-auto"
                  src="/images/table16.png"
                  alt="table15"
                  height={132}
                  width={1200}
                />
              </div>
              <div className="rounded-xl shadow-xl mt-10 bg-[#F4F0E5] w-full ">
                <Image
                  className="mx-auto"
                  src="/images/table17.png"
                  alt="table15"
                  height={1121}
                  width={1200}
                />
              </div>
            </div>
            <div className="text-3xl font-semibold mt-16">
              Results & Refinements
            </div>
            <div className="my-5 text-2xl">
              <div>
                The design and development phase of Turient was a dynamic
                journey marked by continuous iteration and refinement. By
                leveraging feedback from users and analysing data insights, we
                kept on enhancing the platform&apos;s functionality, usability, and
                overall user experience.
                <br />
                <br />
                Following the launch of Turient, we gathered and analysed data
                to understand engagement and overall platform effectiveness.
                These insights validate the platform&apos;s design and feature set
                while also providing a foundation for ongoing enhancements to
                meet the evolving needs of educators and students.{" "}
              </div>
              <div className="rounded-xl shadow-xl mt-10 bg-[#F4F0E7] w-full ">
                <Image
                  className="mx-auto"
                  src="/images/table18.png"
                  alt="table15"
                  height={749}
                  width={1200}
                />
              </div>
            </div>
            <div
              onClick={() => {
                window.location.assign("https://turient.io/");
              }}
              className="rounded-3xl text-sm mt-16 font-semibold bg-[#0027FB] text-white py-2 px-5 w-fit drop-shadow-sm cursor-pointer mx-auto"
            >
              Visit Turient <span className="ml-2">→</span>
            </div>
          </div>
        </div>
        {/* <FooterBanner link="/work" text="See Main Projects" /> */}
      </div>
    </Layout>
  );
}
