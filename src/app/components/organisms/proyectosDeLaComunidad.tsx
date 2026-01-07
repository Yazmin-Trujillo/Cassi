import { ProyectosDeLaComunidad } from "@/app/data";
import {
  contenidoProyectosDeLaComunidad,
  encabezadoProyectosDeLaComunidad,
} from "@/app/headersAndFootersCard";
import { Card } from "primereact/card";

export const SeccionProyectosDeLaComunidad = (
  <section id="comunidad-section" className="py-20 w-full px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold text-primary mb-4">
          Proyectos de la Comunidad
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre lo que otros miembros están creando y comparte tus propias
          experiencias
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
);
