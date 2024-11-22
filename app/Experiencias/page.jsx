"use client";  

import { BsArrowDownRight } from "react-icons/bs";  
import Link from "next/link";  
import { motion } from "framer-motion";  

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger } 
  from "@/components/ui/tooltip";

const experiencias = [  
  {     
    num: "Marilan Alimentos S/A",     
    title: "Preparador de Massas",     
    description: `       
      <ul>       
        <li>• Trabalhei na elaboração de massas de várias linhas de produção.</li>       
        <li>• Comprovação pontual, temperatura, viscosidade, controle de qualidade de massas de acordo com as normas ISO.</li>       
        <li>• Preencher relatórios.</li>       
        <li>• Operação de transpaleteira elétrica de condução / Lista de verificação de segurança NR 11.</li>       
      </ul></br>       
      <h4>Conquistas:</h4>       
      <div style="border-left: 2px solid white; padding-left: 10px;">         
        Por conta da experiência e capacidade de trabalhar em várias linhas de produção demonstrei versatilidade e          
        habilidade para me adaptar a diferentes ambientes e processos e também em controlar a qualidade dos produtos sem contar a familiaridade com algumas normas de segurança.       
      </div>       
    `,     
    href: "https://www.marilan.com/"   
  },   
  {     
    num: "Supermercados Preço Certo Center LTDA",     
    title: "Repositor",     
    description: `         
      <ul>         
        <li>• Reposição de mercadorias de variados tipos.</li>         
        <li>• Checagem de estoque e entrega de alimentos à domicílio.</li>         
        <li>• Controle de validade de produtos e reposição de itens próximos ao vencimento.</li>         
        <li>• Auxiliando clientes nas dúvidas e garantindo uma boa experiência de compra.</li>         
        <li>• Descarga de materiais.</li>         
        <li>• Higienização e organização de itens e superfícies.</li>         
      </ul></br>         
      <h4>Conquistas:</h4>         
      <div style="border-left: 2px solid white; padding-left: 10px;">         
        Como diferencial ajudei na melhoria na eficiência do processo de reposição de mercadorias,          
        resultando em estoques mais precisos e redução de perdas e redução de reclamações de clientes relacionadas à higiene e organização dos produtos.         
      </div>         
    `,     
    href: "https://www.facebook.com/precocerto.supermercado/"   
  },   
  {     
    num: "Departamento de Água e Esgoto de Marília (DAEM)",     
    title: "Customer Service Attendant - Aprendiz",     
    description: `       
      <ul>       
        <li>• Atendimento ao cliente por telefone.</li>       
        <li>• Transferência de atividades do dia-a-dia para colegas de trabalho.</li>       
        <li>• Auxílio na solicitação e conferência de documentos.</li>       
        <li>• Organização de planilhas e atividades diárias.</li>       
      </ul></br>       
      <h4>Conquistas:</h4>       
      <div style="border-left: 2px solid white; padding-left: 10px;">       
        Por demonstrar disposição e comprometimento acabava fazendo varias tarefas simultaneamente,        
        garantindo o cumprimento de prazos e a eficiência nas atividades diárias ganhando notoriedade em meio a equipe.       
      </div>       
    `,     
    href: "https://www.daem.com.br/"   
  }, 
];  

const Experiencias = () => {  
  return (     
    <section className="sm:h-[40vh] md:h-[160vh] lg:h-[110vh] xl:h-[225vh] flex flex-col justify-center py-10 xl:py-0">         
      <div className="container mx-auto">         
        <div className="text-center xl:text-left order-2 xl:order-none text-accent">         
          <h3 className="h3 mb-8">Experiências Profissionais</h3>         
        </div>         
        <motion.div            
          initial={{ opacity: 0 }}            
          animate={{            
            opacity: 1,            
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },         
          }}         
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"         
        >           
          {experiencias.map((experiencia, index) => (             
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">               
              {/* topo */}               
              <div className="w-full flex justify-between items-center">                 
                <div className="text-4xl font-extrabold text-outline                 
                text-transparent group-hover:text-outline-hover transition-all                  
                duration-500">                   
                  {experiencia.num}               
                </div>                 
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger
                      className="w-[60px] h-[60px] rounded-full
                      bg-white group-hover:bg-accent transition-all duration-500 flex
                      justify-center items-center hover:-rotate-45"
                    >
                      <Link href={experiencia.href}>
                        <BsArrowDownRight className="text-primary text-3xl" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Site da Empresa</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>               
              {/* titulo */}               
              <h2 className="text-[20px] font-bold leading-none text-white                
              group-hover:text-accent transition-all duration-500">               
              {experiencia.title}               
              </h2>               
              {/* descrição */}               
              <div               
                className="text-white/60"               
                dangerouslySetInnerHTML={{ __html: experiencia.description }}               
              ></div>               
              {/* borda */}               
              <div className="border-b border-white/20 w-full mt-2"></div>             
            </div>           
          ))}         
        </motion.div>       
      </div>     
    </section>   
  );   
};  

export default Experiencias;
