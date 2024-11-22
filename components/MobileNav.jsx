"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
// Remover importações do Dialog
// import * as Dialog from "@radix-ui/react-dialog"; // Não necessário
// import { DialogTitle, DialogContent, DialogClose } from "@radix-ui/react-dialog"; // Não necessário


const links = [
  { name: "Pagina Inicial", path: "/" },
  { name: "Experiências", path: "/Experiencias" },
  { name: "Projetos", path: "/Projetos" },
  { name: "Resumo", path: "/Resumo" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Fecha o menu quando o pathname muda
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (!mounted) {
    return null;
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center hover:opacity-75 transition-opacity">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      
      <SheetContent className="flex flex-col bg-primary border-l border-accent/20">
        {/* Logo */}
        <div className="py-14 text-center gap-6">
          <Link 
            href="/"
            onClick={() => setIsOpen(false)}
            className="inline-block hover:opacity-75 transition-opacity"
          >
            <h1 className="text-4xl font-semibold">
              Diego J<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navegação */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={() => setIsOpen(false)}
              className={`
                ${link.path === pathname ? "text-accent border-b-2 border-accent" : "text-white"}
                text-xl capitalize hover:text-accent transition-all duration-300
                relative after:content-[''] after:absolute after:left-0 after:bottom-0
                after:h-[2px] after:w-0 after:bg-accent
                after:transition-all after:duration-300
                hover:after:w-full
              `}
            >
              {link.name}
            </Link>
            ))}
              <Link href="/Contato" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  className="text-accent hover:bg-accent hover:text-primary border border-accent px-6 py-2"
                  >
                  Contato
                </Button>
             </Link>
          </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;