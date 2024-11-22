"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue, 
  } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [ /* meus dados */
  {
    icon: <FaPhoneAlt />,
    title: "Fone",
    description: "+55 (14) 99791-2450",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "diego.ssj1@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Endereço",
    description: "Marília, São Paulo",
  },
];

import { motion } from "framer-motion";

const Contato = () => {
    return (
    <motion.section       
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: 1, 
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="py-6"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
      <div className="xl:w-[54%] order-2 xl:order-none">
        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
          <h3 className="text-4xl text-accent">Vamos Trabalhar Juntos !</h3>
          <p className="text-white/60">
            Entre em contato.
          </p>
          {/* informações */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Primeiro Nome"
            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-2 text-base placeholder:text-white/60 outline-none"
          />
          <input
            type="text"
            placeholder="Último Nome"
            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-2 text-base placeholder:text-white/60 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-2 text-base placeholder:text-white/60 outline-none"
          />
          <input
            type="tel"
            placeholder="Fone"
            className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-2 text-base placeholder:text-white/60 outline-none"
          />
          </div>
          {/* text area*/}
          <Textarea 
            className="h-[200px]"
            placeholder="Digite sua mensagem aqui."          
          />
          <Button size="md" className="max-w-40">Enviar</Button>
        </form>
      </div>
        {/* dados */}
        <div className="flex-1 flex items-center xl:justify-end order-1
        xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] 
                  bg-[#27272c] text-accent rounded-md flex items-center
                  justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div> 
  </motion.section >
  );
};
  
export default Contato;