import Link from "next/link";
import React from "react";

export default function Logo({ children }: { children: React.ReactNode }) {
  return (
    <Link className="text-2xl text-white" href="/">
      {children}
    </Link>
  );
}
