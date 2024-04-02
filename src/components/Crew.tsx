import Image, { StaticImageData } from "next/image";
import React from "react";

interface CrewProps {
  children: React.ReactNode;
  crewImage: string | StaticImageData;
  name: string;
  role: string;
}

const Crew: React.FC<CrewProps> = ({ children, crewImage, name, role }) => {
  return (
    <div>
      <Image alt="crew" src={crewImage} className="w-20 h-20" />
      <h1 className="py-3 font-medium">{name}</h1>
      <p className="text-sm">{role}</p>
      <div className="flex gap-x-6 pt-6">{children}</div>
    </div>
  );
};

export default Crew;
