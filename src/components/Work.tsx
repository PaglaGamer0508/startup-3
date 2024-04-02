import Image, { StaticImageData } from "next/image";
import React from "react";

interface WorkProps {
  workImage: string | StaticImageData;
  title: string;
  name: string;
}

const Work: React.FC<WorkProps> = ({ workImage, title, name }) => {
  return (
    <div className="flex flex-col gap-2">
      <Image alt="Work" src={workImage} className="h-52 w-auto" />
      <p className="text-center text-xs pt-3">{name}</p>
      <h1 className="text-center">{title}</h1>
    </div>
  );
};

export default Work;
