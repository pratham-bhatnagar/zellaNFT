import React from "react";
import PinkCard from "./pinkCard";

export default function Index() {
  return (
    <>
      <div className="flex flex-wrap text-5xl font-bold gap-3 mt-32 mx-20 w-[35%] opacity-80">
        <p className="text-[#5546FF] ">ZelaaNFT’s </p>{" "}
        {/* <p className="text-[#5546FF] ">20,000+ </p>{" "}
        <p className="text-[#5546FF] ">creators </p> <p className=" ">and </p>{" "} */}
        <p className=" ">suite </p> <p className=" ">of </p>{" "}
        <p className=" ">features </p>
      </div>
      <div className="mx-20 flex  mt-6 justify-between">
        <p className="text-lg  w-[50%]">
          The key areas that make us stronger and positions us in this realm of
          Web3.0
        </p>
        <p className="text-lg text-[#5546FF] font-semibold">
          Explore Now &rarr;
        </p>
      </div>
      <div className="p-20 grid grid-cols-4 gap-y-4 mx-52">
        <PinkCard
          Title={"Fractional Ownerships"}
          logo={"./svgs/code-solid.svg"}
        />{" "}
        <PinkCard
          Title={"Royalty Distribution"}
          logo={"./svgs/bolt-solid.svg"}
        />{" "}
        <PinkCard Title={"Audio NFTs"} logo={"./svgs/percent-solid.svg"} />{" "}
        <PinkCard
          Title={"Connect with your Celeb"}
          logo={"./svgs/check-solid.svg"}
        />{" "}
        <PinkCard
          Title={"All Star Panel"}
          logo={"./svgs/strikethrough-solid.svg"}
        />{" "}
        <PinkCard Title={"Chain Agnostic"} logo={"./svgs/lock-solid.svg"} />{" "}
        <PinkCard Title={"NFT Staking"} logo={"./svgs/gavel-solid.svg"} />{" "}
        <PinkCard
          Title={"NFT Collaterals"}
          logo={"./svgs/handshake-regular.svg"}
        />
      </div>
    </>
  );
}
