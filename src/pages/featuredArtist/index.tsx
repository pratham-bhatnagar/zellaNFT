import React from "react";

export default function index() {
  return (
    <>
      <div className="text-5xl font-bold flex flex-wrap justify-center gap-3">
        <p>Featured </p>
        <p className="text-[#5546FF]"> Artists</p>
      </div>
      <div className="flex mx-[10vw] justify-center my-10">
        <div className="p-10 flex flex-col gap-4 w-full justify-center items-center">
          <img
            className="h-28"
            src="https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/artits_2.png
"
          />
          <p className="text-2xl font-bold">Fredrik Danby</p>
          <p className="text-[#5546FF]">4 Arts available</p>
        </div>

        <div className="p-10 flex flex-col gap-4 w-full  relative border-[1px] border-[#5546FF] rounded-xl   justify-center items-center">
          <img
            className="h-28"
            src="https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/artits_1.png
"
          />
          <p className="text-2xl font-bold text-[#5546FF]">Fredrik Danby</p>
          <p className="    ">4 Arts available</p>
          <span className="flex justify-center items-center text-white font-7xl font-bold bg-[#5546FF] h-12 w-12 absolute top-64 cursor-pointer text-center rounded-full ">
            &rarr;
          </span>
        </div>

        <div className="p-10 flex flex-col gap-4 w-full justify-center items-center">
          <img
            className="h-28"
            src="https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/artits_2.png
"
          />
          <p className="text-2xl font-bold">Fredrik Danby</p>
          <p className="text-[#5546FF]">4 Arts available</p>
        </div>
      </div>
    </>
  );
}
