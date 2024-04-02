"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBehance, FaDribbble } from "react-icons/fa";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const pathname = usePathname().split("/")[1];

  return (
    <div className="grid place-items-center py-14">
      <ul className="flex gap-x-10">
        <li>
          <Link href={`/`} className={`${pathname === "" && "opacity-30"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link href={`/features`}>
            Features
          </Link>
        </li>
        <li>
          <Link href={`/pricing`}>
            Pricing
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <FaDribbble className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <FaBehance className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
