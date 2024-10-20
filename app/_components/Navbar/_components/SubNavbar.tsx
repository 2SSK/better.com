"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

interface SubNavbarProps {
  isOpen: boolean;
  closeNavbar: () => void;
}

// Define an interface for menu items
interface MenuItem {
  title: string;
  href?: string; // Optional href property
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Buy",
    submenu: [
      { title: "Apply Now", href: "#" },
      { title: "Purchase rates", href: "#" },
      { title: "Affordibility Calculator", href: "#" },
      { title: "Mortgage Calculator", href: "/mortgage-calculator" },
      { title: "Rent vs buy Calculator", href: "#" },
      { title: "Find an agent", href: "#" },
      { title: "VA Loans", href: "#" },
      { title: "Learning center", href: "#" },
    ],
  },
  {
    title: "Refinance",
    submenu: [
      { title: "Apply Now", href: "#" },
      { title: "Refinance rates", href: "#" },
      { title: "Cash-out refinance calculator", href: "#" },
      { title: "Learning center", href: "#" },
    ],
  },
  {
    title: "HELOC",
    submenu: [
      { title: "Apply Now", href: "#" },
      { title: "Calculate your Cash", href: "#" },
      { title: "HELOC vs Cash-out Refinance", href: "#" },
      { title: "Learning center", href: "#" },
    ],
  },
  {
    title: "Rates",
    submenu: [
      { title: "Purchase mortgage rates", href: "#" },
      { title: "Refinance rates", href: "#" },
      { title: "Refinance Cash-out rates", href: "#" },
      { title: "HELOC rates", href: "#" },
      { title: "Purchase VA rates", href: "#" },
    ],
  },
  {
    title: "Better+",
    submenu: [
      { title: "Get Insurance", href: "#" },
      { title: "Title and Closing", href: "#" },
      { title: "Better Attorney Match", href: "#" },
      { title: "Learning center", href: "#" },
      { title: "Better Agent Match", href: "#" },
      { title: "Better Duo", href: "#" },
    ],
  },
];

const SubNavbar = ({ isOpen, closeNavbar }: SubNavbarProps) => {
  // State to manage dropdown visibility for each menu item
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Function to toggle dropdown
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-full bg-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-8">
        <div className="flex items-center justify-between text-black">
          <p className="text-3xl font-extrabold font-serif">Better</p>
          <FontAwesomeIcon
            icon={faClose}
            onClick={closeNavbar}
            className="text-2xl cursor-pointer"
          />
        </div>
        <div className="text-black">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className="text-xl font-normal mt-8 flex items-center justify-between cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                {item.title}
                {item.submenu && (
                  <FontAwesomeIcon
                    icon={openDropdown === index ? faSortUp : faSortDown}
                    className="ml-2"
                  />
                )}
              </div>
              {openDropdown === index && item.submenu && (
                <div className="w-full ml-4 mt-2 gap-4">
                  {item.submenu.map((subItem, subIndex) => (
                    <div key={subIndex} className="text-md font-normal mt-1">
                      <Link
                        href={subItem.href || "#"}
                        className="w-full h-[30px] hover:bg-gray-200 rounded-md px-4 flex items-center justify-start py-6"
                      >
                        {subItem.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="w-full h-[30px] mt-8 bg-green-100 rounded-2xl flex items-center justify-center gap-3">
            <FontAwesomeIcon icon={faPhone} />
            Call us anytime at{" "}
            <span className="underline hover:text-green-600">
              (415) 523 88371
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center px-3">
          <div className="w-full text-black bg-green-500 hover:border-green-900 flex flex-col items-center justify-center rounded-3xl py-2">
            <p className="text-lg font-semibold">Get Started</p>
            <p>3 min | no credit impact</p>
          </div>
          <div className="w-full text-black border hover:border-4 hover:border-green-900 flex items-center justify-center rounded-3xl mt-4 mb-4 py-4">
            <span>Sign in</span>
            <FontAwesomeIcon icon={faUser} className="ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
