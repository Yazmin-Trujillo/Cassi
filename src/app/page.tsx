import { Menubar } from "primereact/menubar";
import { menuEnd, menuItems, menuStart } from "./data";
import { SeccionHero } from "./components/organismos/heroSeccion";
import { SeccionCategoriasDeProyectos } from "./components/organismos/categoriasDeProyectos";
import { SeccionProyectosDestacados } from "./components/organismos/proyectosDestacados";
import { SeccionComoFunciona } from "./components/organismos/comoFunciona";
import { SeccionMaterialesPopulares } from "./components/organismos/materialesPopulares";
import { SeccionExperienciasCompartidas } from "./components/organismos/experienciasCompartidas";
import { Button } from "primereact/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
      <header
        id="header"
        className="bg-white/95 backdrop-blur-md shadow-sm max-w-[1500px] w-full"
      >
        <Menubar model={menuItems} start={menuStart} end={menuEnd} />
      </header>
      <main className="flex overflow-hidden min-h-screen w-full flex-col items-center justify-between ">
        {SeccionHero}
        {SeccionCategoriasDeProyectos}
        {SeccionProyectosDestacados}
        {SeccionComoFunciona}
        {SeccionMaterialesPopulares}
        {SeccionExperienciasCompartidas}
        <section
          id="cta-section"
          className="mx-4 mb-20 bg-gradient-to-br from-primary to-secondary rounded-3xl p-6 text-white"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mx-auto mb-4 flex items-center justify-center">
              <i className="text-3xl" data-fa-i2svg="">
                <svg
                  className="svg-inline--fa fa-earth-americas"
                  width="2rem"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="earth-americas"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                  ></path>
                </svg>
              </i>
            </div>
            <h2 className="mb-2 text-white!">Únete a la Comunidad</h2>
            <p className="text-white/90! mb-6">
              Más de 5,000 personas construyendo un futuro sustentable
            </p>
            <Button className="bg-white! text-primary! w-full">
              Comenzar Ahora
            </Button>
          </div>
        </section>

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
    </div>
  );
}
