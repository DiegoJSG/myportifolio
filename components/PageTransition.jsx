"use client";

import { AnimatePresence, motion } from "framer-motion"; // Corrigido para importar motion
import { usePathname } from "next/navigation";

const Pagetransition = ({ children }) => {
  const pathname = usePathname();
  
  return (
    <AnimatePresence>
      <motion.div 
        key={pathname}
        initial={{ opacity: 1 }} 
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none" // Corrigido para pointer-events-none
      />
      {children}
    </AnimatePresence>
  );
};

export default Pagetransition;