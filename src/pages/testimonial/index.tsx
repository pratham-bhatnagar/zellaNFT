import React from "react";
import TweetCards from "./tweetCards";

export default function index() {
  return (
    <>
      {" "}
      <div className="bg-gradient-to-tr from-[#ECE9F5] to-[#F7F7F8] p-20">
        <p className="text-[#E419A6] text-lg">TESTIMONIAL</p>
        <p className="text-5xl font-bold mt-5 ">
          How users feel about ZelaaNFT
        </p>
        <div className="flex gap-10 justify-between my-10">
          <p className="text-lg w-[70%]">
            ZelaaNFT is a consumer driven leading fin-tech firm backed and
            latched on top of the Tron Blockchain to empower decentralized,
            hassle free and seamless transactions in the Middle East.
          </p>
          <div className="w-[30%] flex justify-end gap-3">
            <div className="flex gap-3 mt-5">
              <button className="text-3xl bg-white  font-bold flex justify-center items-center text-[#6B47D3] rounded-full h-12 w-12">
                <img src="./svgs/chevron-left-solid.svg" className="h-5" />
              </button>
              <button className="text-3xl bg-white  font-bold flex justify-center items-center text-[#6B47D3] rounded-full h-12 w-12">
                <img src="./svgs/chevron-right-solid.svg" className="h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4  overflow-x-scroll">
          <TweetCards name={""} image={""} username={""} tweet={""} />{" "}
          <TweetCards name={""} image={""} username={""} tweet={""} />{" "}
          <TweetCards name={""} image={""} username={""} tweet={""} />{" "}
          <TweetCards name={""} image={""} username={""} tweet={""} />{" "}
          <TweetCards name={""} image={""} username={""} tweet={""} />{" "}
          <TweetCards name={""} image={""} username={""} tweet={""} />{" "}
          <TweetCards name={""} image={""} username={""} tweet={""} />{" "}
          <TweetCards name={""} image={""} username={""} tweet={""} />{" "}
          <TweetCards name={""} image={""} username={""} tweet={""} />
        </div>
      </div>
    </>
  );
}
