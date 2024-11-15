'use client'
import React from "react";
import Layout from "@/components/Layout";
import Image from "next/image";
import FooterBanner from "@/components/Footer/FooterBanner";
import WinDisplay from "@/components/Wins/WinDisplay";
import { items } from "./constants";

export default function Wins() {
  return (
    <Layout>
      <div>
        <div className="max-w-[1325px] mx-auto font-crimson">
          <div className="flex justify-center">
            <Image
              src="/images/svgs/win.svg"
              alt="wins"
              width={421}
              height={330}
            />
          </div>
          {items.map((item, index) => (
            <WinDisplay key={`item_${index}`} data={item} />
          ))}
        </div>
        <FooterBanner link="/work" text="See Main Projects" />
      </div>
    </Layout>
  );
}