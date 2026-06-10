import { Button } from "./components/atomos/button";
import Link from "next/link";
import {
  ContenidoProyectosDeLaComunidad,
  EncabezadoCategoriasDeProyectos,
  EncabezadoProyectosDestacados,
  FooterCategoriasDeProyectos,
  FooterProyectosDestacados,
  Category,
} from "./types";
import { EtiquetaCategorias } from "./utils";
import { Divider } from "primereact/divider";

export const encabezadoCategoriasDeProyectos = ({
  category,
  srcImg,
  altImg,
}: EncabezadoCategoriasDeProyectos) => (
  <div
    className={`size-[4rem] rounded-xl flex items-center justify-center group-hover:scale-110 transition ${
      category === Category.RESIDUOS
        ? "bg-primary"
        : category === Category.AGUA
          ? "bg-blue-600 "
          : category === Category.ENERGIAS
            ? "bg-amber-600 "
            : "bg-rose-600"
    }`}
  >
    <img
      alt={altImg}
      src={srcImg}
      style={{ width: "2rem", color: "white" }}
    ></img>
  </div>
);

export const footerCategoriasDeProyectos = ({
  projectNumbers,
  category,
}: FooterCategoriasDeProyectos) => (
  <div
    className={`hidden md:flex items-center text-sm font-semibold ${
      category === Category.RESIDUOS
        ? "text-accent"
        : category === Category.AGUA
          ? "text-blue-600 "
          : category === Category.ENERGIAS
            ? "text-amber-600 "
            : "text-rose-600"
    }`}
  >
    <span>{projectNumbers} proyectos</span>
    <i className="ml-2 group-hover:translate-x-1 transition" data-fa-i2svg="">
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
  </div>
);

export const encabezadoProyectosDestacados = ({
  srcImg,
  altImg,
  category,
  subCategorys,
  constructionTime,
}: EncabezadoProyectosDestacados) => (
  <div className="h-64 overflow-hidden relative">
    {srcImg ? (
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        src={srcImg}
        alt={altImg}
      />
    ) : (
      <img
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        src="https://img.freepik.com/vector-gratis/fondo-estilo-comic_23-2148809728.jpg"
        alt="Fondo determinado"
      />
    )}
    <div className="absolute top-4 left-4 max-w-full overflow-hidden">
      <div className="flex items-center gap-4 flex-wrap">
        {EtiquetaCategorias(category, true)}
        {subCategorys.length > 0
          ? subCategorys.map((item) => EtiquetaCategorias(item, false))
          : null}
      </div>
    </div>

    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-primary flex items-center space-x-1">
      <i className="pi pi-clock"></i>
      <span>{constructionTime}</span>
    </div>
  </div>
);

export const footerProyectosDestacados = ({
  id,
  likes,
  comments,
  author,
  imgSrcAutor,
  imgAltAutor,
}: FooterProyectosDestacados) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <i className="pi pi-heart-fill text-red-500"></i>
            <span>{likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <i className="pi pi-comment"></i>
            <span>{comments}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={imgSrcAutor}
            alt={imgAltAutor}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">{author}</span>
        </div>
      </div>
      <Divider />
      <div className="flex items-center justify-between gap-4 w-full">
        <Link href={`/proyectos/${id}`} className="w-1/2">
          <Button kind="Primary" classNameButton="w-full">
            Ver Guía
          </Button>
        </Link>
        <Button
          kind="Outlined"
          classNameButton="w-1/2"
          iconLeft
          icon="CartShopping"
        >
          Materiales
        </Button>
      </div>
    </>
  );
};

export const encabezadoProyectosDeLaComunidad = ({
  srcImg,
  altImg,
}: {
  srcImg: string;
  altImg: string;
}) => (
  <div className="h-72 rounded-xl overflow-hidden relative">
    <img
      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      src={srcImg}
      alt={altImg}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
      <Button kind="Outlined" classNameButton="bg-white text-primary w-full">
        Ver Detalles
      </Button>
    </div>
  </div>
);

export const contenidoProyectosDeLaComunidad = ({
  titulo,
  imgSrcAutor,
  imgAltAutor,
  autor,
  likes,
  comentarios,
}: ContenidoProyectosDeLaComunidad) => (
  <div className="text-xl">
    <div className="flex items-center space-x-3 mb-2">
      <img
        src={imgSrcAutor}
        alt={imgAltAutor}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <p className="font-semibold text-gray-900!">{titulo}</p>
        <div className="text-sm text-gray-500">Por {autor}</div>
      </div>
    </div>
    <div className="flex items-center space-x-3 text-sm text-gray-500">
      <div className="flex items-center space-x-1">
        <i className="pi pi-heart-fill text-red-500"></i>
        <span>{likes}</span>
      </div>
      <div className="flex items-center space-x-1">
        <i className="pi pi-comment"></i>
        <span>{comentarios}</span>
      </div>
    </div>
  </div>
);
