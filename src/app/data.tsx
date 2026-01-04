import { Button } from "primereact/button";
import {
  CategoriasDeProyectosType,
  ProyectosDeLaComunidadType,
  ProyectosDestacadosType,
  TiposDeProyectos,
} from "./types";
import { Divider } from "primereact/divider";

export const menuItems = [
  {
    label: "Inicio",
  },
  {
    label: "Proyectos",
  },
  {
    label: "Comunidad",
  },
  {
    label: "Materiales",
    icon: "pi pi-search",
    items: [
      {
        label: "Components",
        icon: "pi pi-bolt",
      },
      {
        label: "Blocks",
        icon: "pi pi-server",
      },
      {
        label: "UI Kit",
        icon: "pi pi-pencil",
      },
      {
        label: "Templates",
        icon: "pi pi-palette",
        items: [
          {
            label: "Apollo",
            icon: "pi pi-palette",
          },
          {
            label: "Ultima",
            icon: "pi pi-palette",
          },
        ],
      },
    ],
  },
  {
    label: "Blog",
  },
];

export const menuStart = (
  <div className="flex items-center space-x-3">
    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary from-lime-900 to-lime-700 rounded-xl flex items-center justify-center">
      <i className="text-white text-xl" data-fa-i2svg="">
        <svg
          className="svg-inline--fa fa-leaf"
          width={"1.5rem"}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="leaf"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
          ></path>
        </svg>
      </i>
    </div>
    <span className="text-2xl font-display font-bold text-primary">
      EcoCreadores
    </span>
  </div>
);

export const menuEnd = (
  <div className="flex gap-2">
    <Button label="Iniciar Sesión" text />
    <Button label="Compartir proyecto" />
  </div>
);

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
    <div>
      <Button label="Explorar proyectos" className="myBoxShadow" />
      <Button label="Ver tutorial" outlined style={{ marginLeft: "0.5em" }} />
    </div>
    <div className="flex ">
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
    titulo: "Compostaje",
    descripcion: "Transforma residuos orgánicos en abono natural",
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
    titulo: "Captación de Agua",
    descripcion: "Sistemas para recolectar y reutilizar agua de lluvia",
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
    titulo: "Energía Solar",
    descripcion: "Aprovecha la energía del sol para tu hogar",
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
    titulo: "Huertos Urbanos",
    descripcion: "Cultiva tus propios alimentos en espacios pequeños",
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
      imagenDelAutor: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
        alt: "Avatar",
      },
      autor: "María López",
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
      imagenDelAutor: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
        alt: "Avatar",
      },
      autor: "Carlos Ruiz",
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
      imagenDelAutor: {
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
        alt: "Avatar",
      },
      autor: "Ana Torres",
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
