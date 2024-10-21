import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faPercentage } from "@fortawesome/free-solid-svg-icons/faPercentage";
import { faDollar } from "@fortawesome/free-solid-svg-icons/faDollar";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";

import img0 from "../../public/start_assets/img0.svg";
import img1 from "../../public/start_assets/betty1.jpg";

const page = () => {
  return (
    <div className="w-full h-screen px-[20%] flex flex-col items-center ">
      {/* Top bar */}
      <div className="relative w-full h-16 flex items-center justify-between mt-10 border-b-4 border-gray-300 z-50">
        {/* Left: Logo */}
        <Link href="/">
          <Image src={img0} alt="" />
        </Link>

        {/* Center: Phone call info */}
        <div className="flex items-center justify-center gap-2">
          <FontAwesomeIcon
            icon={faPhone}
            className="p-2 border-0 rounded-full bg-green-300 bg-opacity-40 text-green-900"
          />
          <p className="font-semibold">Need help? Call (415) 523 8837</p>
        </div>

        {/* Right: Absolute centered image */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-full">
          <Image
            src={img1}
            alt="Centered Image"
            className="w-16 h-16 rounded-full border-4 border-white"
          />
        </div>
      </div>
      {/* content */}
      <div>
        <div className="w-full flex flex-col items-center justify-center mt-16">
          <div className="flex flex-col items-center justify-center font-bold text-4xl">
            <span>Hi, I&apos;m Betsy!</span>
            <span>What can i help you with?</span>
          </div>
          <div className="border hover:border-4 border-gray-500 hover:border-green-700 transition-all duration-200 ease-in-out rounded-md px-8 py-4 flex items-center justify-start text-green-700 text-xl font-medium gap-4 mt-10 w-full">
            <FontAwesomeIcon icon={faHome} />
            <span>Buying a home</span>
          </div>
          <div className="border hover:border-4 border-gray-500 hover:border-green-700 transition-all duration-200 ease-in-out rounded-md px-8 py-4 flex items-center justify-start text-green-700 text-xl font-medium gap-4 mt-10 w-full">
            <FontAwesomeIcon icon={faHome} />
            <span>Refinance my mortgage</span>
          </div>
          <div className="border hover:border-4 border-gray-500 hover:border-green-700 transition-all duration-200 ease-in-out rounded-md px-8 py-4 flex items-center justify-start text-green-700 text-xl font-medium gap-4 mt-10 w-full">
            <FontAwesomeIcon icon={faHome} />
            <span>Get cash from my home</span>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 gap-8 mb-10">
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold mb-5">$100B</p>
            <p className="text-md text-gray-600">
              home loans funded entirely online
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl font-bold mb-5">400K</p>
            <p className="text-md text-gray-600">
              Customers who chose a Better Mortgage
            </p>
          </div>
        </div>
        <div className="self-center w-full py-4 flex flex-col items-center justify-center gap-2 border-0 rounded-md bg-green-100 bg-opacity-90 mb-10">
          <p className="text-green-800 text-lg">
            After a few questions, you&apos;ll unlock:
          </p>
          <div className="text-green-700 text-md">
            <div>
              <FontAwesomeIcon icon={faPercentage} className="mr-2" />
              <span>Custom mortgage rate</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faDollar} className="mr-2" />
              <span>Exclusive offers </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faMobile} className="mr-2" />
              <span>A presonalized dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
