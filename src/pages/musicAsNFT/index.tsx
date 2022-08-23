import React from "react";

export default function Index() {
  return (
    <div className="flex mx-20 mt-10 mb-20">
      <div className="w-full">
        <img src="https://zelaanft.whitespacestd.net/wp-content/plugins/elementor/assets/images/placeholder.png" />
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
          ZelaaNFT sources assets from the real-world and converts them into
          NFTs while retaining their value.
        </p>
        <button className="px-10 py-3 rounded-full w-fit text-white text-md  bg-[#5546FF]">
          Get Started
        </button>
      </div>
    </div>
  );
}
