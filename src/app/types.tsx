export enum TiposDeProyectos {
  Compostaje = "Compostaje",
  Agua = "Agua",
  Energias = "Energias",
  Huertos = "Huertos",
}

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
    imagenCreador: {
      src: string;
      alt: string;
    };
    creador: string;
  };
};

export type EncabezadoProyectosDestacados = {
  srcImg: string;
  altImg: string;
  tipoDeproyecto: TiposDeProyectos;
  horasDeConstruccion: string;
};
