import React from "react";

interface Props {
  Title: string;
  description: string;
  imageUrl: string;
}

export default function HowItWorksCard({
  Title,
  description,
  imageUrl,
}: Props) {
  return (
    <div className="rounded-lg bg-white flex flex-col h-fit gap-4 w-[25vw] p-6 shadow-lg">
      <img className="object-contain " src={imageUrl}></img>

      <p className="font-bold text-2xl">{Title}</p>
      <p>{description}</p>
    </div>
  );
}
