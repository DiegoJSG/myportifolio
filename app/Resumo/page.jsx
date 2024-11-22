"use client";

import { VscVscode } from "react-icons/vsc";
import { IoLogoTableau } from "react-icons/io5";
import { SiWondersharefilmora } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";


import {
  FaFigma, 
  FaPython, 
  FaDatabase, 
  FaChartBar,
  FaJsSquare,
} from 'react-icons/fa';

import {SiTailwindcss, Sinextdotjs} from 'react-icons/si';

//dados sobre mim
const about = {
  title: "Sobre mim",
  description:
  `Sou um profissional com mais de oito anos de experiência na produção de massas e biscoitos, onde desenvolvi habilidades sólidas em processos, qualidade, trabalho em equipe, segurança e logística. 
  Em 2022, decidi iniciar uma transição de carreira para o mundo da tecnologia, com foco em Data Science. Para isso, concluí programas intensivos nas áreas de Python, SQL, BI, análise de dados, visualização e modelagem de dados, 
  além de machine learning, por meio de parcerias com a Alura (Grupo Boticário) e DIO (iFood).
  Atualmente, estou cursando Ciência da Computação pela Faculdade Descomplica, com o objetivo de aplicar esses novos conhecimentos e os ja adquiridos para desenvolver soluções inovadoras e eficientes,
  promovendo tanto meu crescimento pessoal e profissional quanto o avanço do setor de tecnologia.`,
  info: [
    {
      fieldName: "Nome:",
      fieldValue: "Diego Jonathan"
    },    
    {
      fieldName: "Nacionalidade:",
      fieldValue: "Brasileiro"
    },
    {
      fieldName: "Experiência:",
      fieldValue: "12 Anos"
    },
    {
      fieldName: "Linguas:",
      fieldValue: "Português (Nativo), Ingles C1 (Estudando)"
    },
  ]
};

// Experiencia Profissional
const experience = {
  icon: '/public/assets/resume/badge.svg',
  title: "Esperiências",
  description: 
  '',
  items: [    
    {
      company: <a href="https://www.marilan.com" target="_blank" rel="noopener noreferrer">Marilan Alimentos S.A</a>,
      position: "Preparador de Massas",
      duration: "2015 - 2023",
    },    
    {
      company: <a href="https://www.facebook.com/precocerto.supermercado/" target="_blank" rel="noopener noreferrer">Supermercado Preço Certo</a>,
      position: "Repositor",
      duration: "2012 - 2014",
    },
    {
      company: <a href="https://amaemarilia.com.br/" target="_blank" rel="noopener noreferrer">DAEM</a>,
      position: "Menor Aprendiz",
      duration: "2010 - 2011",
    },
  ],
};

// Experiencia Acadêmica
const education = {
  icon: '/public/assets/resume/cap.svg',
  title: "Formações",

  items: [
    {
      institution: <a href="https://descomplica.com.br" target="_blank" rel="noopener noreferrer">Faculdade Descomplica</a>,
      degree: <a href="https://certificados.descomplica.com.br/graduacao/1903205fa6862a8895f6b97c7596b09f5541d45b15d8be39deee8ac18b94e09c">Ensino Superior|Ciencia da Computação</a>,
      duration: "2024 - 2028",
    },
    {
      institution: <a href="https://www.unicesumar.edu.br/home/" target="_blank" rel="noopener noreferrer">Unicesumar</a>,
      degree: <a href="https://drive.google.com/file/d/1yAUttqeIx-hLPogU6oWKmehy0jo2b5z7/view?usp=sharing">Superior Técnico em Processos Gerenciais</a>,
      duration: "2020 - 2024",
    },
    {
      institution: <a href="https://www.dio.me" target="_blank" rel="noopener noreferrer">DIO|Potência Tech powered by iFood</a>,
      degree: <a href="https://drive.google.com/file/d/1yAUttqeIx-hLPogU6oWKmehy0jo2b5z7/view?usp=sharing">Bootcamp Ciência de Dados</a>,
      duration: "3 Meses (2023)",
    },
    {
      institution: <a href="https://www.alura.com.br" target="_blank" rel="noopener noreferrer">Alura</a>,
      degree: <a href="https://drive.google.com/file/d/1yAUttqeIx-hLPogU6oWKmehy0jo2b5z7/view?usp=sharing">Programa Desenvolve|Data Science</a>,
      duration: "6 Meses (2023)",
    },
    {
      institution: "FlexComp",
      degree: <a href="https://drive.google.com/file/d/1yAUttqeIx-hLPogU6oWKmehy0jo2b5z7/view?usp=sharing">Designer Grafico (Profissionalizante)</a>,
      duration: "2012 - 2015",
    },
  ],
};

// Skills
const skills = {
  title: "Skills",
  description: 
  'Alguns tipos de softwares e códigos nos quais possuo conhecimento e que estou constantemente aprimorando minhas habilidades e expandindo meus conhecimentos.',
  skillList: [
    {
      icon: <FaPython/>,
      name: "Python",
    },
    {
      icon: <FaDatabase/>,
      name: "SQL / NoSQL",
    },
    {
      icon: <FaFigma/>,
      name: "Figma",
    },
    {
      icon: <FaChartBar/>,
      name: "Dashboards",
    },
    {
      icon: <FaJsSquare/>,
      name: "javaScript",
    },
    {
      icon: <VscVscode/>,
      name: "VSCode",
    },
    {
      icon: <IoLogoTableau/>,
      name: "Tableau",
    },
    {
      icon: <SiWondersharefilmora/>,
      name: "WonderShareFilmora",
    },
    {
      icon: <SiAdobephotoshop/>,
      name: "Photoshop",
    },
  ],
};


import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const resumo = () => {
    return (
    <motion.div 
    initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about" 
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380] mx-auto xl:mx-0 
          gap-6">            
            <TabsTrigger value="about">Sobre</TabsTrigger>
            <TabsTrigger value="experience">Experiências Profissionais</TabsTrigger>
            <TabsTrigger value="education">Formação</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* conteudo */}
          <div className="min-h-[70vh] w-full">

            {/* Sobre mim */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return( 
                    <li key={index} className="flex item-center justify-center 
                    xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>  

            {/* Experiências */}
            <TabsContent value="experience" className="w-full">
              <TooltipProvider> {/* Envolva o conteúdo com TooltipProvider */}
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[300px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[#232329] h-[200px] py-8 px-12 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>

                            {/* Cargo na Empresa */}
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>

                            {/* Empresa com Tooltip */}
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <p className="text-white/60 hover:text-accent">
                                    {item.company}
                                  </p>
                                </TooltipTrigger>
                                <TooltipContent
                                  side="top"
                                  className="bg-white text-black p-2 rounded-md shadow-lg"
                                >
                                  <a
                                    href={item.company} // Link para o site da empresa
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black"
                                  >
                                    Site da Empresa
                                  </a>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TooltipProvider>
            </TabsContent>

            {/* Formações */}
            <TabsContent value="education" className="w-full">
              <TooltipProvider> {/* Envolva o conteúdo com TooltipProvider */}
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[300px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li key={index} className="bg-[#232329] h-[184px] py-0 px-4 rounded-md flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>

                            {/* certificado (degree) com Tooltip */}
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <a
                                    href={item.degree}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-accent hover:underline transition-all"
                                  >
                                    {item.degree}
                                  </a>
                                </TooltipTrigger>
                                <TooltipContent
                                  side="top"
                                  className="bg-white text-black p-2 rounded-md shadow-lg" 
                                >
                                  <a
                                    href={item.degree} // Link para o certificado
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black" 
                                  >
                                    Ver Certificado
                                  </a>
                                </TooltipContent>
                              </Tooltip>
                            </h3>

                            {/* Instituição com Tooltip */}
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <p className="text-white/60 hover:text-accent">
                                    {item.institution}
                                  </p>
                                </TooltipTrigger>
                                <TooltipContent
                                  side="top"
                                  className="bg-white text-black p-2 rounded-md shadow-lg" 
                                >
                                  <a
                                    href={item.institution} // Link para o site da instituição
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black" 
                                  >
                                    Site da Instituição
                                  </a>
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TooltipProvider>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className=" flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, index) => {
                    return( 
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[100px] py-7 px-0
                          bg-[#232329] rounded-xl flex justify-center item-center group">
                            <div className="text-5xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent >
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>  
                              
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
  
  export default resumo;