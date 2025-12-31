export type ProyectosDestacadosType = {
  titulo: string;
  descripcion: string;
  header: {
    imagen: {
      src: string;
      alt: string;
    };
    etiqueta: {
      color: string;
      tipo: string;
    };
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
