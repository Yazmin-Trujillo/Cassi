"use client";
import React, { useState, useMemo } from "react";
import { Button } from "primereact/button";
import { TiposDeProyectos } from "../types";
import { projects } from "../data";
import { EtiquetaDeCategorias } from "../utils";
import { Card } from "primereact/card";
import {
  encabezadoProyectosDestacados,
  footerProyectosDestacados,
} from "../headersAndFootersCard";

export default function Proyectos() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Todos",
    "Compostaje",
    "Agua",
    "Huertos",
    "Energías",
    // "Bioconstrucción",
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCat =
        activeCategory === "Todos" || project.categoria === activeCategory;
      const matchesSearch = project.titulo
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Header / Hero */}
      <header className="bg-white border-b border-stone-200 pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-green-900 mb-2">
                Proyectos
              </h1>
              <p className="text-stone-600 text-lg">
                Aprende paso a paso con nuestras guías completas y comparte tu
                avance.
              </p>
            </div>
            <Button
              icon="pi pi-plus-circle"
              label="Subir mi Proyecto"
              className="text-start!"
            />
          </div>

          {/* Filtros y Búsqueda */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar">
              {categories.map((cat, index) => (
                <Button
                  key={cat + index}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap! text-white w-auto! border-2! ${
                    activeCategory === cat &&
                    activeCategory === TiposDeProyectos.COMPOSTAJE
                      ? "bg-emerald-50! text-accent! border-accent!"
                      : activeCategory === cat &&
                          activeCategory === TiposDeProyectos.AGUA
                        ? "bg-cyan-50! text-blue-600! border-blue-400!"
                        : activeCategory === cat &&
                            activeCategory === TiposDeProyectos.ENERGIAS
                          ? "bg-yellow-50! text-amber-600! border-amber-400!"
                          : activeCategory === cat &&
                              activeCategory === TiposDeProyectos.HUERTOS
                            ? "bg-pink-50! text-rose-600! border-rose-400!"
                            : activeCategory === cat &&
                                activeCategory === "Todos"
                              ? "bg-green-100! text-green-800! border-green-800!"
                              : "bg-stone-100! text-stone-500! hover:bg-stone-200! border-2 border-transparent!"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              {/* <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={18} />*/}
              <input
                type="text"
                placeholder="Buscar guías..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-green-600 transition-all outline-none"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Grid de Proyectos */}
      <main className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proyecto) => {
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
                  likes,
                  comentarios,
                  autor,
                  imgSrcAutor,
                  imgAltAutor,
                })}
              >
                <p className="text-xl line-clamp-3">{proyecto.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Sección de Comunidad */}
        <section className="mt-20 bg-green-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-white! text-3xl md:text-4xl font-bold mb-6">
              ¿Realizaste este proyecto?
            </h2>
            <p className="text-green-100! text-lg mb-8">
              Comparte fotos de tu resultado, consejos para otros miembros y
              ayuda a crecer la comunidad de agroecología urbana.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-green-900 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-green-50 transition-colors">
                Publicar mi Experiencia
                <i
                  className="ml-2 group-hover:translate-x-1 transition"
                  data-fa-i2svg=""
                >
                  <svg
                    className="svg-inline--fa fa-arrow-right"
                    width="0.9rem"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="arrow-right"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    ></path>
                  </svg>
                </i>
              </button>
              <button className="bg-green-800 text-white border border-green-700 px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-colors">
                Ver Galería Comunitaria
              </button>
            </div>
          </div>
          {/* Decoración visual */}
          <i
            className="text-white absolute -bottom-10 -right-10  opacity-20 rotate-45"
            data-fa-i2svg=""
          >
            <svg
              className="svg-inline--fa fa-leaf"
              width={"300px"}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="leaf"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
              ></path>
            </svg>
          </i>
          <i
            style={{ fontSize: "200px" }}
            className="pi pi-hammer absolute -top-10 right-20 text-white opacity-10 -rotate-12"
          ></i>
        </section>
      </main>

      {/* Footer Simple */}
      <footer className="bg-stone-100 py-12 px-6 mt-12 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-green-800 font-bold text-xl">
            <i className="text-primary text-xl" data-fa-i2svg="">
              <svg
                className="svg-inline--fa fa-leaf"
                width={"1.5rem"}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="leaf"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
                ></path>
              </svg>
            </i>
            <span>EcoDIY Agro</span>
          </div>
          <p className="text-stone-500 text-sm">
            © 2026 Plataforma de Sustentabilidad. Construyamos un futuro más
            verde.
          </p>
          <div className="flex gap-6 text-stone-400">
            <a href="#" className="hover:text-green-700">
              Términos
            </a>
            <a href="#" className="hover:text-green-700">
              Tienda
            </a>
            <a href="#" className="hover:text-green-700">
              Comunidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
