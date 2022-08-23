import React from "react";

interface Props {
  name: string;
  image: string;
  username: string;
  tweet: string;
}
export default function TweetCards({ name, image, username, tweet }: Props) {
  return (
    <div className="w-[25vw] min-w-[25vw] bg-white h-[25vh] rounded-2xl p-4">
      <div className="flex gap-4 justify-between items-center">
        <div className="flex gap-4">
          <img
            className="h-16"
            src="	https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/testimonial_img.png"
          ></img>
          <div className="flex flex-col">
            <p className="font-bold text-lg">Phet Putrie</p>
            <p className="text-lg">Freelancer</p>
          </div>
        </div>
        <img src="./svgs/twitter-brands.svg" className="h-8"></img>
      </div>
      <p className="my-5">
        Time is the most precious thing you have when bootstrapping. You can’t
        take time to ponder on design. Very good experience using #ZelaaNFT !
      </p>
    </div>
  );
}
