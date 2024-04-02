"use client";

import React, { useState } from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-y-8 p-14 bg-white text-black rounded-lg overflow-hidden">
      <div className="flex items-center gap-x-6 flex-wrap">
        <div>
          <label
            htmlFor="first-name"
            className="block font-bold text-[#1e0e62] pb-3"
          >
            YOUR NAME
          </label>
          <input
            type="text"
            id="first-name"
            placeholder="First Name"
            className="border-2 border-[#EBEAED] font-medium text-black focus:outline-none px-5 py-3 rounded-full w-full"
          />
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block font-bold text-[#1e0e62] pb-3"
          >
            BUDGET
          </label>

          <div className="relative">
            <select
              name="cars"
              id="budget"
              defaultValue={"$500"}
              className="text-[#1e0e62] text-lg font-semibold border-2 border-[#EBEAED] py-[10px] px-6 pr-14 rounded-full appearance-none focus:outline-none"
            >
              <option value="$300">$300</option>
              <option value="$500">$500</option>
              <option value="$1000">$1000</option>
              <option value="$3000">$3000</option>
              <option value="$5000">$5000</option>
            </select>

            <FaChevronDown className="absolute top-[18px] right-5 text-[#1e0e62]" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block font-bold text-[#1e0e62] pb-3">
          YOUR EMAIL
        </label>
        <input
          type="email"
          id="email"
          placeholder="name@mail.com"
          className="border-2 border-[#EBEAED] font-medium text-black focus:outline-none px-5 py-3 rounded-full w-full"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-bold text-[#1e0e62] pb-3"
        >
          YOUR MESSAGE
        </label>
        <textarea
          id="message"
          placeholder="Message"
          className="border-2 border-[#EBEAED] font-medium text-black focus:outline-none px-5 py-3 rounded-lg w-full h-28 resize-none"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-3 font-medium">
          <button
            onClick={() => setIsChecked((prevCheck) => !prevCheck)}
            className={`${
              isChecked ? "bg-[#25DAC5]" : ""
            } p-[6px] rounded-md border border-teal-400`}
          >
            <FaCheck className={`${isChecked ? "" : "opacity-0"} text-black w-3 h-3`} />
          </button>

          <p className="text-[#151439]/40 font-semibold">Send me a copy</p>
        </div>

        <button className="bg-[#25DAC5] hover:bg-[#25c4b2] active:scale-95 transition-all duration-75 px-12 py-3 rounded-full font-medium text-white">
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
