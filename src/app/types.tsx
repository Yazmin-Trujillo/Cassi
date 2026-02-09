export enum TiposDeProyectos {
  COMPOSTAJE = "Compostaje",
  AGUA = "Agua",
  ENERGIAS = "Energías",
  HUERTOS = "Huertos",
}

export enum DificultadDeProyecto {
  FACIL = "Fácil",
  MEDIO = "Medio",
  DIFICIL = "Difícil",
  EXPERTO = "Experto",
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

export type ProyectosDestacadosType = {
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
  costo: string;
  dificultad: DificultadDeProyecto;
  proyectosCompletados: number;
};

export type ProyectoType = {
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
  costo: string;
  dificultad: DificultadDeProyecto;
  proyectosCompletados: number;
  materialesId: number[];
  pasos: {
    titulo: string;
    descripcionLarga: string;
    descripcionCorta: string[];
    imagen: { src: string; alt: string | null | undefined };
  }[];
};

export type EncabezadoProyectosDestacados = {
  srcImg: string;
  altImg: string;
  tipoDeproyecto: TiposDeProyectos;
  horasDeConstruccion: string;
};

export type FooterProyectosDestacados = {
  id: number;
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

export type MaterialType = {
  id: number;
  material: string;
  descripcion: string;
  imagen: {
    srcImg: string;
    altImg: string;
  };
  costo: string;
};

export type ComoFuncionaType = {
  titulo: string;
  descripcion: string;
  descripcionLarge: string;
};

export type ExperienciasCompartidasType = {
  id: number;
  proyectoPadre: number;
  rankingDeSatisfacción: number;
  descripcion: string;
  autor: string;
  avatar: {
    src: string;
    alt: string;
  };
  tiempoDePublicacion: string;
  likes: number;
  comentarios: number;
  reenvios: number;
  imagen: {
    srcImg: string;
    altImg: string;
  };
};

export type ComentarioType = {
  avatar: string;
  autor: string;
  tiempoDeLaPublicacion: string;
  contenido: string;
  likes: number;
  esRespuesta?: boolean;
};
