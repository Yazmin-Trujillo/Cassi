export enum TiposDeProyectos {
  Compostaje = "Compostaje",
  Agua = "Agua",
  Energias = "Energias",
  Huertos = "Huertos",
}

export type CategoriasDeProyectosType = {
  titulo: string;
  descripcion: string;
  header: {
    imagen: {
      src: string;
      alt: string;
    };
    tipoDeProyecto: TiposDeProyectos;
  };
  footer: {
    numeroDeProyectos: number;
    tipoDeProyecto: TiposDeProyectos;
  };
};

export type ProyectosDestacadosType = {
  titulo: string;
  descripcion: string;
  header: {
    imagen: {
      src: string;
      alt: string;
    };
    tipoDeProyecto: TiposDeProyectos;
    tiempoDeConstruccion: string;
  };
  footer: {
    likes: number;
    comentarios: number;
    imagenDelAutor: {
      src: string;
      alt: string;
    };
    autor: string;
  };
};

export type EncabezadoCategoriasDeProyectos = {
  tipoDeproyecto: TiposDeProyectos;
  srcImg: string;
  altImg: string;
};

export type FooterCategoriasDeProyectos = {
  numeroDeProyectos: number;
  tipoDeProyectoF: TiposDeProyectos;
};

export type EncabezadoProyectosDestacados = {
  srcImg: string;
  altImg: string;
  tipoDeproyecto: TiposDeProyectos;
  horasDeConstruccion: string;
};

export type FooterProyectosDestacados = {
  likes: number;
  comentarios: number;
  autor: string;
  imgSrcAutor: string;
  imgAltAutor: string;
};
