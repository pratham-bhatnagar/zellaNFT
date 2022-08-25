import React from "react";

interface Props {
  imageUrl: string;
  name: string;
  artist: string;
  profilePhoto: string;
}

export default function Card({ imageUrl, name, artist }: Props) {
  return (
    <div className="rounded-xl w-[20vw] h-fit bg-white flex flex-col shadow-lg">
      <img className="object-fill max-h-[28vh]" src={imageUrl}></img>
      <div className="flex gap-4 justify-around items-center py-5 mx-5">
        <div>
          {" "}
          <span className="bg-black rounded-full h-[40px] w-[40px] inline-block"></span>
        </div>
        <div className="flex flex-col w-full">
          <p className="font-bold">{name} </p>
          <p>{artist} </p>
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
