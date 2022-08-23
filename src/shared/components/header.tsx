import React from "react";

export default function Header() {
  return (
    <div className="flex text-white  h-20 px-[20px] justify-between items-center border-t-2 border-b-[1px]">
      <div className="w-[50%]">
        <img
          src="https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/logo.png"
          className="h-12"
        />
      </div>
      <div className="flex gap-5 font-semibold w-full justify-center text-lg">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Activity</p>
        <p>Following</p>
        <p>Community</p>
        <p className="font-thin opacity-50">|</p>
        <p className="flex items-center">
          <img src="./svgs/bell-solid.svg" className="h-5"></img>
        </p>
        <p className="flex items-center">
          <img src="./svgs/magnifying-glass-solid.svg" className="h-5"></img>
        </p>{" "}
        <p className="flex items-center">
          <img src="./svgs/comment-solid.svg" className="h-5"></img>
        </p>
      </div>
      <div className="flex gap-5 w-full justify-end text-lg font-semibold">
        <button className="bg-opacity-50 bg-slate-200 border px-4 py-3 rounded-full w-[120px] ">
          Sign Up
        </button>
        <button className="bg-opacity-50 bg-slate-200 border px-4 py-3 rounded-full w-[120px] ">
          Sign In
        </button>
        <span className="flex gap-2 items-center">
          <img
            className="h-10"
            src="data:image/png;base64,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"
          ></img>
          <p className="text-md">Connect to Metamask</p>
        </span>
      </div>
    </div>
  );
}
