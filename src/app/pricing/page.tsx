import BackgroundPricing from "@/../public/bg-pricing.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div className="relative min-h-screen px-5 py-5 lg:py-12">
      <Image
        alt="background"
        src={BackgroundPricing}
        className="absolute w-full h-full object-cover opacity-60"
        layout="fill"
      />

      <Link href="/" className="absolute top-3 left-3">
        <BsArrowLeft className="w-8 h-8" />
      </Link>

      <div className="relative">
        <h1 className="text-3xl md:text-4xl text-center font-bold py-6">
          Plans & Pricing
        </h1>
        <p className="text-center font-medium max-w-[430px] mx-auto">
          Startup Framework is free forever — you only pay for custom domain
          hosting or to export your site.
        </p>

        <div className="flex justify-center flex-wrap gap-6 mt-12">
          <div className="border-2 border-white/20 p-14 rounded-xl">
            <p className="text-xl font-medium">Starter</p>
            <div className="flex py-12">
              <h1 className="text-6xl font-bold">9.99</h1>
              <sup className="text-lg">$</sup>
            </div>

            {/* things you will get */}
            <div className="flex flex-col gap-y-5 pb-12">
              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">2 GB of space</p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  14 days of backups
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  Social integrations
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  Client billing
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3 opacity-0" />
                <p className="text-lg font-light leading-none opacity-70">
                  Remote access
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3 opacity-0" />
                <p className="text-lg font-light leading-none opacity-70">
                  Custom domain
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3 opacity-0" />
                <p className="text-lg font-light leading-none opacity-70">
                  24 hours support
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3 opacity-0" />
                <p className="text-lg font-light leading-none opacity-70">
                  Admin tools
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3 opacity-0" />
                <p className="text-lg font-light leading-none opacity-70">
                  Collaboration tools
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3 opacity-0" />
                <p className="text-lg font-light leading-none opacity-70">
                  User management
                </p>
              </div>
            </div>

            <button className="text-lg border-2 border-white/30 py-3 px-16 md:px-20 rounded-full mx-auto hover:bg-white/10 active:scale-95 transition-all duration-75">
              Get Started
            </button>
          </div>

          <div className="border-2 border-white/20 p-14 rounded-xl">
            <p className="text-xl font-medium">Professional</p>
            <div className="flex py-12">
              <h1 className="text-6xl font-bold">19.99</h1>
              <sup className="text-lg">$</sup>
            </div>

            {/* things you will get */}
            <div className="flex flex-col gap-y-5 pb-12">
              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">2 GB of space</p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  14 days of backups
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  Social integrations
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  Client billing
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">Remote access</p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">Custom domain</p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  24 hours support
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">Admin tools</p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  Collaboration tools
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  User management
                </p>
              </div>
            </div>

            <button className="text-lg border-2 border-[#E93A7D] hover:border-[#d33572] py-3 px-16 md:px-20 rounded-full mx-auto bg-[#E93A7D] hover:bg-[#d33572] active:scale-95 transition-all duration-75">
              Get Started
            </button>
          </div>

          <div className="border-2 border-white/20 p-14 rounded-xl">
            <p className="text-xl font-medium">Team</p>
            <div className="flex py-12">
              <h1 className="text-6xl font-bold">49.99</h1>
              <sup className="text-lg">$</sup>
            </div>

            {/* things you will get */}
            <div className="flex flex-col gap-y-5 pb-12">
              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">2 GB of space</p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  14 days of backups
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  Social integrations
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  Client billing
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">Remote access</p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">Custom domain</p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  24 hours support
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">Admin tools</p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  Collaboration tools
                </p>
              </div>

              <div className="flex items-start gap-x-2">
                <FaCheck className="text-[#18c867] h-3 w-3" />
                <p className="text-lg font-light leading-none">
                  User management
                </p>
              </div>
            </div>

            <button className="text-lg border-2 border-white/30 py-3 px-16 md:px-20 rounded-full mx-auto hover:bg-white/10 active:scale-95 transition-all duration-75">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
