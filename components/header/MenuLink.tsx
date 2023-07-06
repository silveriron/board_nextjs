import Link from "next/link";

interface MenuLinkProps {
  name: string;
  href: string;
}

export default function MenuLink({ name, href }: MenuLinkProps) {
  return (
    <Link className="hover:text-slate-300 text-white" href={href}>
      {name}
    </Link>
  );
}
