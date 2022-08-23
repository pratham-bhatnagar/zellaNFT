import React from "react";
import HowItWorksCard from "./HowItWorksCard";

export default function Index() {
  return (
    <>
      <div className="pt-40 bg-gradient-to-r from-[#5c58d4c4] via-[#fa068cc7] to-[#ff3d3dcb] w-full h-screen flex flex-col items-center">
        <p className="italic text-white text-center font-bold text-6xl">
          never miss a drop
        </p>
        <label className="mt-[30px] bg-opacity-20 border-[1px] bg-slate-200 rounded-full px-2 w-[30vw] text-white my-2 py-2 flex justify-between">
          <input
            className=" bg-transparent focus:outline-none placeholder:text-white placeholder:text-lg px-4"
            placeholder="Enter your Email"
            type="text"
            name="email"
          ></input>
          <button className="bg-slate-100 rounded-full text-black  py-2 px-[20px] font-semibold">
            Subscribe
          </button>
        </label>
        <p className="italic text-5xl font-bold text-white mt-20">
          how it works
        </p>
        <div className="flex gap-3 m-12">
          <HowItWorksCard
            Title={"Connect Your Wallet"}
            description={
              "Getting started with ZelaaNFT is simple. Just connect your metamask wallet and create your profile"
            }
            imageUrl={
              "https://zelaanft.whitespacestd.net/wp-content/plugins/elementor/assets/images/placeholder.png"
            }
          />
          <HowItWorksCard
            Title={"Connect Your Wallet"}
            description={
              "Getting started with ZelaaNFT is simple. Just connect your metamask wallet and create your profile"
            }
            imageUrl={
              "https://zelaanft.whitespacestd.net/wp-content/plugins/elementor/assets/images/placeholder.png"
            }
          />
          <HowItWorksCard
            Title={"Connect Your Wallet"}
            description={
              "Getting started with ZelaaNFT is simple. Just connect your metamask wallet and create your profile"
            }
            imageUrl={
              "https://zelaanft.whitespacestd.net/wp-content/plugins/elementor/assets/images/placeholder.png"
            }
          />
        </div>
      </div>
    </>
  );
}
