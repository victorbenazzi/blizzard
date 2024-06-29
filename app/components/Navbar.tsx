"use client";

import { ChevronDown } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <nav className="text-neutral-200 text-sm flex items-center justify-center w-fit">
      <ul className="flex items-center gap-x-[34px]">
        <li className="hover:text-white flex items-center justify-center gap-x-3 cursor-pointer group">
          <a href="#">Jogos</a>
          <ChevronDown size={14} className="group-hover:text-primary" />
        </li>
        <li className="hover:text-white flex items-center justify-center gap-x-3 cursor-pointer group">
          <a href="#">Esportes</a>
          <ChevronDown size={14} className="group-hover:text-primary" />
        </li>
        <li className="hover:text-white">
          <a href="#">Loja</a>
        </li>
        <li className="hover:text-white">
          <a href="#">Notícias</a>
        </li>
        <li className="hover:text-white">
          <a href="#">Suporte</a>
        </li>
      </ul>
    </nav>
  );
}
