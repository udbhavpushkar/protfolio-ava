'use client'
import Layout from "@/components/Layout";
import Banner from "@/components/Home/Banner";
import ContentDesign from "@/components/Home/ContentDesign";
import MajorProjects from "@/components/Home/MajorProjects";
import AboutMe from "@/components/Home/AboutMe";

export default function Home() {
  return (
    <div>
      <Layout>
        <Banner />
        <ContentDesign />
        <MajorProjects />
        <AboutMe />
      </Layout>
    </div>
  );
}
