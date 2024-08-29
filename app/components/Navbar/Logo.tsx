"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { SiHiltonhotelsandresorts } from "react-icons/si";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center cursor-pointer gap-3 "
    >
     
      <SiHiltonhotelsandresorts size={75} />
      
      <span className="MyHotel font-['Open-Sans'] text-xl">Hotella</span>
    </div>
  );
};

export default Logo;
