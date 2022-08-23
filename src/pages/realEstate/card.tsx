import React from "react";

export default function Card() {
  return (
    <div className="rounded-xl w-[15vw] h-fit bg-white flex flex-col shadow-lg">
      <img
        className="object-fill"
        src="https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/real_estate.png"
      ></img>
      <div className="flex gap-4 justify-around items-center py-5 mx-5">
        <div> </div>
        <div className="flex flex-col w-full">
          <p className="font-bold">Arcadia Apartment </p>
          <p>2 Beds 1 Baths </p>
        </div>
        <div>
          <button className="rounded-full w-fit px-8 py-2 bg-blue-700 text-white">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
