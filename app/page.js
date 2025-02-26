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
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <Layout>
      <FadeInSection>
        <Banner />
      </FadeInSection>
      <FadeInSection>
        <MajorProjects />
      </FadeInSection>
      <FadeInSection>
        <ContentDesign />
      </FadeInSection>
      <FadeInSection>
        <AboutMe />
      </FadeInSection>
      <FadeInSection>
        <Wins />
      </FadeInSection>
      <FadeInSection>
        <TalkToMe />
      </FadeInSection>
      <FadeInSection>
        <Recommendations />
      </FadeInSection>
      <FooterBanner link="/resume" text="See Resume" />
    </Layout>
  );
}
