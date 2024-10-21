import React from "react";
import Image from "next/image";

import Navbar from "../_components/Navbar/Navbar";

import img0 from "../../public/aboutUs_assets/vishal-mission.jpg";
import img1 from "../../public/aboutUs_assets/img1.svg";
import img2 from "../../public/aboutUs_assets/img2.svg";
import img3 from "../../public/aboutUs_assets/img3.svg";
import img4 from "../../public/aboutUs_assets/img4.svg";
import img5 from "../../public/aboutUs_assets/img5.svg";
import img6 from "../../public/aboutUs_assets/img6.svg";
import img7 from "../../public/aboutUs_assets/img7.svg";

const page = () => {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar className="text-black" />

      {/* Mission */}
      <div className="w-full h-full flex flex-col items-center justify-center px-8">
        <p className="text-green-700 text-4xl font-semibold mb-8">
          Our Mission
        </p>
        <p className="text-3xl lg:text-5xl font-normal text-center break-words leading-tight w-[65%]">
          We&apos;re making homeownership simpler, faster - and most
          importantly, more accessible for all Americans.
        </p>
      </div>

      {/* Status quo */}
      <div className="w-full flex items-center justify-center text-left py-12 px-[10%]">
        <div className="w-1/2 flex flex-col items-start justify-start gap-2">
          <p className="text-3xl font-normal">The status quo is broken</p>
          <p className="text-lg font-normal text-gray-500 break-words leading-tight w-[60%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            impedit eius rerum quibusdam nam dolore autem accusamus sint iste
            cupiditate minus, dolorem possimus reiciendis, nobis esse atque.
            Sunt, perspiciatis nihil quibusdam, magnam sit adipisci iste quis
            praesentium debitis voluptatem labore!
          </p>
          <button className="px-8 py-4 border-0 rounded-lg bg-green-700 hover:bg-green-900 text-lg font-bold text-white">
            Read Vishal&apos;s story
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <Image
            src={img0}
            alt="Vishal's story"
            className="w-[500px] aspect-auto"
          />
        </div>
      </div>

      {/* changing things */}
      <div className="w-full bg-green-700 text-white text-left flex flex-col items-start justify-center gap-4 pl-[20%] py-6 mt-20">
        <p className="text-4xl font-bold">How we&apos;re changing things</p>
        <p className="text-lg w-[50%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam cum
          fugiat velit in odio iure impedit aspernatur, hic explicabo est
          perferendis ipsa ipsam quas fugit labore aperiam sequi dolores!
          Officiis, perferendis voluptates? Necessitatibus, quasi voluptate
          saepe cumque hic officia deserunt!
        </p>
        <p className="text-lg w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
          dignissimos voluptas laborum error qui velit ab harum tempore id
          cupiditate.
        </p>
      </div>
      {/* Backed by */}
      <div className="mt-20 mb-20 flex flex-col items-center justify-center gap-10">
        <p className="text-4xl font-bold">Backed by</p>
        <div className="w-full flex items-center justify-evenly">
          <Image src={img1} alt="" />
          <Image src={img2} alt="" />
          <Image src={img3} alt="" />
          <Image src={img4} alt="" />
          <Image src={img5} alt="" />
          <Image src={img6} alt="" />
          <Image src={img7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default page;
