"use client";
import { ProyectosDestacados } from "@/app/data";
import {
  encabezadoProyectosDestacados,
  footerProyectosDestacados,
} from "@/app/headersAndFootersCard";
import Link from "next/link";
import { Card } from "primereact/card";
import { Button } from "../atomos/button";
import { Header } from "../moleculas/header";

export const SeccionProyectosDestacados = (
  <section id="proyectos-destacados" className="px-8 w-full max-w-[1500px]">
    <div className="max-w-7xl mx-auto">
      <Header
        title="Proyectos Destacados"
        content=" Aprende paso a paso con nuestras guías completas."
        button
        buttonContent="Ver todos"
        link="/proyectos"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ProyectosDestacados.map((proyecto) => {
          const id = proyecto.id;
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
              key={proyecto.id}
              className="overflow-hidden shadow-lg! hover:shadow-2xl! min-w-2xs group"
              title={proyecto.titulo}
              header={encabezadoProyectosDestacados({
                srcImg,
                altImg,
                tipoDeproyecto,
                horasDeConstruccion,
              })}
              footer={footerProyectosDestacados({
                id,
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
