import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="px-10 md:px-20 py-12 bg-[#2f1893]">
      <div className="flex flex-col gap-y-10">
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-bold">Startup 3</h1>

          <ul className="space-y-3 md:space-y-0 md:flex items-center gap-x-6">
            <li>Privacy Policy</li>
            <li>Terms</li>

            <FaFacebookF className="w-6 h-6" />
            <FaTwitter className="w-6 h-6" />
            <FaGooglePlusG className="w-8 h-6" />
          </ul>
        </div>

        <hr className="border-none h-[2px] bg-[#ffffff5b]" />

        <div className="flex justify-between items-center gap-3 flex-wrap">
          <ul className="space-y-3 md:space-y-0 md:flex items-center gap-x-6">
            <li>Tour</li>
            <li>Features</li>
            <li>Pricing Plans</li>
            <li>Our Works</li>
            <li>Brands</li>
            <li>Contacts</li>
          </ul>

          <p className="flex gap-2 items-center">
            <FaRegCopyright />
            <span>2017 Designmodo. All rights reserved.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
