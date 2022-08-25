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
          {" "}
          <Card
            imageUrl={
              "https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/product_1.png"
            }
            name={"Thunder ✨"}
            artist={"Lindsay Lohan"}
            profilePhoto={""}
          />
          <Card
            imageUrl={
              "https://uploads-ssl.webflow.com/625018abb3e7346b01409c54/62502670028fb739bd9d7600_Mask%20Group%20(2).png"
            }
            name={"Crank That 🔥"}
            artist={"Soulja Boy"}
            profilePhoto={""}
          />
          <Card
            imageUrl={
              "https://uploads-ssl.webflow.com/625018abb3e7346b01409c54/625026bf21a753772aa9fc88_Mask%20Group%20(3).png"
            }
            name={"Taste 👅️️"}
            artist={"Tyga"}
            profilePhoto={""}
          />
          <Card
            imageUrl={
              "https://uploads-ssl.webflow.com/625018abb3e7346b01409c54/62c4917978c529177b404949_2022-07-06%2001.00.49.jpg"
            }
            name={"Khloë 07 🔫️️"}
            artist={"Khloë Terae"}
            profilePhoto={""}
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center mt-12 mb-24 bg-white ">
        <p className="italic text-5xl font-bold text-slate-800">Backed By</p>
        <p className="text-xl mx-[20vw] text-center opacity-90 mt-[20px]">
          ZelaaNFT is running on Polygon and is backed by a consortium of
          partners and talents that make our metaverse inclusive on a deeper
          level when we open doors to creators through incubation and
          acceleration!
        </p>
        <img
          className="w-[20vw] mt-[30px]"
          src="https://zelaanft.whitespacestd.net/wp-content/uploads/2022/07/backed_logo.png"
        ></img>
      </div>
      <HowItWorks />
      <Infusion />
      <MusicAsNFT />
      {/* <Founder /> */}
      <RealEstate />
      <Creators />
      {/* <FeatureArtist /> */}
      <UpClose />
      {/* <Testimonial />
      <CoinDesk /> */}
      <Faq />
      <Subcribe />
      <Footer />
    </div>
  );
}
