"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// Remover importações do Dialog
// import * as Dialog from "@radix-ui/react-dialog"; // Não necessário
// import { DialogTitle, DialogContent, DialogClose } from "@radix-ui/react-dialog"; // Não necessário

const links = [
  { name: "Pagina Inicial", path: "/" },
  { name: "Experiências", path: "/Experiencias" },
  { name: "Projetos", path: "/Projetos" },
  { name: "Resumo", path: "/Resumo" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path} 
          key={index} 
          className={`${link.path === pathname ? "text-accent border-b-2 border-accent" : ""} 
          text-xl capitalize hover:text-accent transition-all`}
        > 
          {link.name}
        </Link>
      ))}

      {/* O botão de diálogo foi removido */}
    </nav>
  );
};

export default Nav;