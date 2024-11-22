import Link from "next/link";
import { Button } from "./ui/button";


// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return ( 
    <header className="py-8 xl/:py12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Diego J<span className="text-accent">.</span>
          </h1>
        </Link>


        {/* desktop nav & contate me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/Contato"}>
              <Button>Contato</Button>
          </Link>
        </div> 

          {/* celular(mobile) nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>

      </div>
    </header>
  );
};

export default Header;
