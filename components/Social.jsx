import Link from "next/link";

import { IoLogoTableau } from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/DiegoJSG", name: "GitHub" },
    { icon: <FaEnvelope />, path: "mailto:diego.ssj1@gmail.com", name: "E-mail" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/diego-jonathan-coder/", name: "LinkedIn" },
    { icon: <IoLogoTableau />, path: "https://public.tableau.com/app/profile/diego.guedes/", name: "Tableau" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <TooltipProvider delayDuration={100}>
            <div className={containerStyles}>
                {socials.map((item, index) => {
                    return (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <Link href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                                    {item.icon}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="top" align="center">
                                <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    );
                })}
            </div>
        </TooltipProvider>
    );
};

export default Social;
