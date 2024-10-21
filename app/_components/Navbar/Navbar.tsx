"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

// Import Components
import Container from "./_components/Container";
import Links from "./_components/Links";
import Dropdown from "./_components/Dropdown";
import CallDropdownContainer from "./_components/CallDropdownContainer";
import SubNavbar from "./_components/SubNavbar";

// Dropdown items
const BuyItems = [
  { title: "Apply Now", href: "#" },
  { title: "Purchase rates", href: "#" },
  { title: "Affordibility Calculator", href: "#" },
  { title: "Mortgage Calculator", href: "/mortgage-calculator" },
  { title: "Rent vs buy Calculator", href: "#" },
  { title: "Find an agent", href: "#" },
  { title: "VA Loans", href: "#" },
  { title: "Learning center", href: "#" },
];

const RefinanceItems = [
  { title: "Apply Now", href: "#" },
  { title: "Refinance rates", href: "#" },
  { title: "Cash-out refinance calculator", href: "#" },
  { title: "Learning center", href: "#" },
];

const HelocItems = [
  { title: "Apply Now", href: "#" },
  { title: "Calculate your Cash", href: "#" },
  { title: "HELOC vs Cash-out Refinance", href: "#" },
  { title: "Learning center", href: "#" },
];

const RatesItems = [
  { title: "Purchase mortgage rates", href: "#" },
  { title: "Refinance rates", href: "#" },
  { title: "Refinance Cash-out rates", href: "#" },
  { title: "HELOC rates", href: "#" },
  { title: "Purchase VA rates", href: "#" },
];

const BetterItems = [
  { title: "Get Insurance", href: "#" },
  { title: "Title and Closing", href: "#" },
  { title: "Better Attorney Match", href: "#" },
  { title: "Learning center", href: "#" },
  { title: "Better Agent Match", href: "#" },
  { title: "Better Duo", href: "#" },
];

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className = "" }: NavbarProps) => {
  const [isSubNavbarOpen, setSubNavbarOpen] = useState(false);

  const toggleSubNavbar = () => {
    setSubNavbarOpen(!isSubNavbarOpen);
  };

  return (
    <nav
      className={`w-full h-[50px] flex items-center justify-between px-24 pt-6 text-lg ${className}`}
    >
      {/* Left side */}
      <Container>
        {/* Logo */}
        <div className="text-3xl font-extrabold font-serif">Better</div>
        {/* Links for large screens */}
        <Container className="hidden xl:flex">
          <Links title="Buy" dropdown={<Dropdown items={BuyItems} />} />
          <Links
            title="Refinance"
            dropdown={<Dropdown items={RefinanceItems} />}
          />
          <Links title="HELOC" dropdown={<Dropdown items={HelocItems} />} />
          <Links title="Rates" dropdown={<Dropdown items={RatesItems} />} />
          <Links title="Better+" dropdown={<Dropdown items={BetterItems} />} />
        </Container>
      </Container>

      {/* Right side */}
      <Container>
        {/* Call with dropdown */}
        <CallDropdownContainer />
        {/* Sign in */}
        <Links title="Sign in" />
        {/* Bars icon for smaller screens */}
        <div className="block xl:hidden text-2xl cursor-pointer">
          <FontAwesomeIcon icon={faBars} onClick={toggleSubNavbar} />
        </div>
      </Container>

      {/* SubNavbar for small screens, with slide-in transition */}
      {isSubNavbarOpen && (
        <SubNavbar isOpen={isSubNavbarOpen} closeNavbar={toggleSubNavbar} />
      )}
    </nav>
  );
};

export default Navbar;
