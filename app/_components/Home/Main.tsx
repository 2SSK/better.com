import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons/faStopwatch";

import img1 from "../../../public/home_assets/img1.svg";
import img2 from "../../../public/home_assets/img2.svg";
import img3 from "../../../public/home_assets/img3.svg";
import img4 from "../../../public/home_assets/img4.svg";

const Main = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-evenly">
      {/* Top section */}
      <div className="flex items-center">
        <Image src={img1} alt="Rate Drop Alert" />
        <span className="text-3xl font-semibold text-white ml-4">
          Rate drop alert
        </span>
      </div>

      {/* Middle section */}
      <div className="mt-5 flex flex-col items-center justify-center text-6xl sm:text-8xl text-white font-bold text-center">
        <p>The rate drop you&apos;ve</p>
        <span>been waiting for</span>
      </div>

      {/* Bottom section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly px-4">
        {/* Left section (button and stopwatch text) */}
        <div className="text-center">
          <button className="px-8 py-4 bg-green-400 hover:bg-transparent hover:text-white border-0 border-green-400 rounded-full text-xl transition-all duration-300">
            Start my approval
          </button>
          <p className="text-gray-400 mt-2">
            <FontAwesomeIcon icon={faStopwatch} />
            <span> 3 min | No credit impact</span>
          </p>
        </div>

        {/* Right section (star ratings) */}
        <div className="mt-10 md:mt-0 flex flex-col items-center">
          <div className="flex gap-2">
            <Image src={img2} alt="Star" className="w-6 h-6" />
            <Image src={img3} alt="Star" className="w-6 h-6" />
            <Image src={img3} alt="Star" className="w-6 h-6" />
            <Image src={img3} alt="Star" className="w-6 h-6" />
            <Image src={img4} alt="Star" className="w-6 h-6" />
          </div>
          <div className="text-gray-400 mt-2 text-sm">
            4.6 Stars | 3177 Google reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
