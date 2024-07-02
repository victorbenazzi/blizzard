import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

/** Images **/
import LogoBlizzard from "../../public/logos/logo-blizzard.svg";
import Navbar from "./Navbar";
import { User } from "lucide-react";

export default function Header() {
  return (
    <div className=" flex items-center justify-center w-full border-b border-neutral-800">
      <header className="flex items-center justify-between w-full max-w-[1220px] h-24 ">
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
