import React from "react";
import Faqcards from "./faq-cards";

export default function index() {
  return (
    <div className="flex mt-20 ">
      <div className="flex flex-col p-20 gap-4 w-full">
        <div className="flex flex-wrap gap-3 text-5xl font-bold">
          <p>Frequently </p>
          <p>asked</p>
          <p className="text-[#5546FF]">questions</p>
        </div>
        <p className="text-xl">
          This is our quick section to answer your primary questions around the
          project that ZelaaNFT is - a powerhouse metaverse built with and for
          celebrities and high-talent individuals around the globe.
        </p>
        <div className="flex items-center gap-4 opacity-80">
          <img src="./svgs/facebook-f-brands.svg" className="h-5"></img>
          <img src="./svgs/twitter-pink.svg" className="h-5"></img>
          <img src="./svgs/linkedin-in-brands.svg" className="h-5"></img>
        </div>
        <img src="https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/625311df4b75bb7fc68f2376_image-197.png" />
      </div>
      <div className="w-full flex flex-col gap-10 p-20">
        <div>
          {" "}
          <Faqcards
            question={"What is ZelaaNFT"}
            answer={
              "a Web3.0 non-fungible token marketplace that is primarily to support celebrity collectible drops to the users."
            }
          />
          <Faqcards
            question="Rewards Distribution Plan"
            answer="we pledge to distribute a % of tokens that will be locked up in the rewards pool to all buyers and sellers of the platform (Rarible early days or now the same model as LooksRare)"
          />
          <Faqcards
            question="Is this Primary or Secondary?"
            answer="ZelaaNFT will act as a chain agnostic platform to support both primary and secondary markets for all drops that happen on our platform."
          />{" "}
          <Faqcards
            question="Will ZelaaNFT become an aggregator?"
            answer="we do intend to bring together multiple marketplaces under the same hood and in future we will eventually add frontend support to preview NFTs from other marketplaces on ZelaaNFT"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-3xl font-bold ">
            Can{"'"}t find what you{"'"}re looking for?
          </p>
          <p className="text-lg ">
            Contact us and we will get back to you as soon as we can
          </p>
          <div className="flex gap-5">
            <button className="border-[1px] font-medium text-lg border-black text-center rounded-full py-4 px-5 min-w-40 w-40">
              Help Center
            </button>
            <button className="bg-[#5546FF] font-medium text-lg flex gap-3 justify-center items-center  text-white  rounded-full py-4 px-5 min-w-52 w-52">
              <img src="./svgs/discord-brands.svg" className="h-6"></img>
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
