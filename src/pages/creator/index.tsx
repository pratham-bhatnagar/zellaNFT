import React from "react";
import PinkCard from "./pinkCard";

export default function Index() {
  return (
    <>
      <div className="flex flex-wrap text-5xl font-bold gap-3 mt-32 mx-20 w-[35%] opacity-80">
        <p className="text-[#5546FF] ">Join </p>{" "}
        <p className="text-[#5546FF] ">20,000+ </p>{" "}
        <p className="text-[#5546FF] ">creators </p> <p className=" ">and </p>{" "}
        <p className=" ">collectors </p>
      </div>
      <div className="mx-20 flex  mt-6 justify-between">
        <p className="text-lg  w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          elementum tortor. Donec at ipsum quis libero vestibulum varius eget et
          lacus. Fusce id magna consequat, imperdiet nibh at.
        </p>
        <p className="text-lg text-[#5546FF] font-semibold">
          Explore Now &rarr;
        </p>
      </div>
      <div className="p-20 grid grid-cols-4 gap-y-4 mx-52">
        <PinkCard Title={"No Code Required"} logo={"./svgs/code-solid.svg"} />{" "}
        <PinkCard Title={"Community Driven"} logo={"./svgs/bolt-solid.svg"} />{" "}
        <PinkCard
          Title={"Flexible Royality"}
          logo={"./svgs/percent-solid.svg"}
        />{" "}
        <PinkCard Title={"Verified Creators"} logo={"./svgs/check-solid.svg"} />{" "}
        <PinkCard
          Title={"Multiple Minting"}
          logo={"./svgs/strikethrough-solid.svg"}
        />{" "}
        <PinkCard Title={"Unlockable Itmes"} logo={"./svgs/lock-solid.svg"} />{" "}
        <PinkCard Title={"Auction Function"} logo={"./svgs/gavel-solid.svg"} />{" "}
        <PinkCard
          Title={"ZellaNFT Rewards"}
          logo={"./svgs/handshake-regular.svg"}
        />
      </div>
    </>
  );
}
