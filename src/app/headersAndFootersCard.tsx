import { Button } from "primereact/button";
import {
  ContenidoProyectosDeLaComunidad,
  EncabezadoCategoriasDeProyectos,
  EncabezadoProyectosDestacados,
  FooterCategoriasDeProyectos,
  FooterProyectosDestacados,
  TiposDeProyectos,
} from "./types";
import { EtiquetaDeCategorias } from "./utils";
import { Divider } from "primereact/divider";
import { useRouter } from "next/navigation";

export const encabezadoCategoriasDeProyectos = ({
  tipoDeproyecto,
  srcImg,
  altImg,
}: EncabezadoCategoriasDeProyectos) => (
  <div
    className={`size-[4rem] rounded-xl flex items-center justify-center group-hover:scale-110 transition ${
      tipoDeproyecto === TiposDeProyectos.COMPOSTAJE
        ? "bg-primary"
        : tipoDeproyecto === TiposDeProyectos.AGUA
          ? "bg-blue-600 "
          : tipoDeproyecto === TiposDeProyectos.ENERGIAS
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
  numeroDeProyectos,
  tipoDeProyectoF,
}: FooterCategoriasDeProyectos) => (
  <div
    className={`hidden md:flex items-center text-sm font-semibold ${
      tipoDeProyectoF === TiposDeProyectos.COMPOSTAJE
        ? "text-accent"
        : tipoDeProyectoF === TiposDeProyectos.AGUA
          ? "text-blue-600 "
          : tipoDeProyectoF === TiposDeProyectos.ENERGIAS
            ? "text-amber-600 "
            : "text-rose-600"
    }`}
  >
    <span>{numeroDeProyectos} proyectos</span>
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
  tipoDeproyecto,
  horasDeConstruccion,
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

    {EtiquetaDeCategorias(tipoDeproyecto, "absolute top-4 left-4")}
    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-primary flex items-center space-x-1">
      <i className="pi pi-clock"></i>
      <span>{horasDeConstruccion}</span>
    </div>
  </div>
);

export const footerProyectosDestacados = ({
  id,
  likes,
  comentarios,
  autor,
  imgSrcAutor,
  imgAltAutor,
}: FooterProyectosDestacados) => {
  const router = useRouter();
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
            <span>{comentarios}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={imgSrcAutor}
            alt={imgAltAutor}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">{autor}</span>
        </div>
      </div>
      <Divider />
      <div className="flex items-center justify-between gap-4 w-full">
        <Button
          onClick={() => router.push(`/proyectos/${id}`)}
          className="w-1/2"
        >
          Ver Guía
        </Button>
        <Button
          style={{ borderColor: "#8fbc3f", color: "#8fbc3f" }}
          outlined
          className="w-1/2"
        >
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
      <Button className="bg-white! text-primary! w-full">Ver Detalles</Button>
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
