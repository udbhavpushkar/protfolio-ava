'use client'
import React from "react";
import Layout from "@/components/Layout";
import Vimeo from '@u-wave/react-vimeo';
import Image from "next/image";
import Link from "next/link";
import FooterBanner from "@/components/Footer/FooterBanner";
import FadeInSection from "@/components/FadeInSection";

export default function About() {
    return <Layout>
        <div>
            <FadeInSection>
                <div className="max-w-[1325px] mx-auto">
                    <div className="flex py-4 px-36 justify-between items-center">
                        <div>
                            <Vimeo video="1012429720" />
                        </div>
                        <div className="w-fit">
                            <div className="flex text-7xl font-extrabold items-end">
                                <div>Hello &</div>
                                <div className="ml-3">
                                    <Image alt="feather" src="/images/svgs/feather.svg" width={86} height={120} />
                                </div>
                            </div>
                            <div className="text-7xl font-extrabold">Namaste !</div>
                            <div className="font-medium mt-8 text-4xl leading-snug">
                                <div>I’m Avantika Nayak, a </div>
                                <div className="text-[#A80021] text-[40px]">Content Designer & Strategist</div>
                                <div>based in India. </div>
                            </div>
                            <Link href="/resume">
                                <div className="text-2xl rounded-[40px] mt-4 font-semibold bg-[#A80021] text-white py-3 px-5 w-fit">See Resume</div>
                            </Link>
                        </div>
                    </div>
                    <div className="my-16 py-4 px-22 flex gap-4">
                        <div>
                            <div className="text-5xl font-bold mb-6">Not a Dreamer, A Doer</div>
                            <div className="text-3xl font-crimson">
                                <p className="mb-3">I’m a Writer, Design Thinker and a ‘Versatile Performer’
                                    who thrives under spotlight. </p>
                                <p>Writing has always been my passion & escape,
                                    so eventually, I decided to turn it into my full-time career.</p>
                            </div>
                        </div>
                        <div>
                            <Image alt="feather" src="/images/avantika2.png" width={429} height={351} />
                        </div>
                    </div>

                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-white">
                    <div className="max-w-[1325px] mx-auto">
                        <div className="py-16 px-22 flex items-center justify-around ">
                            <div>
                                <Image alt="avantika3" src="/images/avantika3.png" width={434} height={550} />
                            </div>
                            <div>
                                <div className="text-5xl">What Do i Do?</div>
                                <div className="font-crimson">
                                    <div className="my-5 text-2xl">
                                        I live & breathe Content! <br />
                                        It’s my elixir and my preferred poison
                                    </div>
                                    <div className="mb-4 text-2xl">
                                        <div className="font-medium">I write <span className="font-semibold"> user-centric conversations: </span></div>
                                        <div className="text-lg">UX copy, interactive content, emails & buttons, buttons, buttons </div>
                                    </div>
                                    <div className="mb-4 text-2xl">
                                        <div className="font-medium">I narrate <span className="font-semibold"> product stories:</span> </div>
                                        <div className="text-lg">Video scripts, website content and content strategy </div>
                                    </div>
                                    <div className="mb-4 text-2xl">
                                        <div className="font-medium">I build <span className="font-semibold"> personalities:</span></div>
                                        <div className="text-lg">Naming, tag lines, marketing campaigns  and style guides.</div>
                                    </div>
                                    <div className="mb-4 text-2xl">
                                        <div className="font-medium">I also do a bit of <span className="font-semibold"> research:</span> </div>
                                        <div className="text-lg">Create lots of notes + I`m always on a hunt to track down the <br />
                                            best word choices to enhance user experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="bg-[#ffffff77]">
                    <div className="max-w-[1325px] mx-auto">
                        <div className="py-16 px-22 flex items-center justify-around ">
                            <div>
                                <div className="text-4xl font-semibold">In A Nutshell: </div>
                                <div className="mt-5 mb-8 text-xl font-crimson">
                                    I make complex information easier to find, understand, <br />
                                    and act on for everyone – even dummies😉
                                </div>
                                <div className="mb-4 font-crimson">
                                    <div className="font-semibold mb-2 text-2xl">What I Love About Content Designing:</div>
                                    <div className="text-xl mb-2">
                                        Empathising with my users, understanding their pain points and <br />
                                        making their lives more convenient.
                                    </div>
                                    <div className="text-sm italic text-[#626262]">Because honestly, no one has the time for bad content 👎🏼</div>
                                </div>
                                <div className="mb-4 font-crimson">
                                    <div className="font-semibold mb-2 text-2xl">My Ultimate Goal:</div>
                                    <div className="text-xl mb-2">
                                        To build products that not only meet user needs but also exceed <br />
                                        them, driving business growth and customer satisfaction.
                                    </div>
                                    <div className="text-sm italic text-[#626262]">I mean, who doesn`t love a win-win, right?! 😎</div>
                                </div>
                                <div className="mb-4 font-crimson">
                                    <div className="font-semibold mb-2 text-2xl">My Thought Process:</div>
                                    <div className="text-xl mb-2">
                                        I’m someone who loves wearing multiple hats, it keeps me up. <br />
                                        I firmly believe, there are 2 main aspects of our existence: <br />
                                        Winning and Learning. <br />
                                        And life is just what happens in between!
                                    </div>
                                    <div className="text-sm italic text-[#626262]">You could say I’m a bit of a philosopher too 💁🏻‍♀️</div>
                                </div>
                            </div>
                            <div>
                                <Image alt="nutshell" src="/images/svgs/nutshell.svg" width={340} height={700} />
                            </div>
                        </div>
                    </div>
                </div>
                <FooterBanner link="/work" text="See Main Projects" />
            </FadeInSection>
        </div>


    </Layout>
}