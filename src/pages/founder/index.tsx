import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function index() {
  return (
    <div className="bg-gradient-to-r from-[#5c58d4c4] via-[#fa068cc7] to-[#ff3d3dcb] h-screen flex  px-20">
      <div className="w-full flex flex-col gap-6 relative mt-24">
        <p className="text-white text-3xl ">The Founder</p>
        <p className="text-white text-9xl font-bold">Sahil</p>

        <p className="text-white text-xl mt-10 w-[80%]">
          Sahil is a serial entrepreneur based out of Dubai, United Arab
          Emirates with over 6 years of experience in managing businesses
          ranging from financial technologies to handling media ventures and
          then scaling blockchain powered hardware and software businesses.
        </p>
      </div>
      <div className="w-full relative">
        <img
          className="absolute top-10 z-0"
          src="https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/Sahil_Aurora.png"
        ></img>
      </div>{" "}
      <div className="w-full relative">
        <div className="bg-opacity-30 bg-slate-900 py-10 border-[1px] w-[30vw] px-8 text-white rounded-xl absolute -left-24 top-36 ">
          <div className="flex flex-col">
            He is a Peter Thiel Foundation 2016 Participant and a Draper
            University Alumni. He also acts as a highly influential individual
            with connections varying from celebrities to business giants in
            crypto. Sahil owns a vast portfolio of digital collectibles
            pseudonymously that consists NFTs of major celebrities such as
            Lindsay Lohan, Jake Paul, Mark Cuban, Grimes, The Weeknd and more.
            He recently was also the highest bidder of the 1/1 NFT “The Source”
            by The Weeknd, for which the artist himself recognised Sahil over
            his social media.
            <div className="flex gap-4 mt-6">
              <img src="/svgs/instagram.svg" />
              <img src="/svgs/instagram.svg" />
            </div>
          </div>
        </div>
        <p className="text-9xl font-extrabold absolute -left-24 top-[60vh] text-white ">
          Arora
        </p>
      </div>
    </div>
  );
}
