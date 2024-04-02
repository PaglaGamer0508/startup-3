import Image, { StaticImageData } from "next/image";
import React from "react";

interface ClientProps {
  userImage: string | StaticImageData;
  testimonial: string;
  clientName: string;
}

const Client: React.FC<ClientProps> = ({
  userImage,
  testimonial,
  clientName,
}) => {
  return (
    <div className="border-2 border-white/15 w-fit p-6 rounded-lg h-52">
      <div className="flex gap-x-5 h-full">
        <Image alt="client" src={userImage} className="w-14 h-14" />
        <div className="flex flex-col justify-between h-full">
          <p className="max-w-[260px]">{testimonial}</p>
          <p className="text-sm pt-4 opacity-30 uppercase">{clientName}</p>
        </div>
      </div>
    </div>
  );
};

export default Client;
