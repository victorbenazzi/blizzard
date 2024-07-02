import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/** Images **/
import LogoBlizzard from "../../public/logos/logo-blizzard.svg";
import Navbar from "./Navbar";
import { User } from "lucide-react";

export default function Header() {
  return (
    <div className=" flex items-center justify-center w-full border-b-[1.5px] border-white/15 z-40 ">
      <header className="flex items-center justify-between w-full max-w-[1220px] h-24 relative">
        <div className="w-[43px] h-[2px] bg-[#00AEFF] absolute left-0 bottom-0"></div>
        <Image src={LogoBlizzard} alt="Blizzard Logo" width={87} height={40} />
        <Navbar />
        <div className="inline-flex gap-x-2">
          <Button variant="outline"> Criar conta</Button>
          <Button>
            {" "}
            <User size={14} strokeWidth={3} className="mr-2" /> Logar
          </Button>
        </div>
      </header>
    </div>
  );
}
