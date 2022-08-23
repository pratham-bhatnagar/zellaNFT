import React from "react";

export default function Index() {
  return (
    <div className="">
      <img src="./dubai-skyline.jpg" className="h-[60vh] w-full object-fill" />
      <div className="flex w-full items-center m-auto px-20 py-5">
        <label className="flex gap-3 justify-between items-center w-full pr-2">
          <img src="./svgs/envelope-solid.svg" className="h-5"></img>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="w-full outline-none"
            name="email"
          />
          <button className="border-[1px] font-medium text-lg border-[#6A5CFF] text-[#6A5CFF] text-center rounded-full py-1 px-5 min-w-40 w-40">
            Subscribe
          </button>
        </label>

        <p className="w-full px-5 text-lg border-l-2">
          No fluff, just what you need to know. No spam. Never shared. Opt out
          at any time.
        </p>
      </div>
    </div>
  );
}
