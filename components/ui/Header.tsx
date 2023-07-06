import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full px-16 fixed bg-slate-500 py-6 flex items-center justify-between">
      <Link href="/">Every</Link>
      <ul className="flex items-center gap-8 justify-between">
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/boards">Boards</Link>
        </li>
      </ul>
    </header>
  );
}
