import React from "react";
import Card from "./card";
export default function Index() {
  return (
    <>
      <div className="flex  p-28 gap-20">
        <div className="flex flex-wrap  items-center font-bold text-5xl gap-3 w-[40%]">
          <p className="text-[#5546FF] ">Real </p>
          <p className="text-[#5546FF] text-5xl font-bold"> Estate </p>
          <p className="text-[#5546FF] text-5xl font-bold"> as </p>
          <p className="text-[#5546FF] text-5xl font-bold"> NFTs </p>
          <p className="">on</p> <p className=""> ZelaaNFT </p>{" "}
          <p className=""> straight</p> <p className=""> out </p>
          <p className="">of </p> <p className=""> United </p>
          <p className=""> Arab </p> <p className=""> Emirates</p>
        </div>
        <div className="w-[50%]">
          <p className="w-[90%] text-lg">
            We work closely with owners and developers to fractionalise
            ownership of real-estate assets and distribute it directly to
            holders. You can fully own a physical asset completely virtually.
          </p>
          <button className="px-10 py-3 rounded-full w-fit text-white text-md mt-8  bg-[#5546FF]">
            Click Here
          </button>
        </div>
      </div>
      <div className="flex gap-8 justify-center">
        {" "}
        {/* <Card /> <Card />
        <Card /> <Card /> */}
      </div>
    </>
  );
}
