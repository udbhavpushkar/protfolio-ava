'use client'
import Layout from "@/components/Layout";
import Banner from "@/components/Home/Banner";
import ContentDesign from "@/components/Home/ContentDesign";
import MajorProjects from "@/components/Home/MajorProjects";
import AboutMe from "@/components/Home/AboutMe";
import Wins from "@/components/Home/Wins";
import TalkToMe from "@/components/Home/TalkToMe";
import Recommendations from "@/components/Home/Recommendations";
import FooterBanner from "@/components/Footer/FooterBanner";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <ContentDesign />
      <MajorProjects />
      <AboutMe />
      <Wins />
      <TalkToMe />
      <Recommendations />
      <FooterBanner link="/resume" text="See Resume" />
    </Layout>
  );
}
