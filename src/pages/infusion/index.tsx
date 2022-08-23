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
            ZelaaNFT sources assets from the real-world and converts them into
            NFTs while retaining their value.
          </p>
          <button className="px-10 py-3 rounded-full w-fit text-white text-md  bg-[#5546FF]">
            Get Started
          </button>
        </div>
        <div className="flex flex-col w-full ">
          <Card
            question="Bid"
            answer="Bid for NFTs on ZelaaNFT using FDO, ETH and USDT"
          />{" "}
          <Card
            question="Resell"
            answer="Use ZelaaNFT as a secondary market to also resell your NFTs"
          />{" "}
          <Card
            question="Resell"
            answer="The FDO token is also a deflationary asset that continues to burn total supply by contributing portion of FDO collected from all NFT sales and transactions fees from proceed of NFTs."
          />
        </div>
      </div>
    </>
  );
}
