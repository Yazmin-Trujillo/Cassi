import { ProyectosDestacadosType, TiposDeProyectos } from "./types";

export const ProyectosDestacados: ProyectosDestacadosType[] = [
  {
    titulo: "Compostera de Pallets DIY",
    descripcion:
      "Construye tu propia compostera usando materiales reciclados. Guía completa con 8 pasos detallados.",
    header: {
      imagen: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/57ea6b925f-dd83dba6dda5a70ba903.png",
        alt: "DIY composting bin made from wooden pallets in backyard garden, step by step construction, organic waste, natural decomposition, eco-friendly, detailed tutorial style",
      },
      tipoDeProyecto: TiposDeProyectos.Compostaje,
      tiempoDeConstruccion: "2-3 horas",
    },
    footer: {
      likes: 342,
      comentarios: 28,
      imagenCreador: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
        alt: "Avatar",
      },
      creador: "María López",
    },
  },
  {
    titulo: "Sistema de Captación Pluvial",
    descripcion:
      "Instala un sistema completo para captar y almacenar agua de lluvia. Ahorra hasta 40% en tu consumo.",
    header: {
      imagen: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/ada6b4c393-d460d2499c8385da5171.png",
        alt: "rainwater harvesting system with barrels and gutters on house roof, DIY installation tutorial, sustainable water collection, pipes and filters, eco home improvement",
      },
      tipoDeProyecto: TiposDeProyectos.Agua,
      tiempoDeConstruccion: "4-5 horas",
    },
    footer: {
      likes: 489,
      comentarios: 45,
      imagenCreador: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
        alt: "Avatar",
      },
      creador: "Carlos Ruiz",
    },
  },
  {
    titulo: "Huerto Vertical en Balcón",
    descripcion:
      "Crea un jardín vertical usando materiales reciclados. Perfecto para espacios pequeños.",
    header: {
      imagen: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/68b5883b56-700ba9f8c57721fb3d5e.png",
        alt: "vertical garden on apartment balcony with recycled bottles and containers, urban gardening, fresh herbs and vegetables growing, DIY hydroponic system, sustainable living",
      },
      tipoDeProyecto: TiposDeProyectos.Huertos,
      tiempoDeConstruccion: "3 horas",
    },
    footer: {
      likes: 467,
      comentarios: 62,
      imagenCreador: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
        alt: "Avatar",
      },
      creador: "Ana Torres",
    },
  },
];
