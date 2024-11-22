"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import { IoLogoTableau } from "react-icons/io5";


import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger } 
  from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [ 
  {
    num: "Pão de Forma em Python",
    category: "",
    title: "",
    description: 
      "Projeto simples em python para brincar, vamos criar um pão caseiro juntos 😋",
    stack: [{ name: "Python" }, { name: "Visual Studio" }],
    image: "/assets/work/thumb1.png",
    tableau: "",
    github:"https://github.com/DiegoJSG/Pao_Caseiro.git",
  },
  {
    num: "Sistema Bancario com Python",
    category: "",
    title: "",
    description: 
      "Sistema bancário em python com algumas operações simples.",
    stack: [{ name: "Python" }, { name: "Visual Studio" }],
    image: "/assets/work/thumb2.png",
    tableau: "",
    github:"https://github.com/DiegoJSG/Sistema_Bancario_com_Python.git",
  },
  {
    num: "Curriculo Interativo",
    category: "",
    title: "",
    description: 
      "Curriculo Interativo mostrando minha trajetoria academica e trabalhista.",
    stack: [{ name: "SQL" }, { name: "Figma" }, { name: "Tableau" }],
    image: "/assets/work/thumb3.png",
    tableau: "https://public.tableau.com/app/profile/diego.guedes/viz/InteractiveResumePT-BR/CurrculoInterativo",
    github:"",
  },
  {
    num: "Netflix Dashboard",
    category: "",
    title: "",
    description: 
      "Dashboard para uma busca de dados da Netflix sobre Filmes e TV Show , mostrando sua faixa etária, sinopse e países que assistiram.",
    stack: [{ name: "SQL" }, { name: "Figma" }, { name: "Tableau" }],
    image: "/assets/work/thumb4.png",
    tableau: "https://public.tableau.com/app/profile/diego.guedes/viz/NetflixDashboard_16894533647380/Netflixpainel2_1",
    github:"",
  },
  {
    num: "Sistema de Gerenciamento de Estoque em SQL",
    category: "",
    title: "",
    description: 
      "Sistema de Gerenciamento de Estoque que oferece uma solução abrangente para ajudar as empresas a otimizar seus processos de gerenciamento de inventário.",
    stack: [{ name: "SQL" }, { name: "ETL" }],
    image: "/assets/work/thumb5.png",
    tableau: "",
    github:"https://github.com/DiegoJSG/Sistema_de_Gerenciamento_de_Estoque_em_SQL.git",
  },
  {
    num: "Registro de Despesas Pessoais em SQL",
    category: "",
    title: "",
    description: 
      "Criação de um banco de dados para coletar e analizar despesas pessoais.",
    stack: [{ name: "SQL" }, { name: "ETL" }],
    image: "/assets/work/thumb6.png",
    tableau: "",
    github:"https://github.com/DiegoJSG/Registro_de_Despesas_Pessoais_em_SQL.git",
  },
]

const Projetos = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //obter o índice de slides atual
    const currentIndex = swiper.activeIndex;
    //atualiza o estado do projeto com base no índice do slide atual
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
        {/* Título da página */}
        <div className="text-accent" style={{ marginLeft: "90px", marginTop: "20px" }}>
        <h3 className="h3 mb-8">Principais Projetos</h3>
        </div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
          xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* contorno do num */}
              <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* categoria dos projetos */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* descrição dos projetos */}
              <p className="text-white/60 text-[20px]">{project.description}</p>
              {/* stacks */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove a ultima virgula */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* borda */}
              <div className="border border-white/20"></div>
              {/* botões */}
              <div className="flex items-center gap-4">
                {/* botão do projetos tableau */}
                {project.tableau && (
                  <Link href={project.tableau}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                          <IoLogoTableau className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Repositorio Tableau</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* botão do github */}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Repositório Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30} 
            slidesPerView={1} 
            className="xl:h-[520] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map ((project, index) => {
                return (<SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative groupflex justify-center
                  items-center bg-pink-50/20">
                    {/* sobreposição */}
                    <div className="absolute top-0 bottom-0 w-full h-full 
                    bg-black/10 z-10">
                    </div>
                    {/* imagem */}
                    <div className="relative  w-full h-full">
                      <Image 
                      src={project.image} 
                      fill 
                      className="object-cover"
                      alt="" 
                      />
                    </div>
                  </div>

                </SwiperSlide>
                );
              })}
              {/* slider botões */}
              <WorkSliderBtns containerStyles="flex gap-2 relative bottom-0 z-20 
              w-full h-08 justify-end mt-2 xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
              w-[44px] h-[44px] flex justify-center items-center transition-all" 
              />
            </Swiper>  
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projetos;
