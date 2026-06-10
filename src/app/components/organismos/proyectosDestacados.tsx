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
          const srcImg = proyecto.image.src;
          const altImg = proyecto.image.alt;
          const category = proyecto.category;
          const subCategorys = proyecto.subCategorys;
          const constructionTime = proyecto.constructionTime;
          const likes = proyecto.likes;
          const comments = proyecto.comments;
          const author = proyecto.author.name;
          const imgSrcAutor = proyecto.author.avatar;
          const imgAltAutor = proyecto.author.name;

          return (
            <Card
              key={proyecto.id}
              className="overflow-hidden shadow-lg! hover:shadow-2xl! min-w-2xs group"
              title={proyecto.title}
              header={encabezadoProyectosDestacados({
                srcImg,
                altImg,
                category,
                subCategorys,
                constructionTime,
              })}
              footer={footerProyectosDestacados({
                id,
                likes,
                comments,
                author,
                imgSrcAutor,
                imgAltAutor,
              })}
            >
              <p className="text-xl line-clamp-3">{proyecto.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
