"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP);

interface FormProps {}

const Form: React.FC<FormProps> = ({}) => {
  const [isSignInPage, setIsSignInPage] = useState(false);
  const formSliderContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div>
        <div className="flex">
          <button
            onClick={() => setIsSignInPage(false)}
            className="w-1/2 grid place-items-center p-5 focus:outline-none"
          >
            <span
              className={`${
                !isSignInPage ? "text-black" : "text-gray-500"
              } font-bold transition-colors duration-75`}
            >
              SIGN UP
            </span>
          </button>
          <button
            onClick={() => setIsSignInPage(true)}
            className="w-1/2 grid place-items-center p-5 focus:outline-none"
          >
            <span
              className={`${
                isSignInPage ? "text-black" : "text-gray-500"
              } font-bold transition-colors duration-75`}
            >
              SIGN IN
            </span>
          </button>
        </div>
        <div className="h-1 bg-[#EBEAED]">
          <div
            className={`${
              isSignInPage ? "translate-x-full" : ""
            } bg-black w-1/2 h-full transition-all duration-300 ease-out`}
          ></div>
        </div>
      </div>

      <div>
        <div
          className={`flex w-[200%] h-full transition-all duration-300 ease-out ${
            isSignInPage ? "-translate-x-[50%]" : ""
          }`}
        >
          <div className="w-full px-8 md:px-16 py-16">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Email"
                className="border-2 border-[#EBEAED] font-medium text-black focus:outline-none px-5 py-3 rounded-full w-full"
              />
              <input
                type="password"
                placeholder="Your Password"
                className="border-2 border-[#EBEAED] font-medium text-black focus:outline-none px-5 py-3 rounded-full w-full"
              />
              <button className="bg-[#25DAC5] hover:bg-[#25c4b2] active:scale-95 transition-all duration-75 px-5 py-3 rounded-full w-full">
                Create an Account
              </button>

              <div className="flex items-center gap-x-4">
                <div className="w-1/2 h-[1px] bg-[#EBEAED]"></div>
                <span className="text-gray-400">or</span>
                <div className="w-1/2 h-[1px] bg-[#EBEAED]"></div>
              </div>

              <button className="bg-[#1DA1F2] hover:bg-[#1d93db] active:scale-95 transition-all duration-75 px-5 py-3 rounded-full w-full">
                Login via Twitter
              </button>
            </div>
          </div>

          <div className="w-full px-8 md:px-16 py-16">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Email"
                className="border-2 border-[#EBEAED] font-medium text-black focus:outline-none px-5 py-3 rounded-full w-full"
              />
              <input
                type="password"
                placeholder="Your Password"
                className="border-2 border-[#EBEAED] font-medium text-black focus:outline-none px-5 py-3 rounded-full w-full"
              />
              <button className="bg-[#25DAC5] hover:bg-[#25c4b2] active:scale-95 transition-all duration-75 px-5 py-3 rounded-full w-full">
                Sign In
              </button>

              <div className="flex items-center gap-x-4">
                <div className="w-1/2 h-[1px] bg-[#EBEAED]"></div>
                <span className="text-gray-400">or</span>
                <div className="w-1/2 h-[1px] bg-[#EBEAED]"></div>
              </div>

              <button className="bg-[#1DA1F2] hover:bg-[#1d93db] active:scale-95 transition-all duration-75 px-5 py-3 rounded-full w-full">
                Login via Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
