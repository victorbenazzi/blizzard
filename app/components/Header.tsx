import React from "react";
import Image from "next/image";

/** Images **/
import LogoBlizzard from "../../public/logos/logo-blizzard.svg";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full max-w-[1220px]">
      <Image src={LogoBlizzard} alt="Blizzard Logo" width={87} height={40} />
      <Navbar />
    </header>
  );
}
