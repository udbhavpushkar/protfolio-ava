"use client";
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Glampies, Leanpitch, Mvup, Turient } from "@/components/Home/Projects";
import VideoPlayer from "@/components/VideoPlayer";
import ContentDesignWithImage from "@/components/ContentDesignWithImage";
import FooterBanner from "@/components/Footer/FooterBanner";

export default function ContentDesign() {
  return (
    <Layout>
      <div>
        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-14">
            <div className="text-5xl font-semibold">
              Content Design Challenge
            </div>
            <div
              className="bg-[#FDD49D]  w-max px-4 py-1 mt-3"
              style={{ borderRadius: "0 20px 20px 0", width: "fit-content" }}
            >
              Created Content + Designed using Figma
            </div>

            <div className="my-5">
              <div className="text-2xl">
                Over the 15-day content design challenge, using{" "}
                <span className="bg-[#ffd7e5]">
                  Figma I designed a variety of user-centric designs , focusing
                  on clarity, engagement, and user needs.
                </span>{" "}
                Each day&apos;s task was a fresh opportunity to create impactful
                content designs.
                <br />
                <br />
                My approach was methodical and ensured that each piece not only
                met the daily requirements but also stood out as a unique
                creation,{" "}
                <span className="bg-[#ffd7e5]">
                  showcasing my ability to innovate and adapt across different
                  design scenarios.
                </span>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full m-auto h-3"></div>
        {/* day 15 */}
        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">15</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              A a multi-screen onboarding experience for a banking app that
              automatically pays a user&apos;s bills
            </div>
            <div className="mt-4 w-full">
              <Image
                src="/images/cd1a.png"
                alt="cd1a"
                height={330}
                width={1200}
              />
              <Image
                src="/images/cd1b.png"
                alt="cda"
                height={330}
                width={1200}
              />
              <Image
                src="/images/cd1c.png"
                alt="cd2a"
                height={330}
                width={1200}
              />
            </div>
          </div>
        </div>
        {/* day 14 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">14</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              Notifying the user about an unknown problem that stops them from
              accessing the app
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd2.png">
                <div className=" mx-2 my-5 p-4 text-xl text-[#656565] text-justify">
                  Scenario: a user is shopping using a price comparison app that
                  boasts “real-time” pricing on items. As they are checking the
                  price of an item, something goes wrong. The problem is
                  unknown.
                  <br />
                  <br />
                  <br />
                  Challenge: write a message that informs the user that they
                  cannot access the app right now. You cannot specify “why” the
                  app doesn&apos;t work, you also want them to continue using the
                  app.
                  <br />
                  <br />
                  <br />
                  Headline: 30 characters <br /> max Body: 130 characters max{" "}
                  <br />
                  Button(s): 15 characters max
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 13 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">13</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              A push notification alerting a truck driver of this current
              situation & options
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd3.png" isLeft={true}>
                <div className=" mx-2 my-4 p-1 text-lg text-[#656565] text-justify">
                  Scenario: A short-haul truck driver has a phone app that
                  monitors his route, schedule, fuel & deliveries.
                  <br />
                  <br />
                  He has 6 more deliveries before stopping for fuel and lunch.
                  Due to unexpected traffic, he&apos;s behind schedule.
                  <br />
                  <br />
                  He can choose to stay on his planned route for a few more
                  stops, but risk running low on fuel and missing lunch, or he
                  can get fuel and lunch now and finish the deliveries later.
                  <br />
                  <br />
                  Challenge: Write a push notification alerting him of this
                  dilemma and options.
                  <br />
                  <br />
                  Headline: 30 characters max <br /> Body: 45 characters max{" "}
                  <br />
                  Button(s): 25 characters max
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 12 */}
        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">12</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              An error message to inform the user that their name isn&apos;t getting
              verified
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd4.png">
                <div className=" mx-2 my-5 p-5 text-xl text-[#656565] text-justify">
                  <br />
                  Scenario: A user is creating an account. When they come to the
                  step where they are asked to enter their name, they get an
                  error message. A fraud detection software thinks their name is
                  fake—but it&apos;s wrong 5% of the time.
                  <br />
                  <br />
                  <br />
                  Challenge: Write an error message that prompts them to fix the
                  error without shaming them for having a fake-sounding name.
                  <br />
                  <br />
                  <br />
                  45 characters max
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 11 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">11</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              Title & meta description for a contact lens subscription aimed at
              elderly users
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd5.png" isLeft={true}>
                <div className=" mx-2 my-8 p-8 text-xl text-[#656565] text-justify">
                  <br />
                  Scenario: An elderly user is doing a Google search to find an
                  easy way to buy contact lenses online.
                  <br />
                  <br />
                  Challenge: Write a title and meta description for a website
                  that sells subscription contact lenses delivered to a user
                  every 30 days—convince them to try it.
                  <br />
                  <br />
                  Title: 70 characters max <br />
                  Meta Description: 170 characters max
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 10 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">10</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              Asking for the user&apos;s data to personalise their car search.
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd6.png">
                <div className=" mx-2 my-5 p-5 text-xl text-[#656565] text-justify text-center">
                  <br />
                  Scenario: The user is trying to view a website to help them
                  buy a car. But, the content can&apos;t load without the user&apos;s
                  location. They need to enter their ZIP code and first name.
                  <br />
                  <br />
                  Challenge: Ask them where they live and who they are without
                  sounding like you&apos;re unnecessarily mining their data.
                  <br />
                  <br />
                  Headline: 25 characters <br />
                  Body: 75 characters <br />
                  Button: 15 characters
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 9 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">09</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              An error message for an expired credit card
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd7.png" isLeft={true}>
                <div className=" mx-2 my-8 p-9 text-xl text-[#656565] text-justify text-center">
                  <br />
                  Scenario: The user is trying to rent a car using an
                  application but the credit card on file has expired.
                  <br />
                  <br />
                  Challenge: Write them an error message so that they can
                  correct the problem.
                  <br />
                  <br />
                  Headline: 30 characters <br />
                  Body: 60 characters
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 08 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">08 </span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              The user&apos;s favourite band is in town
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd8.png">
                <div className=" mx-2 my-8 p-9 text-xl text-[#656565] text-justify text-center">
                  <br />
                  Scenario: The user is a casual music fan and (on occasion)
                  goes to live concerts. They have a music player app.
                  <br />
                  <br />
                  Challenge: Tell the user that one of their favourite bands is
                  playing live in their town. How would you compel them to want
                  to go?
                  <br />
                  <br />
                  Headline: 30 characters max <br />
                  Body: 50 characters max <br />
                  Button: 25 characters Book ticket
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 7 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">07</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              A sports fan getting quick & short game updates
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd9.png" isLeft={true}>
                <div className=" mx-2 my-8 p-9 text-xl text-[#656565] text-justify text-center">
                  <br />
                  Scenario: A sports fan is at a wedding while their favourite
                  team is playing against their arch-rivals. Their team scores.
                  <br />
                  <br />
                  Challenge: How would you quickly let the sports fan know about
                  the latest play, the current score, and the key players? Write
                  it.
                  <br />
                  <br />
                  Headline: 30 characters max <br />
                  Body: 45 characters max <br />
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 06 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">06</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              A sports fan getting quick & short game updates
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd10.png">
                <div className=" mx-2 my-5 p-3 text-xl text-[#656565] text-justify text-center">
                  <br />
                  Scenario: It&apos;s Monday. A user has just gotten into their car
                  to drive to work. They plug their phone into the car and start
                  driving.
                  <br />
                  <br />
                  Challenge: How would you let the user know there&apos;s a fire
                  happening in a nearby town that is causing road closures? The
                  effect on their commute is unknown, but there is a definite
                  danger if the fire gets closer. How do you communicate this to
                  them? When? Write it.
                  <br />
                  <br />
                  Headline: 30 characters max <br />
                  Body: 45 characters max
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 05 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">05</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              A message to the user after the app has crashed
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd11.png" isLeft={true}>
                <div className=" mx-2 my-5 p-3 text-xl text-[#656565] text-justify text-center">
                  <br />
                  Scenario: The user works in graphic design. While critiquing a
                  design in a mobile app, their phone abruptly turns off. When
                  they restart the phone, they reopen the app.
                  <br />
                  <br />
                  Challenge: Write a message that the user will read immediately
                  upon opening the app. What do they need to know? What steps
                  (if any) do they need to take to recover their content? What
                  if they can&apos;t recover the content?
                  <br />
                  <br />
                  Headline: 40 characters max
                  <br />
                  Body: 140 characters max <br />
                  Button(s): 25 characters max
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 04 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">04</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              A promotional message for a supermarket app
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd12.png">
                <div className=" mx-2 my-5 p-3 text-xl text-[#656565] text-justify text-center">
                  <br />
                  Scenario: A user is in their favourite supermarket. They open
                  the supermarket&apos;s app on their phone to see what&apos;s on sale and
                  are greeted by a promotion.
                  <br />
                  <br />
                  Challenge: Write a promotional home screen for a subscription
                  service that delivers groceries to the user once a month for a
                  flat fee.
                  <br />
                  <br />
                  <br />
                  Headline: 45 characters max
                  <br />
                  Body: 195 characters max
                  <br />
                  Button(s): 25 characters max
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day-03 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">03</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              An error message when entering the wrong email
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd13.png" isLeft={true}>
                <div className=" mx-2 my-9 p-9 text-xl text-[#656565] text-justify text-center justify-center items-center">
                  <br />
                  <br />
                  Scenario: The user entered the wrong email address to sign in
                  to their account.
                  <br />
                  <br />
                  Challenge: Tell the user to enter the right email.
                  <br />
                  <br />
                  40 characters max
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 02  */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">02</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              A promotional screen for a sports app
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd14.png">
                <div className=" mx-2 my-5 p-3 text-xl text-[#656565] text-justify text-center">
                  <br />
                  Scenario: A user is a working parent, and a big sports fan, in
                  the midst of their favorite sports season who can no longer
                  attend games.
                  <br />
                  <br />
                  Challenge: Write a promotional screen for an app that lets a
                  user choose teams, sends game reminders, real-time score
                  updates and highlights videos.
                  <br />
                  <br />
                  <br />
                  Headline: 45 characters max
                  <br />
                  Body: 195 characters max
                  <br />
                  Button(s): 25 characters max
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* day 01 */}

        <div className="bg-white w-full">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col items-center  ">
            <div
              className="bg-[#FDD49D] flex items-center justify-center  text-xl
             w-[130px] h-[46px] rounded-b-[20px]"
            >
              Day <span className="font-bold  ml-1">01</span>
            </div>
            <div className="bg-[#FDD49D80] mt-4 px-6 py-2 rounded-[20px]  text-center text-lg w-max">
              A flight cancellation message
            </div>
            <div className="mt-4 w-full">
              <ContentDesignWithImage image="/images/cd15.png" isLeft={true}>
                <div className=" mx-2 my-5 p-3 text-xl text-[#656565] text-justify text-center">
                  <br />
                  <br />
                  Scenario: A traveller is in an airport waiting for the last
                  leg of a flight home when their flight gets abruptly cancelled
                  due to bad weather.
                  <br />
                  <br />
                  Challenge: Write a message from the airline app notifying them
                  of the cancellation and what they need to do next.
                  <br />
                  <br />
                  Headline: 45 characters
                  <br />
                  Body: 175 characters max
                  <br />
                  Button(s): 25 characters max
                </div>
              </ContentDesignWithImage>
            </div>
          </div>
        </div>
        {/* endofdays */}
        <div className="bg-white w-full ">
          <div className="max-w-[1100px] mx-auto font-crimson py-10 flex flex-col justify-center items-center  ">
            <div className=" mt-5 text-center text-xl w-max">
              Thanks For Reading
            </div>
            <div className="mt-4 mb-14 w-full">
              <Image

                src="/images/svgs/cd-collage.svg"
                alt="cd1a"
                height={330}
                width={1200}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
        <FooterBanner link="/work" text="See Main Projects" />
      </div>
    </Layout>
  );
}
