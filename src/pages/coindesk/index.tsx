import React from "react";

export default function Index() {
  return (
    <div className="bg-gradient-to-tr from-[#6F49CF] via-[#E555BD] to-[#FCFBFD] h-screen flex">
      <div className="w-full text-white py-20 p-20 flex flex-col  justify-center">
        <p className="text-xl font-normal mb-4">
          Praesent urna nulla, vehicula id semper sed, porttitor sit amet purus.
          Suspendisse vitae mi maximus, lacinia urna in, faucibus arcu. Maecenas
          ultricies nisi quis erat facilisis.
        </p>
        <p className="font-bold text-xl mb-2 ">CTO at Coindesk</p>
        <p>Hashhohi</p>
        <div className="flex gap-3 mt-5">
          <button className="text-3xl bg-white  font-bold flex justify-center items-center text-[#6B47D3] rounded-full h-12 w-12">
            <img src="./svgs/chevron-left-solid.svg" className="h-5" />
          </button>
          <button className="text-3xl bg-white  font-bold flex justify-center items-center text-[#6B47D3] rounded-full h-12 w-12">
            <img src="./svgs/chevron-right-solid.svg" className="h-5" />
          </button>
        </div>
      </div>
      <img src="https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/testimonial_2.png"></img>
    </div>
  );
}
