"use client";
import React, { useState, useMemo } from "react";
import { Button } from "primereact/button";
import { TiposDeProyectos } from "../types";
import { projects } from "../data";
import { EtiquetaDeCategorias } from "../utils";

export default function Proyectos() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "Todos",
    "Compostaje",
    "Agua",
    "Huertos",
    "Energias",
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
                    activeCategory === TiposDeProyectos.Compostaje
                      ? "bg-emerald-50! text-accent! border-accent!"
                      : activeCategory === cat &&
                          activeCategory === TiposDeProyectos.Agua
                        ? "bg-cyan-50! text-blue-600! border-blue-400!"
                        : activeCategory === cat &&
                            activeCategory === TiposDeProyectos.Energias
                          ? "bg-yellow-50! text-amber-600! border-amber-400!"
                          : activeCategory === cat &&
                              activeCategory === TiposDeProyectos.Huertos
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
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col group"
            >
              {/* Imagen y Badges */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image.src}
                  alt={project.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {EtiquetaDeCategorias(
                  project.categoria,
                  "absolute top-4 left-4",
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold text-stone-800">
                  <i className="pi pi-clock"></i>
                  {project.tiempoDeConstruccion}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-stone-900 mb-2 leading-tight">
                  {project.titulo}
                </h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Stats y Autor */}
                <div className="flex items-center justify-between mb-6 border-b border-stone-50 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-stone-400">
                      <i className="pi pi-heart-fill text-red-500"></i>
                      <span className="text-xs font-semibold">
                        {project.likes}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-stone-400">
                      <i className="pi pi-comment"></i>
                      <span className="text-xs font-semibold">
                        {project.comentarios}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={project.autor.avatar}
                      alt=""
                      className="w-6 h-6 rounded-full ring-1 ring-stone-200"
                    />
                    <span className="text-xs font-medium text-stone-500">
                      {project.autor.nombre}
                    </span>
                  </div>
                </div>

                {/* Botones de Acción */}
                <div className="mt-auto grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 bg-[#2d4a1e] hover:bg-[#1e3314] text-white py-3 rounded-xl font-bold text-sm transition-colors">
                    Ver Guía
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-white border-2 border-[#a3c585] text-[#2d4a1e] hover:bg-stone-50 py-3 rounded-xl font-bold text-sm transition-colors group/btn">
                    <i data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-cart-shopping"
                        width="1rem"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="cart-shopping"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                        ></path>
                      </svg>
                    </i>{" "}
                    Materiales
                  </button>
                </div>
              </div>
            </div>
          ))}
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
