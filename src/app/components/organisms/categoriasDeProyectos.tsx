import { CategoriasDeProyectos } from "@/app/data";
import {
  encabezadoCategoriasDeProyectos,
  footerCategoriasDeProyectos,
} from "@/app/headersAndFootersCard";
import { TiposDeProyectos } from "@/app/types";
import { Card } from "primereact/card";

export const SeccionCategoriasDeProyectos = (
  <section id="categorias-section" className="py-20 px-8 bg-white">
    <div className="max-w-7xl mx-auto flex flex-col p-8 w-full items-center gap-4">
      <h2>Categorías de Proyectos</h2>
      <p>
        Explora diferentes áreas de sustentabilidad y encuentra el proyecto
        perfecto para ti
      </p>
      <div className="flex gap-4">
        {CategoriasDeProyectos.map((categoria, index) => {
          const tipoDeproyecto = categoria.header.tipoDeProyecto;
          const srcImg = categoria.header.imagen.src;
          const altImg = categoria.header.imagen.alt;
          const numeroDeProyectos = categoria.footer.numeroDeProyectos;
          const tipoDeProyectoF = categoria.footer.tipoDeProyecto;
          return (
            <Card
              key={categoria.titulo + index}
              className={`group my-header bg-gradient-to-br! hover:shadow-xl transition cursor-pointer border-2 border-transparent
                          ${
                            tipoDeproyecto === TiposDeProyectos.Compostaje
                              ? "from-green-50! to-emerald-50! hover:border-[var(--compostaje-color)]"
                              : tipoDeproyecto === TiposDeProyectos.Agua
                              ? "from-blue-50! to-cyan-50! hover:border-blue-400"
                              : tipoDeproyecto === TiposDeProyectos.Energias
                              ? "from-amber-50! to-yellow-50! hover:border-amber-400"
                              : "from-rose-50 to-pink-50 hover:border-rose-400"
                          }
                          `}
              title={categoria.titulo}
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
