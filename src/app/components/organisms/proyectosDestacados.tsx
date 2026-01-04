import { ProyectosDestacados } from "@/app/data";
import {
  encabezadoProyectosDestacados,
  footerProyectosDestacados,
} from "@/app/headersAndFootersCard";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export const SeccionProyectosDestacados = (
  <section id="proyectos-destacados" className="py-20 px-8 max-w-[1500px]">
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-4xl font-display font-bold text-primary mb-3">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600">
            Aprende paso a paso con nuestras guías completas
          </p>
        </div>
        <Button label="Ver Todos los Proyectos" outlined />
      </div>
      <div className="grid grid-cols-3 gap-8">
        {ProyectosDestacados.map((proyecto, index) => {
          const srcImg = proyecto.header.imagen.src;
          const altImg = proyecto.header.imagen.alt;
          const tipoDeproyecto = proyecto.header.tipoDeProyecto;
          const horasDeConstruccion = proyecto.header.tiempoDeConstruccion;
          const likes = proyecto.footer.likes;
          const comentarios = proyecto.footer.comentarios;
          const autor = proyecto.footer.autor;
          const imgSrcAutor = proyecto.footer.imagenDelAutor.src;
          const imgAltAutor = proyecto.footer.imagenDelAutor.alt;

          return (
            <Card
              key={proyecto.titulo + index}
              className="overflow-hidden shadow-lg! hover:shadow-2xl! group"
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
              <p className="text-xl">{proyecto.descripcion}</p>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
