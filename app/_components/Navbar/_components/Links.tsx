"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface LinksProps {
  title?: string;
  icon?: IconProp;
  dropdown?: ReactNode;
}

const Links = ({ title, icon, dropdown }: LinksProps) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    // Set a timeout to hide the dropdown after a short delay
    const timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 100);

    setHideTimeout(timeout);
  };

  // Cleanup timeout on component unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      if (hideTimeout) clearTimeout(hideTimeout);
    };
  }, [hideTimeout]);

  return (
    <div
      className={`relative px-4 py-2 rounded-3xl cursor-pointer transition-all duration-300 ease-in-out ${
        icon ? "border border-white" : ""
      } hover:bg-white hover:text-black`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>{icon ? <FontAwesomeIcon icon={icon} /> : <div>{title}</div>}</div>

      {dropdown && showDropdown && (
        <div
          className="absolute left-0 top-full bg-white rounded-md mt-2 p-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {dropdown}
        </div>
      )}
    </div>
  );
};

export default Links;
