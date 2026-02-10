import { SeccionHero } from "./components/organismos/heroSeccion";
import { SeccionCategoriasDeProyectos } from "./components/organismos/categoriasDeProyectos";
import { SeccionProyectosDestacados } from "./components/organismos/proyectosDestacados";
import { SeccionComoFunciona } from "./components/organismos/comoFunciona";
import { SeccionMaterialesPopulares } from "./components/organismos/materialesPopulares";
import { SeccionExperienciasCompartidas } from "./components/organismos/experienciasCompartidas";
import { BannerSingIn } from "./components/organismos/bannerSingIn";
import { ExperienciasCompartidas } from "./data";

export default function Home() {
  const titulo = "Experiencias Compartidas";
  const datosDeLasExperiencias = ExperienciasCompartidas.slice(0, 3);

  return (
    <main className="flex overflow-hidden min-h-screen w-full flex-col font-sans gap-16 items-center justify-between ">
      {SeccionHero}
      {SeccionCategoriasDeProyectos}
      {SeccionProyectosDestacados}
      {SeccionComoFunciona}
      {SeccionMaterialesPopulares}
      {SeccionExperienciasCompartidas({ titulo, datosDeLasExperiencias })}
      {BannerSingIn}

      {/*{SeccionProyectosDeLaComunidad}*/}

      {/* <div classNameName="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"></div>
        <div classNameName="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            classNameName="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            classNameName="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>*/}
    </main>
  );
}
