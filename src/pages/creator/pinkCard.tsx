import React from "react";

interface Props {
  Title: string;
  logo: string;
}

export default function pinkCard({ Title, logo }: Props) {
  return (
    <div className="flex flex-col items-start opacity-80 gap-5 bg-gradient-to-br from-[#BE22B0] via-[#DE1AA7] to-[#A72BCD] p-10 rounded-xl bg-opacity-40 h-[20vh] py-10 w-[15vw]">
      <img className="h-10 " src={logo} />
      <p className="text-white  text-xl font-thin">{Title}</p>
    </div>
  );
}
