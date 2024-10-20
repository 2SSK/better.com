"use client";
import React, { useState, useEffect } from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import Links from "./Links";

const CallDropdownContainer = () => {
  const [showCallDropdown, setShowCallDropdown] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setShowCallDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowCallDropdown(false);
    }, 100);

    setHideTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, [hideTimeout]);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Links icon={faPhone} />
      {showCallDropdown && (
        <CallDropdown
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
};

function CallDropdown({
  handleMouseEnter,
  handleMouseLeave,
}: {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}) {
  return (
    <div
      className="absolute right-0 top-full mt-2 w-[300px] border-0 rounded-xl p-4 bg-white text-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Call us anytime at{" "}
      <a href="#" className="underline hover:text-green-700">
        415-523-8880
      </a>
    </div>
  );
}

export default CallDropdownContainer;
