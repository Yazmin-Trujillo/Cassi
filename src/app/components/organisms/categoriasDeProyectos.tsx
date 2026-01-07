import { CategoriasDeProyectos } from "@/app/data";
import {
  encabezadoCategoriasDeProyectos,
  footerCategoriasDeProyectos,
} from "@/app/headersAndFootersCard";
import { TiposDeProyectos } from "@/app/types";
import { Card } from "primereact/card";

export const SeccionCategoriasDeProyectos = (
  <section
    id="categorias-section"
    className="pt-20 pb-10 px-8 bg-white w-full max-w-[1500px]"
  >
    <div className="max-w-7xl mx-auto flex flex-col w-full items-center gap-4">
      <h2 className="text-center">Categorías de Proyectos</h2>
      <p className="text-center">
        Explora diferentes áreas de sustentabilidad y encuentra el proyecto
        perfecto para ti
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
        {CategoriasDeProyectos.map((categoria, index) => {
          const tipoDeproyecto = categoria.header.tipoDeProyecto;
          const srcImg = categoria.header.imagen.src;
          const altImg = categoria.header.imagen.alt;
          const numeroDeProyectos = categoria.footer.numeroDeProyectos;
          const tipoDeProyectoF = categoria.footer.tipoDeProyecto;
          return (
            <Card
              key={categoria.titulo || categoria.tituloMB + index}
              className={`group my-header max-w-xs bg-gradient-to-br! hover:shadow-xl transition cursor-pointer border-2 border-transparent
                          ${
                            tipoDeproyecto === TiposDeProyectos.Compostaje
                              ? "from-green-50! to-emerald-50! hover:border-accent"
                              : tipoDeproyecto === TiposDeProyectos.Agua
                              ? "from-blue-50! to-cyan-50! hover:border-blue-400"
                              : tipoDeproyecto === TiposDeProyectos.Energias
                              ? "from-amber-50! to-yellow-50! hover:border-amber-400"
                              : "from-rose-50 to-pink-50 hover:border-rose-400"
                          }
                          `}
              title={
                <>
                  <div className="md:hidden text-center">
                    {categoria.tituloMB}
                  </div>
                  <div className="hidden md:flex">{categoria.titulo}</div>
                </>
              }
              header={encabezadoCategoriasDeProyectos({
                tipoDeproyecto,
                srcImg,
                altImg,
              })}
              footer={footerCategoriasDeProyectos({
                numeroDeProyectos,
                tipoDeProyectoF,
              })}
            >
              <p className="m-0 text-xl">{categoria.descripcion}</p>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
