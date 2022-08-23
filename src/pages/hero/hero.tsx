import React from "react";
import Card from "../../shared/components/card";
import Header from "../../shared/components/header";
import HowItWorks from "../howItWorks";
import Infusion from "../infusion";
import MusicAsNFT from "../musicAsNFT";
import Founder from "../founder";
import RealEstate from "../realEstate";
import Creators from "../creator";
import FeatureArtist from "../featuredArtist";
import UpClose from "../upClose";
import Testimonial from "../testimonial";
import CoinDesk from "../coindesk";
import Faq from "../faq";
import Subcribe from "../subscribe";
import Footer from "../../shared/components/footer";

export default function Hero() {
  return (
    <div className="bg-gradient-to-tr from-[#f8f5fb4e] via-[#ed525fc5] to-[#803ac6b6] h-screen">
      <Header />
      <div className="flex flex-col gap-10 items-center mt-56">
        {" "}
        <p className="italic text-6xl text-center font-bold text-white ">
          the metaverse for artists, <br></br>creators and talents.
        </p>
        <button className="bg-opacity-50 bg-slate-200 border px-8 py-3 rounded-full w-fit text-white font-bold">
          Get drop alerts
        </button>
        <div className="flex gap-5 ">
          <Card />
          <Card />
          <Card /> <Card />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center mt-12 mb-24 bg-white ">
        <p className="italic text-5xl font-bold text-slate-800">Backed By</p>
        <p className="text-xl mx-[20vw] text-center opacity-90 mt-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet
          elementum tortor. Donec at ipsum quis libero vestibulum varius eget et
          lacus. Fusce id magna consequat, imperdiet nibh at.
        </p>
        <img
          className="w-[20vw] mt-[30px]"
          src="https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/backed_logo.png"
        ></img>
      </div>
      <HowItWorks />
      <Infusion />
      <MusicAsNFT />
      <Founder />
      <RealEstate />
      <Creators />
      <FeatureArtist />
      <UpClose />
      <Testimonial />
      <CoinDesk />
      <Faq />
      <Subcribe />
      <Footer />
    </div>
  );
}
