import { Button } from "primereact/button";
import {
  CategoriasDeProyectosType,
  ComoFuncionaType,
  DificultadDeProyecto,
  ExperienciasCompartidasType,
  ProyectosDeLaComunidadType,
  ProyectosType,
  TiposDeProyectos,
} from "./types";
import { Divider } from "primereact/divider";

export const encabezadoHero = (
  <div className="inline-flex items-center space-x-2 bg-[#8fbc3f10] px-4 py-2 rounded-full">
    <i className="text-accent" data-fa-i2svg="">
      <svg
        className="svg-inline--fa fa-seedling"
        width={"1rem"}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="seedling"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"
        ></path>
      </svg>
    </i>
    <span className="text-sm font-semibold text-primary">
      Construye un futuro sostenible
    </span>
  </div>
);
export const footerHero = (
  <div className="flex flex-col gap-8">
    <div className="flex">
      <Button label="Explorar proyectos" className="myBoxShadow" />
      <Button
        label="Ver tutorial"
        outlined
        style={{ marginLeft: "0.5em" }}
        className="bg-white/20! backdrop-blur-sm md:backdrop-blur-none text-white! md:text-primary! md:bg-transparent!"
      />
    </div>
    <div className="hidden md:flex">
      <div>
        <div className="text-2xl font-bold text-primary">1,240+</div>
        <div>Proyectos Compartidos</div>
      </div>
      <Divider layout="vertical" />
      <div>
        <div className="text-2xl font-bold text-primary">8,500+</div>
        <div>Miembros Activos</div>
      </div>
      <Divider layout="vertical" />
      <div>
        <div className="text-2xl font-bold text-primary">95%</div>
        <div>Satisfacción</div>
      </div>
    </div>
  </div>
);

export const CategoriasDeProyectos: CategoriasDeProyectosType[] = [
  {
    tituloMB: "Compost",
    titulo: "Compostaje",
    descripcion: "Transforma residuos orgánicos en abono natural.",
    header: {
      imagen: {
        src: "/recycle.svg",
        alt: "recycle",
      },
      tipoDeProyecto: TiposDeProyectos.Compostaje,
    },
    footer: {
      numeroDeProyectos: 124,
      tipoDeProyecto: TiposDeProyectos.Compostaje,
    },
  },
  {
    tituloMB: "Agua",
    titulo: "Captación de Agua",
    descripcion: "Sistemas para recolectar y reutilizar agua de lluvia.",
    header: {
      imagen: {
        src: "/droplet.svg",
        alt: "droplet",
      },
      tipoDeProyecto: TiposDeProyectos.Agua,
    },
    footer: {
      numeroDeProyectos: 87,
      tipoDeProyecto: TiposDeProyectos.Agua,
    },
  },
  {
    tituloMB: "Energía",
    titulo: "Energía Solar",
    descripcion: "Aprovecha la energía del sol para tu hogar.",
    header: {
      imagen: {
        src: "/solarPanel.svg",
        alt: "solarPanel",
      },
      tipoDeProyecto: TiposDeProyectos.Energias,
    },
    footer: {
      numeroDeProyectos: 156,
      tipoDeProyecto: TiposDeProyectos.Energias,
    },
  },
  {
    tituloMB: "Huertos",
    titulo: "Huertos Urbanos",
    descripcion: "Cultiva tus propios alimentos en espacios pequeños.",
    header: {
      imagen: {
        src: "/carrot.svg",
        alt: "carrot",
      },
      tipoDeProyecto: TiposDeProyectos.Huertos,
    },
    footer: {
      numeroDeProyectos: 203,
      tipoDeProyecto: TiposDeProyectos.Huertos,
    },
  },
];

export const ProyectosDeLaComunidad: ProyectosDeLaComunidadType[] = [
  {
    titulo: "Hotel de Insectos",
    likes: 124,
    comentarios: 18,
    autor: "Jorge Sánchez",
    imagenDelAutor: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      alt: "Avatar",
    },
    header: {
      imagen: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/993a796a89-67a97ffbc607911cad1f.png",
        alt: "homemade bee hotel made from bamboo tubes and wood blocks, insect house, pollinator garden, sustainable biodiversity project, close-up detail",
      },
    },
  },
  {
    titulo: "Reciclaje de Aguas Grises",
    likes: 203,
    comentarios: 34,
    autor: "Laura Méndez",
    imagenDelAutor: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      alt: "Avatar",
    },
    header: {
      imagen: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e485005334-31b7b4680d07cefa7023.png",
        alt: "DIY greywater recycling system for garden irrigation, eco-friendly plumbing, water conservation, sustainable home improvement, pipes and filter system",
      },
    },
  },
  {
    titulo: "Panel Solar Cas",
    likes: 0,
    comentarios: 0,
    autor: "Manuel",
    imagenDelAutor: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
      alt: "Avatar",
    },
    header: {
      imagen: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/0051993215-c87e18180961b55ebe82.png",
        alt: "small DIY solar panel installation on garden shed roof, renewable energy project, sustainable power, eco-friendly electricity, photovoltaic cells",
      },
    },
  },
];

export const ComoFunciona: ComoFuncionaType[] = [
  {
    titulo: "Elige tu Proyecto",
    descripcion: "Explora nuestra biblioteca de proyectos sustentables.",
    descripcionLarge:
      "Explora nuestra biblioteca de proyectos con todas las categorias y selecciona el que más te inspire.",
  },
  {
    titulo: "Compra Materiales",
    descripcion: "Adquiere los materiales necesarios en nuestra tienda.",
    descripcionLarge:
      "Compra los materiales necesarios directamente desde la plataforma. Todo lo que necesitas en un solo lugar.",
  },
  {
    titulo: "Construye Paso a Paso",
    descripcion: "Sigue nuestra guía detallada con fotos y videos.",
    descripcionLarge:
      "Sigue nuestra guía detallada con fotos y videos para que todo sea mas claro y preciso.",
  },
  {
    titulo: "Comparte tu Experiencia",
    descripcion: "Publica fotos y consejos de tu proyecto terminado.",
    descripcionLarge:
      "Comparte tu experiencia con la comunidad. Inspira a otros con tu proyecto.",
  },
];

export const MaterialesPopulares = [
  {
    title: "Pallet de Madera",
    descripcion: "Reciclado certificado",
    header: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/d55f6609c0-208c6ad9245214d490bf.png",
      altImg: "wooden pallet on white background, clean product shot",
    },
    footer: {
      precio: "$25",
    },
  },
  {
    title: "Tierra Orgánica",
    descripcion: "20 kg premium",
    header: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/9333cbbe84-051939e814b32f123a90.png",
      altImg: "bag of organic soil and compost on white background",
    },
    footer: {
      precio: "$18",
    },
  },
  {
    title: "Kit de Semillas",
    descripcion: "15 variedades",
    header: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/b9d3070768-b02eb999347357dada92.png",
      altImg: "seed starter kit with small pots on white background",
    },
    footer: {
      precio: "$12",
    },
  },
  {
    title: "Kit Herramientas",
    descripcion: "5 piezas básicas",
    header: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/69a72c9293-ce54d7be3457afa04591.png",
      altImg: "gardening tools set on white background, shovel and rake",
    },
    footer: {
      precio: "$35",
    },
  },
  {
    title: "Pallet de Madera",
    descripcion: "Reciclado certificado",
    header: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/d55f6609c0-208c6ad9245214d490bf.png",
      altImg: "wooden pallet on white background, clean product shot",
    },
    footer: {
      precio: "$25",
    },
  },
];

export const ExperienciasCompartidas: ExperienciasCompartidasType[] = [
  {
    descripcion:
      "¡Mi primer huerto vertical terminado! Gracias por la guía tan detallada. Ya tengo tomates cherry creciendo 🍅",
    header: {
      autor: "Ana Martínez",
      imagenDelAutor: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
        alt: "Avatar",
      },
      tiempoDePublicacion: "Hace 2 días",
    },

    footer: {
      likes: 203,
      comentarios: 18,
      reenvios: 8,
      imagen: {
        srcImg:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/d51d5ea80b-0bef822be07a6999ef4c.png",
        altImg:
          "completed vertical garden with tomatoes and herbs, proud owner, bright daylight",
      },
    },
  },
  {
    descripcion:
      "Mi sistema de captación de agua lluvia funcionando perfectamente. Ahorro 40% en agua para riego 💧",
    header: {
      autor: "Pedro Sánchez",
      imagenDelAutor: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
        alt: "Avatar",
      },
      tiempoDePublicacion: "Hace 5 días",
    },

    footer: {
      likes: 89,
      comentarios: 12,
      reenvios: 5,
      imagen: {
        srcImg:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/7774e76c41-94ae04c5bc06b6adf5a2.png",
        altImg:
          "rainwater collection system with barrels and pipes, DIY setup in backyard",
      },
    },
  },
  {
    descripcion:
      "¡Mi primer huerto vertical terminado! Gracias por la guía tan detallada. Ya tengo tomates cherry creciendo 🍅",
    header: {
      autor: "Ana Martínez",
      imagenDelAutor: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
        alt: "Avatar",
      },
      tiempoDePublicacion: "Hace 2 días",
    },

    footer: {
      likes: 203,
      comentarios: 18,
      reenvios: 8,
      imagen: {
        srcImg:
          "https://storage.googleapis.com/uxpilot-auth.appspot.com/d51d5ea80b-0bef822be07a6999ef4c.png",
        altImg:
          "completed vertical garden with tomatoes and herbs, proud owner, bright daylight",
      },
    },
  },
];

export const ProyectosDestacados: ProyectosType[] = [
  {
    id: 5,
    titulo: "Compostera de Pallets DIY",
    descripcion:
      "Construye tu propia compostera usando materiales reciclados. Guía completa con 8 pasos detallados.",
    imagen: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/57ea6b925f-dd83dba6dda5a70ba903.png",
      alt: "DIY composting bin made from wooden pallets in backyard garden, step by step construction, organic waste, natural decomposition, eco-friendly, detailed tutorial style",
    },
    categoria: TiposDeProyectos.Compostaje,
    tiempoDeConstruccion: "2-3 horas",
    likes: 568,
    comentarios: 28,
    autor: {
      nombre: "María López",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    },
    precio: "0",
    dificultad: DificultadDeProyecto.MEDIO,
  },
  {
    id: 6,
    titulo: "Sistema de Captación Pluvial",
    descripcion:
      "Instala un sistema completo para captar y almacenar agua de lluvia. Ahorra hasta 40% en tu consumo.",

    imagen: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/ada6b4c393-d460d2499c8385da5171.png",
      alt: "rainwater harvesting system with barrels and gutters on house roof, DIY installation tutorial, sustainable water collection, pipes and filters, eco home improvement",
    },
    categoria: TiposDeProyectos.Agua,
    tiempoDeConstruccion: "4-5 horas",
    likes: 569,
    comentarios: 45,
    autor: {
      nombre: "Carlos Ruiz",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    },
    precio: "0",
    dificultad: DificultadDeProyecto.MEDIO,
  },

  {
    id: 7,
    titulo: "Huerto Vertical en Balcón",
    descripcion:
      "Crea un jardín vertical usando materiales reciclados. Perfecto para espacios pequeños.",
    imagen: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/68b5883b56-700ba9f8c57721fb3d5e.png",
      alt: "vertical garden on apartment balcony with recycled bottles and containers, urban gardening, fresh herbs and vegetables growing, DIY hydroponic system, sustainable living",
    },
    categoria: TiposDeProyectos.Huertos,
    tiempoDeConstruccion: "3 horas",
    likes: 570,
    comentarios: 62,
    autor: {
      nombre: "Ana Torres",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
    },
    precio: "0",
    dificultad: DificultadDeProyecto.MEDIO,
  },
];

export const projects = [
  {
    id: 1,
    titulo: "Compostera de Pallets DIY",
    categoria: TiposDeProyectos.Compostaje,
    tiempoDeConstruccion: "2-3 horas",
    description:
      "Construye tu propia compostera usando materiales reciclados. Guía completa con 8 pasos detallados.",
    image: {
      src: "https://images.unsplash.com/photo-1621460245084-2633830c0429?auto=format&fit=crop&q=80&w=800",
      alt: "",
    },
    likes: 342,
    comentarios: 28,
    autor: {
      nombre: "María López",
      avatar: "https://i.pravatar.cc/150?u=maria",
    },
    precio: "$250.00 MXN",
    dificultad: DificultadDeProyecto.FACIL,
  },
  {
    id: 2,
    titulo: "Sistema de Captación Pluvial",
    categoria: TiposDeProyectos.Agua,
    tiempoDeConstruccion: "4-5 horas",
    description:
      "Instala un sistema completo para captar y almacenar agua de lluvia. Ahorra hasta 40% en tu consumo.",
    image: {
      src: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800",
      alt: "",
    },
    likes: 489,
    comentarios: 45,
    autor: {
      nombre: "Carlos Ruiz",
      avatar: "https://i.pravatar.cc/150?u=carlos",
    },
    precio: "$1,200.00 MXN",
    dififultad: DificultadDeProyecto.MEDIO,
  },
  {
    id: 3,
    titulo: "Huerto Vertical en Balcón",
    categoria: TiposDeProyectos.Huertos,
    tiempoDeConstruccion: "3 horas",
    description:
      "Crea un jardín vertical usando materiales reciclados. Perfecto para espacios pequeños y departamentos.",
    image: {
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
      alt: "",
    },
    likes: 567,
    comentarios: 62,
    autor: { nombre: "Ana Torres", avatar: "https://i.pravatar.cc/150?u=ana" },
    precio: "$450.00 MXN",
    dificultad: DificultadDeProyecto.FACIL,
  },
  {
    id: 4,
    titulo: "Horno Solar de Cartón",
    categoria: TiposDeProyectos.Energias,
    tiempoDeConstruccion: "1.5 horas",
    description:
      "Experimento educativo y funcional para cocinar con el sol usando materiales simples del hogar.",
    image: {
      src: "https://images.unsplash.com/photo-1509391366360-fe09a921881b?auto=format&fit=crop&q=80&w=800",
      alt: "",
    },
    likes: 215,
    comentarios: 12,
    autor: {
      nombre: "José Méndez",
      avatar: "https://i.pravatar.cc/150?u=jose",
    },
    precio: "$80.00 MXN",
    dificultad: DificultadDeProyecto.FACIL,
  },
];
