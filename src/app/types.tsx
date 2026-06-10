export enum Category {
  ENERGIAS = "Energías",
  AGUA = "Agua",
  RESIDUOS = "Residuos",
  BIOCONSTRUCCION = "Bioconstrucción",
  BIODIVERSIDAD = "Biodiversidad",
}
enum Category2 {
  GENERAR = 1,
  CAPTAR = 2,
  RECUPERAR = 3,
  CONSTRUIR = 4,
  CULTIVAR = 5,
}
export enum SubCategory {
  GENERACION_DE_ENERGIAS = 1.1,
  AHORRO_ENERGETICO = 1.2,
  BIOCUMBUSTIBLES = 1.3,
  CAPTACION_PLUVIAL = 2.1,
  TRATAMIENTO_DE_AGUAS_GRISES = 2.2,
  RIEGO_INTELIGENTE = 2.3,
  RECICLAJE_CREATIVO = 3.1,
  COMPOSTAJE = 3.2,
  PLASTICOS_PRECIOSOS = 3.3,
  MATERIALES_ECOLOGICOS = 4.1,
  MOBILIARIO_SOSTENIBLE = 4.2,
  LIMPIEZA_COSMETICA_ZERO_WASTE = 4.3,
  HUERTOS_URBANOS = 5.1,
  BIODIVERSIDAD = 5.2,
  CONSERVACION_DE_SEMILLAS = 5.3,
}

export type Icon =
  | "ArrowRight"
  | "Carrot"
  | "CartShopping"
  | "Droplet"
  | "Plus"
  | "Recycle"
  | "SolarPanel"
  | "Globe"
  | "Leaf";

export type ButtonType = "Primary" | "Secondary" | "Outlined" | "Text" | "Icon";

//"Sostenibilidad", "Agroecología","Ambiental"

export type CardProps = {};

export enum ProjectDifficulty {
  FACIL = "Fácil",
  MEDIO = "Medio",
  DIFICIL = "Difícil",
  EXPERTO = "Experto",
}

export type ProjectCategoryType = {
  id: number;
  titleMB: string;
  title: string;
  subtitle: { id: number; name: string; description: string }[];
  description: string;
  image: {
    src: string;
    alt: string;
  };
  category: Category;
  projectNumbers: number;
};

export type EncabezadoCategoriasDeProyectos = {
  category: Category;

  srcImg: string;
  altImg: string;
};

export type FooterCategoriasDeProyectos = {
  projectNumbers: number;
  category: Category;
};

export type ProyectosDestacadosType = {
  id: number;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  category: Category;
  subCategorys: Category[];
  constructionTime: string;
  likes: number;
  comments: number;
  author: {
    name: string;
    avatar: string;
  };
  cost: string;
  difficulty: ProjectDifficulty;
  completedProjects: number;
};

export type ProyectoType = {
  id: number;
  title: string;
  descripcion: string;
  image: {
    src: string;
    alt: string;
  };
  category: Category;
  subCategorys: Category[] | [];
  constructionTime: string;
  likes: number;
  comments: number;
  author: {
    name: string;
    avatar: string;
  };
  cost: string;
  difficulty: ProjectDifficulty;
  completedProjects: number;
  materialsId: number[];
  steps: {
    title: string;
    longDescription: string;
    shortDescription: string[];
    image: { src: string; alt: string | null | undefined };
  }[];
};

export type EncabezadoProyectosDestacados = {
  srcImg: string;
  altImg: string;
  category: Category;
  subCategorys: Category[] | [];
  constructionTime: string;
};

export type FooterProyectosDestacados = {
  id: number;
  likes: number;
  comments: number;
  author: string;
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
  id: number;
  idProyecto?: number;
  idComentarioPadre?: 1;
  avatar: string;
  autor: string;
  tiempoDeLaPublicacion: string;
  contenido: string;
  likes: number;
  respuestas?: ComentarioType[];
};
