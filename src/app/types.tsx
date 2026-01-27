export enum TiposDeProyectos {
  Compostaje = "Compostaje",
  Agua = "Agua",
  Energias = "Energias",
  Huertos = "Huertos",
}

export enum DificultadDeProyecto {
  FACIL,
  MEDIO,
  DIFICIL,
  EXPERTO,
}

export type CategoriasDeProyectosType = {
  tituloMB: string;
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

export type EncabezadoCategoriasDeProyectos = {
  tipoDeproyecto: TiposDeProyectos;
  srcImg: string;
  altImg: string;
};

export type FooterCategoriasDeProyectos = {
  numeroDeProyectos: number;
  tipoDeProyectoF: TiposDeProyectos;
};

export type ProyectosType = {
  id: number;
  titulo: string;
  descripcion: string;
  imagen: {
    src: string;
    alt: string;
  };
  categoria: TiposDeProyectos;
  tiempoDeConstruccion: string;
  likes: number;
  comentarios: number;
  autor: {
    nombre: string;
    avatar: string;
  };
  precio: string;
  dificultad: DificultadDeProyecto;
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

export type ProyectosDeLaComunidadType = {
  titulo: string;
  likes: number;
  comentarios: number;
  autor: string;
  imagenDelAutor: {
    src: string;
    alt: string;
  };
  header: {
    imagen: {
      src: string;
      alt: string;
    };
  };
};

export type ContenidoProyectosDeLaComunidad = {
  titulo: string;
  likes: number;
  comentarios: number;
  autor: string;
  imgSrcAutor: string;
  imgAltAutor: string;
};

export type ComoFuncionaType = {
  titulo: string;
  descripcion: string;
  descripcionLarge: string;
};

export type ExperienciasCompartidasType = {
  descripcion: string;
  header: {
    autor: string;
    imagenDelAutor: {
      src: string;
      alt: string;
    };
    tiempoDePublicacion: string;
  };
  footer: {
    likes: number;
    comentarios: number;
    reenvios: number;
    imagen: {
      srcImg: string;
      altImg: string;
    };
  };
};
