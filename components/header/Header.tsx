import React from "react";

import MenuLink from "@/components/header/MenuLink";
import Logo from "@/components/header/Logo";

export default function Header() {
  return (
    <header className="w-full px-16 fixed bg-slate-500 py-6 flex items-center justify-between">
      <Logo>Every</Logo>
      <ul className="flex items-center gap-8 justify-between">
        <li>
          <MenuLink name="Login" href="/login" />
        </li>
        <li>
          <MenuLink name="Boards" href="/boards" />
        </li>
      </ul>
    </header>
  );
}
