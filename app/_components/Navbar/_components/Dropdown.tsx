import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";

interface DropdownItem {
  title: string;
  href: string; // href is optional
}

interface DropdownProps {
  items: DropdownItem[];
}

const Dropdown = ({ items }: DropdownProps) => {
  return (
    <div className="w-[300px] rounded-md bg-white">
      <ul className="list-none">
        {items.map((item, index) => (
          <li
            key={index}
            className="py-2 px-4 hover:bg-gray-200 cursor-pointer rounded-md flex items-center justify-between group"
          >
            <Link href={item.href} className="flex justify-between w-full">
              <span>{item.title}</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
