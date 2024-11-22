"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 12,
        text: "Anos de Experiência Profissional (diferentes funções)",
    },
    {
        num: 21,
        text: "Projetos Realizados (Atividades/Desafios)",
    },
    {
        num: 19,
        text: "Contribuições no GitHub",
    },
    {
        num: 123,
        text: "Total de Commits",
    },
];

const Stats = () => {
    return( <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className=".container.mx-auto">
            <div className="grid grid-cols-0  gap-4 max-w-[80vw] mx-auto xl:flex xl:gap-8 xl:max-w-none">
                {stats.map((item, index) => {
                    return( 
                        <div 
                        className="flex-1 flex gap-4 items-center justify-left
                        xl:justify-start"
                        key={index}
                        >
                            <CountUp 
                            end={item.num} 
                            duration={5} 
                            delay={2}
                            className="text-4xl xl:text-6xl font-extrabold ml-5" 
                            />
                            <p className={`${
                                item.text.length < 15 ? "max-w-[180px]" : "max-w[150px]"
                                } leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>);
};

export default Stats;
