import RoomBackgroundImage from "@/../public/bg-room.png";
import SkyBackgroundImage from "@/../public/bg-sky.png";
import WaveBackgroundImage from "@/../public/bg-wave.png";
import BackgroundImage from "@/../public/bg.png";
import Crew1 from "@/../public/crew1.png";
import Crew2 from "@/../public/crew2.png";
import Crew3 from "@/../public/crew3.png";
import Crew4 from "@/../public/crew4.png";
import Crew5 from "@/../public/crew5.png";
import User1 from "@/../public/user1.png";
import User2 from "@/../public/user2.png";
import User3 from "@/../public/user3.png";
import User4 from "@/../public/user4.png";
import Work1 from "@/../public/work1.png";
import Work2 from "@/../public/work2.png";
import Work3 from "@/../public/work3.png";
import Work4 from "@/../public/work4.png";
import Client from "@/components/Client";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Work from "@/components/Work";
import Image from "next/image";

import ContactForm from "@/components/ContactForm";
import Crew from "@/components/Crew";
import { BiLogoMediumOld } from "react-icons/bi";
import {
  FaDribbble,
  FaGit,
  FaInstagram,
  FaPhoneAlt,
  FaRegBuilding,
  FaSkype,
  FaTwitter
} from "react-icons/fa";
import { IoIosMail, IoLogoFacebook } from "react-icons/io";

export default function Home() {
  return (
    <div>
      {/* Landing Section */}
      <div className="relative pb-28">
        <Image
          alt="background"
          src={BackgroundImage}
          className="absolute w-full h-full object-cover opacity-50"
          layout="fill"
        />
        <div className="relative">
          <Navbar />

          <Slider />

          <div className="grid place-items-center">
            <button className="bg-[#482BE7] hover:bg-[#2f0fdb] active:scale-95 transition-all duration-75 py-3 px-6 rounded-full">
              Create a Account
            </button>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative">
        <Image
          alt="background"
          src={WaveBackgroundImage}
          className="absolute w-full h-full object-cover opacity-50"
          layout="fill"
        />

        <div className="relative px-10 py-36 max-w-[670px] mx-auto">
          <p className="text-center text-sm">FREE SAMPLE</p>
          <h1 className="text-3xl md:text-5xl text-center font-bold py-6">
            Powerful Generator and Free Figma Sources
          </h1>
          <p className="text-center text-gray-400">
            Startup Framework contains components and complex blocks which can
            easily be integrated into almost any design. All of the components
            are made in the same style, and can easily be integrated into
            projects, allowing you to create hundreds of solutions.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative">
        <Image
          alt="background"
          src={WaveBackgroundImage}
          className="absolute w-full h-full object-cover opacity-50"
          layout="fill"
        />

        <div className="relative lg:flex gap-10 justify-between items-center px-5 md:px-16 lg:px-44 py-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-semibold py-5 lg:py-10">
              We solve digital problems with an outstanding creative flare
            </h1>
            <p className="max-w-[400px] text-center lg:text-left mx-auto lg:mx-0">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
          </div>

          <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
            <Form />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-[#1e0e62] grid place-items-center px-5 py-20">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold pb-8">
            Our Happy Clients
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-fit">
            <Client
              userImage={User1}
              testimonial="Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support"
              clientName="Rayhan Curran"
            />
            <Client
              userImage={User2}
              testimonial="As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website"
              clientName="Kayley Frame"
            />
            <Client
              userImage={User3}
              testimonial="The most important part of the Startup Framework is the samples"
              clientName="Gene Whitfield"
            />
            <Client
              userImage={User4}
              testimonial="I’ve built my website with Startup just in one day, and it was ready-to-go."
              clientName="Allan Kim"
            />
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="relative">
        <Image
          alt="background"
          src={SkyBackgroundImage}
          className="absolute w-full h-full object-cover opacity-70"
          layout="fill"
          quality={100}
        />

        <div className="relative grid place-items-center px-5 py-32">
          <div>
            <div>
              <h1 className="text-4xl md:text-6xl text-center font-semibold py-2">
                Easy to setup.
              </h1>
              <h1 className="text-4xl md:text-6xl text-center font-semibold py-2">
                Easy to maintain
              </h1>
              <p className="text-xl pt-8 max-w-[470px] text-center">
                Bootstrap is a widely-used, sleek, intuitive and powerful
                front-end framework for faster and easier web development.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-12">
              <button className="bg-[#EA3223] hover:bg-[#d42b1e] grid clear-start p-6 rounded-full focus:outline-none active:scale-95 transition-all duration-75">
                <svg
                  className="rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                >
                  <path d="M24 22h-24l12-20z" />
                </svg>
              </button>

              <button className="bg-[#25DAC5] hover:bg-[#22c9b6] grid clear-start px-16 py-6 rounded-full text-lg font-medium focus:outline-none active:scale-95 transition-all duration-75">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase Works */}
      <div className="bg-[#2f1893] px-5 py-20 w-fit mx-auto">
        <div>
          <div className="flex justify-between items-center pb-8">
            <h1 className="text-3xl md:text-4xl font-semibold">Last Works</h1>

            <button className="py-3 px-5 border-2 border-white/30 hover:border-white active:scale-95 transition-all duration-75 rounded-full">
              View all Works
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-14 w-fit mx-auto">
            <Work name="UI KIT" title="Mozart Project" workImage={Work1} />
            <Work
              name="Framework"
              title="Startup Framework 2.0"
              workImage={Work2}
            />
            <Work name="Photos" title="From the Sky" workImage={Work3} />
            <Work name="Pictures" title="Air Forces" workImage={Work4} />
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-[#2f1893] px-5 lg:px-20 py-20">
        <h1 className="text-3xl md:text-4xl font-semibold pb-8">
          Startup Crew
        </h1>
        <p className="text-lg max-w-[600px]">
          The most important part of the Startup Framework is the samples. The
          samples form a set of 25 usable pages you can use as is or you can add
          new blocks from UI Kit.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 max-w-[800px] py-16">
          <Crew crewImage={Crew1} name="Leah Salomon" role="UI Designer">
            <FaTwitter />
            <IoLogoFacebook />
            <FaDribbble />
            <FaInstagram />
          </Crew>

          <Crew crewImage={Crew2} name="Colin Timmons" role="UX Designer">
            <FaTwitter />
            <FaDribbble />
          </Crew>

          <Crew
            crewImage={Crew3}
            name="Miguel Osborne"
            role="Front-end Developer"
          >
            <FaSkype />
            <BiLogoMediumOld />
            <FaGit />
          </Crew>

          <Crew crewImage={Crew4} name="Taylor Simon" role="Product Manager">
            <FaTwitter />
            <FaInstagram />
          </Crew>

          <Crew crewImage={Crew5} name="Steven MacAlister" role="Copyrighter">
            <FaTwitter />
          </Crew>
        </div>
      </div>

      {/* Contact */}
      <div className="relative py-20 px-10 lg:px-40">
        <Image
          alt="background"
          src={RoomBackgroundImage}
          className="absolute w-full h-full object-cover opacity-60"
          layout="fill"
        />

        <div className="relative">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-semibold pb-8">
                Let’s Keep in Touch
              </h1>
              <p className="text-lg max-w-[330px]">
                We have created a new product that will help designers,
                developers and companies create websites for their startups
                quickly and easily.
              </p>

              <div className="flex flex-col gap-y-3 lg:gap-y-10 pt-3 lg:pt-10">
                <div className="flex gap-x-3">
                  <FaPhoneAlt />
                  <p>+1 555 505 5050</p>
                </div>

                <div className="flex gap-x-3">
                  <IoIosMail />
                  <p>info@designmodo.com</p>
                </div>

                <div className="flex gap-x-3">
                  <FaRegBuilding />
                  <p className="max-w-[270px]">
                    San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
                    230909
                  </p>
                </div>
              </div>
            </div>

            {/* contact Form */}
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
