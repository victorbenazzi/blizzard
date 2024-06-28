"use client";

import React from "react";
import { CaretDown } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <nav className="text-neutral-200 text-sm flex items-center justify-center w-fit">
      <ul className="flex items-center gap-x-[34px]">
        <li className="hover:text-white flex items-center justify-center gap-x-[14px] cursor-pointer">
          <a href="#">Jogos</a>
          <CaretDown size={14} weight="bold" />
        </li>
        <li className="hover:text-white flex items-center justify-center gap-x-[14px] cursor-pointer">
          <a href="#">Esportes</a>
          <CaretDown size={14} weight="bold" />
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
