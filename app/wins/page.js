'use client'
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import FooterBanner from "@/components/Footer/FooterBanner";
import WinDisplay from "@/components/Wins/WinDisplay";
import { items } from "./constants";
import FadeInSection from "@/components/FadeInSection";

export default function Wins() {
  return (
    <Layout>
      <div>
        <div className="max-w-[1325px] mx-auto font-crimson">
          <div className="flex justify-center mb-10">
            <Image
              src="/images/svgs/win.svg"
              alt="wins"
              width={421}
              height={330}
            />
          </div>
          {items.map((item, index) => (
            <FadeInSection key={`item_${index}`}>
              <div className="mb-16">
                <WinDisplay data={item} />
              </div>
            </FadeInSection>
          ))}
        </div>
        <FadeInSection>
          <FooterBanner link="/work" text="See Main Projects" />
        </FadeInSection>
      </div>
    </Layout>
  );
}