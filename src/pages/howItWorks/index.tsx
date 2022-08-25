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
            Title={"Sourcing and Moderation"}
            description={
              "We handpick genesis drops by working closely with our top talents and after analysis of niches, we assemble it on ZelaaNFT"
            }
            imageUrl={
              "https://uploads-ssl.webflow.com/625018abb3e7346b01409c54/62c2c53e75274071befc5785_1.sourcing%20and%20moderation-p-1080.png"
            }
          />
          <HowItWorksCard
            Title={"Fandom"}
            description={
              "In a community driven approach we bridge the gap between the creator and the collector - through various features that enable connecting with your favourite creator easier. "
            }
            imageUrl={
              "https://uploads-ssl.webflow.com/625018abb3e7346b01409c54/62c2c5723500c6082a670e16_2.fandom-p-1080.png"
            }
          />
          <HowItWorksCard
            Title={"Web3/4/5/6"}
            description={
              "There is no limit for innovation and with markets changing at the speed of light, we maintain ZelaaNFT by having inclusion of chain-agnostic drops that run and sustain."
            }
            imageUrl={
              "https://uploads-ssl.webflow.com/625018abb3e7346b01409c54/62c2c58e0babd52a59cc1fc4_3.web%203456-p-1080.png  "
            }
          />
        </div>
      </div>
    </>
  );
}
