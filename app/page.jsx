import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

//componentes
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between
      xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Estudante de Ciencia da Computação</span>
         <h2 className="h2 mb-4">
          Olá, me chamo 
         </h2>
         <h1 className="text-7xl mb-6">
         <span className="text-accent">Diego Jonathan</span>
         </h1>
         <div className="text-center md:text-center">
         <p className="max-w-[500px] mx-auto mb-9 text-white/80">
         Bem vindo ao meu portifolio! possuo conhecimentos em Python, SQL, BI, HTML e análise de dados. 
         Busco aplicar essas habilidades para desenvolver soluções inovadoras e contribuir para o setor de tecnologia e me aprimorar cada vez mais.
         </p>
         </div>
        {/* midias sociais */}  
          <div className="flex flex-col xl;flex-row items-center gap-8">
          <a href="https://drive.google.com/file/d/1AVhF2F0nFGIj_uY_QpwPpaQbju9X7SDf/view?usp=sharing" 
            target="_blank" rel="noopener noreferrer">
            <Button 
            variant="outline" 
            size="lg" 
            className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            </a>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border 
              border-accent rounded-full flex justify-center items-center 
              text-accent text-base hover:bg-accent hover:text-primary 
              hover:transition-all duration-500" />
            </div>
          </div>
        </div>
        {/* foto*/}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>;
};

export default Home;