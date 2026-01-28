import { ProyectosDestacados } from "@/app/data";
import {
  encabezadoProyectosDestacados,
  footerProyectosDestacados,
} from "@/app/headersAndFootersCard";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export const SeccionProyectosDestacados = (
  <section
    id="proyectos-destacados"
    className="py-10 px-8 w-full max-w-[1500px]"
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-display font-bold text-primary md:mb-3">
            Proyectos Destacados
          </h2>
          <p className="hidden md:flex">
            Aprende paso a paso con nuestras guías completas.
          </p>
        </div>
        <Button className="whitespace-nowrap" label="Ver más" text />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProyectosDestacados.map((proyecto, index) => {
          const srcImg = proyecto.imagen.src;
          const altImg = proyecto.imagen.alt;
          const tipoDeproyecto = proyecto.categoria;
          const horasDeConstruccion = proyecto.tiempoDeConstruccion;
          const likes = proyecto.likes;
          const comentarios = proyecto.comentarios;
          const autor = proyecto.autor.nombre;
          const imgSrcAutor = proyecto.autor.avatar;
          const imgAltAutor = proyecto.autor.nombre;

          return (
            <Card
              key={proyecto.titulo + index}
              className="overflow-hidden shadow-lg! hover:shadow-2xl! min-w-2xs group"
              title={proyecto.titulo}
              header={encabezadoProyectosDestacados({
                srcImg,
                altImg,
                tipoDeproyecto,
                horasDeConstruccion,
              })}
              footer={footerProyectosDestacados({
                likes,
                comentarios,
                autor,
                imgSrcAutor,
                imgAltAutor,
              })}
            >
              <p className="text-xl line-clamp-3">{proyecto.descripcion}</p>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
