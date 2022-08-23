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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          magna nec felis pellentesque.
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
            question={"How to Change my Photo from Admin Dashboard?"}
            answer={
              "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
            }
          />
          <Faqcards
            question="How to Change my Password easily?"
            answer="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
          />
          <Faqcards
            question="How to Change my Subscription Plan using PayPal"
            answer="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast"
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
