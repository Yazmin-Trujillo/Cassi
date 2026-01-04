import { Menubar } from "primereact/menubar";
import { SeccionHero } from "./components/organisms/heroSeccion";
import { SeccionCategoriasDeProyectos } from "./components/organisms/categoriasDeProyectos";
import { SeccionProyectosDestacados } from "./components/organisms/proyectosDestacados";
import { menuEnd, menuItems, menuStart, ProyectosDeLaComunidad } from "./data";
import { SeccionComoFunciona } from "./components/organisms/comoFunciona";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import {
  contenidoProyectosDeLaComunidad,
  encabezadoProyectosDeLaComunidad,
} from "./headersAndFootersCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
      <header
        id="header"
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50"
      >
        <Menubar model={menuItems} start={menuStart} end={menuEnd} />
      </header>
      <main className="flex py-4 min-h-screen w-full flex-col items-center justify-between dark:bg-black sm:items-start">
        {SeccionHero}
        {SeccionCategoriasDeProyectos}
        {SeccionProyectosDestacados}
        {SeccionComoFunciona}

        <section id="comunidad-section" className="py-20 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-primary mb-4">
                Proyectos de la Comunidad
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre lo que otros miembros están creando y comparte tus
                propias experiencias
              </p>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {ProyectosDeLaComunidad.map((proyecto, index) => {
                const srcImg = proyecto.header.imagen.src;
                const altImg = proyecto.header.imagen.alt;
                const titulo = proyecto.titulo;
                const imgSrcAutor = proyecto.imagenDelAutor.src;
                const imgAltAutor = proyecto.imagenDelAutor.alt;
                const autor = proyecto.autor;
                const likes = proyecto.likes;
                const comentarios = proyecto.comentarios;
                return (
                  <Card
                    key={proyecto.titulo + index}
                    style={{
                      border: 0,
                      boxShadow: "none",
                      backgroundColor: "transparent",
                    }}
                    className="group especial overflow-hidden cursor-pointer"
                    header={encabezadoProyectosDeLaComunidad({
                      srcImg,
                      altImg,
                    })}
                  >
                    {contenidoProyectosDeLaComunidad({
                      titulo,
                      imgSrcAutor,
                      imgAltAutor,
                      autor,
                      likes,
                      comentarios,
                    })}
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"></div>
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
        </div>
      </main>
    </div>
  );
}
