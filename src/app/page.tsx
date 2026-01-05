import { Menubar } from "primereact/menubar";
import { menuEnd, menuItems, menuStart } from "./data";
import { SeccionHero } from "./components/organisms/heroSeccion";
import { SeccionCategoriasDeProyectos } from "./components/organisms/categoriasDeProyectos";
import { SeccionProyectosDestacados } from "./components/organisms/proyectosDestacados";
import { SeccionComoFunciona } from "./components/organisms/comoFunciona";
import { SeccionProyectosDeLaComunidad } from "./components/organisms/proyectosDeLaComunidad";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
      <header
        id="header"
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50"
      >
        <Menubar model={menuItems} start={menuStart} end={menuEnd} />
      </header>
      <main className="flex overflow-hidden min-h-screen w-full flex-col items-center justify-between sm:items-start">
        {SeccionHero}
        {/*  {SeccionCategoriasDeProyectos}
        {SeccionProyectosDestacados}
        {SeccionComoFunciona}
        {SeccionProyectosDeLaComunidad}*/}

        {/* <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"></div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>*/}
      </main>
    </div>
  );
}
