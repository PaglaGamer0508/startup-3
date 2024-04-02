import SandBackgroundImage from "@/../public/bg-sand.png";
import DiamondIcon from "@/../public/diamond.png";
import LaptopImage from "@/../public/laptop.png";
import PageIcon from "@/../public/page.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div className="relative py-20 md:py-36 px-6 md:px-16">
      <Image
        alt="background"
        src={SandBackgroundImage}
        className="absolute w-full h-full object-cover opacity-50"
        layout="fill"
        quality={100}
      />

      <Link href="/" className="absolute top-3 left-3">
        <BsArrowLeft className="w-8 h-8" />
      </Link>

      <Image
        alt="laptop"
        src={LaptopImage}
        className="hidden lg:block absolute top-20 -left-[28rem] w-[56rem] h-auto"
      />

      <div className="flex justify-between items-center relative lg:ml-[28rem]">
        <div className="max-w-[500px]">
          <div>
            <h1 className="text-4xl font-semibold py-5">
              We Create Something New
            </h1>
            <p className="text-lg">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
          </div>

          <div className="flex items-center gap-x-3 pt-14">
            <div className="flex flex-col gap-y-4">
              <Image alt="" src={PageIcon} />
              <h1 className="font-medium">30 New feature pages</h1>
              <p className="text-sm">
                Startup Framework contains components and complex blocks which
                can easily.
              </p>
            </div>

            <div className="flex flex-col gap-y-4">
              <Image alt="" src={DiamondIcon} />
              <h1 className="font-medium">Useful Symbol Components</h1>
              <p className="text-sm">
                Samples will show you the feeling on how to play around using
                the components.
              </p>
            </div>
          </div>
        </div>

        <div className="grid place-items-center pl-6">
          <div className="flex flex-col gap-y-3">
            <button
              className={`w-[10px] h-[10px] border rounded-full transition-colors duration-75 bg-white`}
            ></button>
            <button
              className={`w-[10px] h-[10px] border rounded-full transition-colors duration-75 `}
            ></button>
            <button
              className={`w-[10px] h-[10px] border rounded-full transition-colors duration-75 `}
            ></button>
            <button
              className={`w-[10px] h-[10px] border rounded-full transition-colors duration-75 `}
            ></button>
            <button
              className={`w-[10px] h-[10px] border rounded-full transition-colors duration-75 `}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
