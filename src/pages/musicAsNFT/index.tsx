import React from "react";

export default function Index() {
  return (
    <div className="flex mx-20 mt-10 mb-20">
      <div className="w-full">
        <img src="https://uploads-ssl.webflow.com/625018abb3e7346b01409c54/62c2c334f3ac9f7ee9052fe6_nft%20music-p-2000.png" />
      </div>
      <div className=" flex flex-col gap-6  w-full mx-6">
        <div className="flex flex-wrap font-bold text-6xl">
          <p className="text-[#5546FF]">Music&nbsp;</p>
          <p className="text-[#5546FF]">as&nbsp;</p>
          <p className="text-[#5546FF]">NFTs&nbsp;</p>
          <p>on&nbsp;</p>
          <p>ZelaaNFT</p>
        </div>
        <p className="text-xl">
          We work with a lot of quality artists and empower them to drop their
          unreleased audio and mixtapes as NFTs on our platform. Through this we
          also encourage collectors to engage as the artists can connect and
          deliver their music straight to the listeners while also sharing
          royalties of the NFTs with them!
        </p>
        <button className="px-10 py-3 rounded-full w-fit text-white text-md  bg-[#5546FF]">
          Get Started
        </button>
      </div>
    </div>
  );
}
