import React from "react";
import Card from "./card";

export default function Index() {
  return (
    <>
      <div className="flex justify-center mt-40 w-full">
        <img src="./svgs/infusion.png" />
      </div>
      <div className="flex mx-24 mt-20">
        <div className="w-full flex flex-col gap-4">
          <label className="font-bold text-6xl flex flex-wrap">
            <p>The infusion of actual&nbsp;</p>
            <p className="text-[#5546FF]">world&nbsp;</p>
            <p className="text-[#5546FF]">value &nbsp;</p>
            <p className="text-[#5546FF]">backed&nbsp;</p>
            <p className="text-[#5546FF]">NFTs&nbsp;</p>
            <p>is coming </p>
          </label>
          <p className="text-xl">
            ZelaaNFT goes beyond just a platform to collect JPEGs - we strive to
            include real-world experiences that connect with all Genesis drops
            we launch on the platform that will retain digital but also enable
            collectors to proclaim physical value for the collectibles.
          </p>
          <button className="px-10 py-3 rounded-full w-fit text-white text-md  bg-[#5546FF]">
            Get Started
          </button>
        </div>
        <div className="flex flex-col w-full ">
          <Card
            question="Bid on Primary"
            answer="As a collector, you can primarily bid on drops through Limit or Market bids and sweep floors or wait for acceptance of your bids."
          />{" "}
          <Card
            question="Secondary"
            answer="We work with creators to develop individual open-stores to run their secondary markets and also strategically promote them for collectors to retain value in longer run."
          />{" "}
          <Card
            question="Claimable NFTs"
            answer="Most NFTs that we work and drop will always have a physical asset or experiences of a lifetime included with them. These will act as a bridge to bring alive your dreams as fans of of these talents to have opportunities to hangout and more."
          />
        </div>
      </div>
    </>
  );
}
