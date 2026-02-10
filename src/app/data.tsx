import { Button } from "primereact/button";
import {
  CategoriasDeProyectosType,
  ComentarioType,
  ComoFuncionaType,
  DificultadDeProyecto,
  ExperienciasCompartidasType,
  MaterialType,
  ProyectosDeLaComunidadType,
  ProyectosDestacadosType,
  ProyectoType,
  TiposDeProyectos,
} from "./types";
import { Divider } from "primereact/divider";
import Link from "next/link";

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
      <Link href={"/proyectos"}>
        <Button label="Explorar proyectos" className="myBoxShadow" />
      </Link>
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
    id: 1,
    tituloMB: "Compost",
    titulo: "Compostaje",
    descripcion: "Transforma residuos orgánicos en abono natural.",
    header: {
      imagen: {
        src: "/recycle.svg",
        alt: "recycle",
      },
      tipoDeProyecto: TiposDeProyectos.COMPOSTAJE,
    },
    footer: {
      numeroDeProyectos: 124,
      tipoDeProyecto: TiposDeProyectos.COMPOSTAJE,
    },
  },
  {
    id: 2,
    tituloMB: "Agua",
    titulo: "Captación de Agua",
    descripcion: "Sistemas para recolectar y reutilizar agua de lluvia.",
    header: {
      imagen: {
        src: "/droplet.svg",
        alt: "droplet",
      },
      tipoDeProyecto: TiposDeProyectos.AGUA,
    },
    footer: {
      numeroDeProyectos: 87,
      tipoDeProyecto: TiposDeProyectos.AGUA,
    },
  },
  {
    id: 3,
    tituloMB: "Energía",
    titulo: "Energía Solar",
    descripcion: "Aprovecha la energía del sol para tu hogar.",
    header: {
      imagen: {
        src: "/solarPanel.svg",
        alt: "solarPanel",
      },
      tipoDeProyecto: TiposDeProyectos.ENERGIAS,
    },
    footer: {
      numeroDeProyectos: 156,
      tipoDeProyecto: TiposDeProyectos.ENERGIAS,
    },
  },
  {
    id: 4,
    tituloMB: "Huertos",
    titulo: "Huertos Urbanos",
    descripcion: "Cultiva tus propios alimentos en espacios pequeños.",
    header: {
      imagen: {
        src: "/carrot.svg",
        alt: "carrot",
      },
      tipoDeProyecto: TiposDeProyectos.HUERTOS,
    },
    footer: {
      numeroDeProyectos: 203,
      tipoDeProyecto: TiposDeProyectos.HUERTOS,
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

export const MaterialesPopulares: MaterialType[] = [
  {
    id: 1,
    material: "Pallet de Madera",
    descripcion: "Reciclado certificado",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/d55f6609c0-208c6ad9245214d490bf.png",
      altImg: "wooden pallet on white background, clean product shot",
    },
    costo: "$25",
  },
  {
    id: 2,
    material: "Tierra Orgánica",
    descripcion: "20 kg premium",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/9333cbbe84-051939e814b32f123a90.png",
      altImg: "bag of organic soil and compost on white background",
    },
    costo: "$18",
  },
  {
    id: 3,
    material: "Kit de Semillas",
    descripcion: "15 variedades",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/b9d3070768-b02eb999347357dada92.png",
      altImg: "seed starter kit with small pots on white background",
    },
    costo: "$12",
  },
  {
    id: 4,
    material: "Kit Herramientas",
    descripcion: "5 piezas básicas",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/69a72c9293-ce54d7be3457afa04591.png",
      altImg: "gardening tools set on white background, shovel and rake",
    },
    costo: "$35",
  },
  {
    id: 5,
    material: "Pallet de Madera",
    descripcion: "Reciclado certificado",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/d55f6609c0-208c6ad9245214d490bf.png",
      altImg: "wooden pallet on white background, clean product shot",
    },
    costo: "$25",
  },
];

export const Materiales: MaterialType[] = [
  {
    id: 11,
    material: "Pallet de Madera",
    descripcion: "Reciclado certificado",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/d55f6609c0-208c6ad9245214d490bf.png",
      altImg: "wooden pallet on white background, clean product shot",
    },
    costo: "$25",
  },
  {
    id: 13,
    material: "Tierra Orgánica",
    descripcion: "20 kg premium",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/9333cbbe84-051939e814b32f123a90.png",
      altImg: "bag of organic soil and compost on white background",
    },
    costo: "$18",
  },
  {
    id: 3,
    material: "Kit de Semillas",
    descripcion: "15 variedades",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/b9d3070768-b02eb999347357dada92.png",
      altImg: "seed starter kit with small pots on white background",
    },
    costo: "$12",
  },
  {
    id: 4,
    material: "Kit Herramientas",
    descripcion: "5 piezas básicas",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/69a72c9293-ce54d7be3457afa04591.png",
      altImg: "gardening tools set on white background, shovel and rake",
    },
    costo: "$35",
  },
  {
    id: 15,
    material: "Pallet de Madera",
    descripcion: "Reciclado certificado",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/d55f6609c0-208c6ad9245214d490bf.png",
      altImg: "wooden pallet on white background, clean product shot",
    },
    costo: "$25",
  },
  {
    id: 6,
    material: "Contenedor Principal",
    descripcion: "Contenedor plástico de 20L con tapa hermética",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/6d474d02e6-3b4e950b7e3f7fc41f91.png",
      altImg: "plastic storage container for composting without background",
    },
    costo: "$12.99",
  },
  {
    id: 7,
    material: "Kit de Herramientas",
    descripcion: "Taladro, brocas y herramientas básicas",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/44b525cbb5-9282a67fc8032d96a206.png",
      altImg: "gardening tools set drill bits without background",
    },
    costo: "$8.50",
  },
  {
    id: 8,
    material: "Malla Metálica",
    descripcion: " Malla de acero inoxidable 30x30cm",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/05eb9fd31e-a29b38211c896f6d9ec4.png",
      altImg: "metal mesh wire grid for composting without background",
    },
    costo: "$6.75",
  },
  {
    id: 9,
    material: "Iniciador de Compost",
    descripcion: "Acelerador orgánico para compostaje",
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/a69962a424-992b63edfa364c4e74a5.png",
      altImg: "organic compost starter powder package without background",
    },
    costo: "$4.99",
  },
  {
    id: 1,
    material: "Madera de pino (listones)",
    descripcion:
      "Listones de pino natural resistentes, ideales para estructuras de composteros y camas de cultivo.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
      altImg: "Pila de listones de madera natural",
    },
    costo: "$99",
  },
  {
    id: 2,
    material: "Palets de madera reciclados",
    descripcion:
      "Estructuras de madera recuperada. Requieren lijado y tratamiento, pero son muy versátiles.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1585938389612-a552a28d6914",
      altImg: "Palets de madera apilados",
    },
    costo: "$10",
  },
  {
    id: 5,
    material: "Malla tipo gallinero",
    descripcion:
      "Malla metálica flexible que permite la aireación y protección contra roedores.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1626265775535-375494d9349c",
      altImg: "Rollo de malla metálica hexagonal",
    },
    costo: "$80",
  },
  {
    id: 12,
    material: "Canaletas de PVC",
    descripcion:
      "Conductos para la recolección de agua pluvial. Ligeros y fáciles de instalar.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1622597467836-f3285f2131b2",
      altImg: "Canaleta de PVC instalada en tejado",
    },
    costo: "$59",
  },
  {
    id: 30,
    material: "Sustrato orgánico (Humus)",
    descripcion:
      "Mezcla rica en nutrientes con humus de lombriz para un crecimiento acelerado.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1589923188900-85dae523342b",
      altImg: "Tierra orgánica oscura y fértil",
    },
    costo: "Medio",
  },
  {
    id: 40,
    material: "Cañas de Bambú",
    descripcion:
      "Material natural hueco, perfecto para crear nidos en hoteles de insectos.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1542385151-efd9000785a0",
      altImg: "Fajo de cañas de bambú seco",
    },
    costo: "$10",
  },
  {
    id: 50,
    material: "Cajas de cartón corrugado",
    descripcion:
      "Cartón grueso de embalaje. Excelente aislante térmico y material base para prototipos.",
    imagen: {
      srcImg:
        "https://cartonyempaque.com.mx/wp-content/uploads/2023/03/familias-cajas.jpg",
      altImg: "Pila de cajas de cartón para reciclar",
    },
    costo: "$5",
  },
  {
    id: 60,
    material: "Lombrices Rojas Californianas",
    descripcion:
      "Lombrices de alta voracidad ideales para transformar restos orgánicos en abono.",
    imagen: {
      srcImg:
        "https://www.alnatural.com.mx/sites/default/files/2020-04/lombrices-californianas-venta-ciudad-de-mexico.jpg",
      altImg: "Lombrices en compost",
    },
    costo: "$10",
  },
  {
    id: 70,
    material: "Tubo PVC 3 pulgadas",
    descripcion:
      "Tubería de alta resistencia para sistemas de riego y bombas de agua manuales.",
    imagen: {
      srcImg:
        "https://indelek.com/18504-large_default/tubo-pvc-3-78-mm-pesado.jpg",
      altImg: "Tuberías industriales de PVC",
    },
    costo: "$59",
  },
  {
    id: 90,
    material: "Vidrio templado / Acrílico",
    descripcion:
      "Panel transparente necesario para crear el efecto invernadero en hornos solares.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1516961642265-531546e84af2",
      altImg: "Lámina de vidrio transparente",
    },
    costo: "$89",
  },
  {
    id: 110,
    material: "Tanque IBC de 1000L",
    descripcion:
      "Contenedor industrial de gran capacidad para captación de lluvia o acuaponía.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1592419044706-39796d40f98c",
      altImg: "Tanque de agua blanco con rejilla metálica",
    },
    costo: "$150",
  },
  {
    id: 120,
    material: "Botellas de vidrio vacías",
    descripcion:
      "Envases de cristal recuperados. Ideales para proyectos de iluminación y construcción eco.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1554260552-475d04586f7a",
      altImg: "Botellas de vidrio transparente",
    },
    costo: "$10",
  },
  {
    id: 130,
    material: "Carbón vegetal triturado",
    descripcion:
      "Filtro natural biológico para purificación de agua y mejora de suelos.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1533561052604-c3deb6d5961d",
      altImg: "Piezas de carbón vegetal negro",
    },
    costo: "$6",
  },
  {
    id: 140,
    material: "Esquejes de Cactus",
    descripcion:
      "Partes de plantas suculentas listas para ser plantadas y generar cercos vivos.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1520302630591-fd1c66ed11ef",
      altImg: "Variedad de plantas suculentas y cactus",
    },
    costo: "$10",
  },
  {
    id: 150,
    material: "Pegamento Blanco (Cola)",
    descripcion:
      "Adhesivo estándar para madera y cartón. Biodegradable en su mayoría.",
    imagen: {
      srcImg: "https://images.unsplash.com/photo-1565193930814-826ec4046ca3",
      altImg: "Envase de pegamento escolar o industrial",
    },
    costo: "$26",
  },
];

export const ExperienciasCompartidas: ExperienciasCompartidasType[] = [
  {
    id: 1,
    proyectoPadre: 3,
    rankingDeSatisfacción: 4.8,
    descripcion:
      "¡Mi primer huerto vertical terminado! Gracias por la guía tan detallada. Ya tengo tomates cherry creciendo 🍅",
    autor: "Ana Martínez",
    avatar: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
      alt: "Avatar",
    },
    tiempoDePublicacion: "Hace 2 días",
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
  {
    id: 2,
    proyectoPadre: 2,
    rankingDeSatisfacción: 5,
    descripcion:
      "Mi sistema de captación de agua lluvia funcionando perfectamente. Ahorro 40% en agua para riego 💧",
    autor: "Pedro Sánchez",
    avatar: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg",
      alt: "Avatar",
    },
    tiempoDePublicacion: "Hace 5 días",

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
  {
    id: 3,
    proyectoPadre: 7,
    rankingDeSatisfacción: 5,
    descripcion:
      "¡Así quedó mi huerto con botellas pet y pallet! Fué muy intuitivo y clara la guía. Todo está creciendo muy bien 🪴",
    autor: "Marcos Mendez Huerta de paso",
    avatar: {
      src: "https://img.freepik.com/vector-gratis/ilustracion-joven-sonriente_1308-174669.jpg?semt=ais_hybrid&w=740&q=80",
      alt: "Avatar",
    },
    tiempoDePublicacion: "Hace 2 días",
    likes: 203,
    comentarios: 18,
    reenvios: 8,
    imagen: {
      srcImg:
        "https://i.pinimg.com/474x/ba/60/c4/ba60c4f05e558f81c0d1d43d6eb7c64e.jpg",
      altImg: "mi primer huerto vertical usando botellas pet",
    },
  },
  {
    id: 4,
    proyectoPadre: 8,
    rankingDeSatisfacción: 5,
    descripcion:
      "Perfecto para mi balcón pequeño. En 4 meses ya tengo compost para mis plantas. Los pasos fueron muy claros y fáciles de seguir.",
    autor: "María González",
    avatar: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
      alt: "Maria",
    },
    tiempoDePublicacion: "Hace 2 semanas",
    likes: 55,
    comentarios: 12,
    reenvios: 4,
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/36bc5bc3c7-af991a2dad1a9fb5873d.png",
      altImg:
        "urban balcony composting setup by user, plants around compost bin",
    },
  },
  {
    id: 5,
    proyectoPadre: 8,
    rankingDeSatisfacción: 4.6,
    descripcion:
      "Hice 3 contenedores siguiendo la guía. Ahora mi familia recicla todos los residuos orgánicos. El kit de materiales llegó completo y en perfectas condiciones.",
    autor: "Carlos Ruiz",
    avatar: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
      alt: "Carlos",
    },
    tiempoDePublicacion: "Hace 1 mes",
    likes: 20,
    comentarios: 13,
    reenvios: 8,
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/75732e3dac-634f6d140d901fda81af.png",
      altImg:
        "backyard composting system with multiple containers, family garden project",
    },
  },
  {
    id: 6,
    proyectoPadre: 8,
    rankingDeSatisfacción: 5,
    descripcion:
      "Lo adapté para usar en la cocina. Sin olores y muy eficiente. Mis hierbas nunca habían crecido tan bien con este compost casero.",
    autor: "Ana Martínez",
    avatar: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
      alt: "Ana",
    },
    tiempoDePublicacion: "Hace 3 días",
    likes: 36,
    comentarios: 48,
    reenvios: 32,
    imagen: {
      srcImg:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/89ae2a9314-6373d017f3efc30e19d1.png",
      altImg:
        "indoor composting setup in kitchen, compact design with herbs growing",
    },
  },
];

export const ProyectosDestacados: ProyectosDestacadosType[] = [
  {
    id: 5,
    titulo: "Compostera de Pallets DIY",
    descripcion:
      "Construye tu propia compostera usando materiales reciclados. Guía completa con 8 pasos detallados.",
    imagen: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/57ea6b925f-dd83dba6dda5a70ba903.png",
      alt: "DIY composting bin made from wooden pallets in backyard garden, step by step construction, organic waste, natural decomposition, eco-friendly, detailed tutorial style",
    },
    categoria: TiposDeProyectos.COMPOSTAJE,
    tiempoDeConstruccion: "2-3 horas",
    likes: 568,
    comentarios: 28,
    autor: {
      nombre: "María López",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    },
    costo: "0",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 100,
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
    categoria: TiposDeProyectos.AGUA,
    tiempoDeConstruccion: "4-5 horas",
    likes: 569,
    comentarios: 45,
    autor: {
      nombre: "Carlos Ruiz",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    },
    costo: "0",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 200,
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
    categoria: TiposDeProyectos.HUERTOS,
    tiempoDeConstruccion: "3 horas",
    likes: 570,
    comentarios: 62,
    autor: {
      nombre: "Ana Torres",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
    },
    costo: "0",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 10,
  },
];

export const TodosLosProyectos: ProyectoType[] = [
  {
    id: 1,
    titulo: "Compostera de Pallets DIY",
    categoria: TiposDeProyectos.COMPOSTAJE,
    tiempoDeConstruccion: "2-3 horas",
    descripcion:
      "Construye tu propia compostera usando materiales reciclados. Guía completa con 8 pasos detallados.",
    imagen: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtK-cM4DoHqkWYad2Mov6aVr8fKXL6TtYUQ&s",
      alt: "",
    },
    likes: 342,
    comentarios: 28,
    autor: {
      nombre: "María López",
      avatar: "https://i.pravatar.cc/150?u=maria",
    },
    costo: "$250.00 MXN",
    dificultad: DificultadDeProyecto.FACIL,
    proyectosCompletados: 60,
    materialesId: [2, 3],
    pasos: [
      {
        titulo: "Preparar la madera",
        descripcionLarga:
          "Para poder usar la tarima/pallet primero hay que lijarla, luego barnizar y dejar secar por 1 hr. Si gustas puedes pintarla de tu color favorito",
        descripcionCorta: ["lijar la madera", "barnizar", "dejar secar"],
        imagen: {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEzEHC2NdQ_BelxTfgg7Y0abGHIod8OhLrg&s",
          alt: "",
        },
      },
      {
        titulo: "Crear un cuadro con los pallets",
        descripcionLarga:
          "Usa un taladro y tornillas para madera para unir los pallet y formar un cubo. Primero coloca un pallet acostado en el piso y en uno de los lados coloca otro pallet formando una 'L', continua con el lado opuesto formando una 'U' y termina con los 2 lados faltantes cerrando el cuadro '[ ]'",
        descripcionCorta: [
          "Coloca un pallet en el piso",
          "junta un segundo formando una 'L'",
          "Con un tercero forma una 'U'",
          "Con el 4to y 5to pallet cierra el cuadro",
        ],
        imagen: { src: "https://i.redd.it/6pprkjgcu9qe1.jpeg", alt: "" },
      },
      {
        titulo: "Tapa de madera",
        descripcionLarga:
          "Con varias tablas construlle una tapa para tu composteador. Coloca dos tablas separadas paralelamente una de la otra a una distancia igual al ancho de tu caja contruida anteriormente. Luego sobre ella coloca otras tablas que unan y cubran el espacio entre ellas. Ya terminado el cuadro, justo en medio coloca un trozo extra de madera para que funcione como agarradera",
        descripcionCorta: [
          "Colocar 2 tablas base",
          "cubrir la superficie vacia",
          "agregar una agarradera",
        ],
        imagen: {
          src: "https://i0.wp.com/autocompostajeleon.wordpress.com/wp-content/uploads/2017/10/foto-6.jpg?w=612&h=459&ssl=1",
          alt: "",
        },
      },
      {
        titulo: "Agrega el material orgánico",
        descripcionLarga:
          "Ya listo!. Agrega materia organico seco y huemedo, en un porcentaje de 2 a 3 partes de material seco (marrón) por cada 1 parte de material húmedo (verde) en volumen. Esto asegura una mezcla rica en carbono y nitrógeno que permite una correcta aireación y descomposición sin generar malos olores. Termina agregando un poco de agua para facilitar la descomposicion",
        descripcionCorta: [
          "Agregar material seco",
          "agregar material huemedo",
          "humedece",
        ],
        imagen: {
          src: "https://huertocasero.org/images/mvj5m3n0/production/58d416b89f568ff56e86e3f178153ce717459640-1216x832.webp?rect=7,0,1202,832&w=650&h=450&fm=webp",
          alt: "",
        },
      },
    ],
  },
  {
    id: 2,
    titulo: "Sistema de Captación Pluvial",
    categoria: TiposDeProyectos.AGUA,
    tiempoDeConstruccion: "4-5 horas",
    descripcion:
      "Instala un sistema completo para captar y almacenar agua de lluvia. Ahorra hasta 40% en tu consumo.",
    imagen: {
      src: "https://www.ultralam.mx/wp-content/uploads/2023/05/SCALL-1600_2_2000x-1024x652-1.webp",
      alt: "",
    },
    likes: 489,
    comentarios: 45,
    autor: {
      nombre: "Carlos Ruiz",
      avatar: "https://i.pravatar.cc/150?u=carlos",
    },
    costo: "$1,200.00 MXN",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 1,
    materialesId: [2, 3],
    pasos: [
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
    ],
  },
  {
    id: 3,
    titulo: "Huerto Vertical en Balcón",
    categoria: TiposDeProyectos.HUERTOS,
    tiempoDeConstruccion: "3 horas",
    descripcion:
      "Crea un jardín vertical usando materiales reciclados. Perfecto para espacios pequeños y departamentos.",
    imagen: {
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
      alt: "",
    },
    likes: 567,
    comentarios: 62,
    autor: { nombre: "Ana Torres", avatar: "https://i.pravatar.cc/150?u=ana" },
    costo: "$450.00 MXN",
    dificultad: DificultadDeProyecto.FACIL,
    proyectosCompletados: 19,
    materialesId: [2, 3],
    pasos: [
      {
        titulo: "Preparar la madera",
        descripcionLarga:
          "Para poder usar la tarima/pallet primero hay que lijarla, luego barnizar y dejar secar por 1 hr. Si gustas puedes pintarla de tu color favorito",
        descripcionCorta: ["lijar la madera", "barnizar", "dejar secar"],
        imagen: {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEzEHC2NdQ_BelxTfgg7Y0abGHIod8OhLrg&s",
          alt: "",
        },
      },
      {
        titulo: "Cortar las botellas de pet",
        descripcionLarga:
          "Utiliza botellas de 2lt 0 3lt (preferentemente), si no las que tengas al alcanze. Partelas arriba de la mitad, a la altura donde la botella empiza a estrecharce hacia la punta. Luego lija la zona cortada para evitar cortarte con ellas. Despues hasles agujeros en la base (unos 6 como de medio centimetro cada uno)",
        descripcionCorta: [
          "cortar las botellas",
          "lizar la boca de la botella",
          "hacerles agujeros",
        ],
        imagen: {
          src: "https://mejorconsalud.as.com/wp-content/uploads/2021/03/maceta-plastico.jpg",
          alt: "",
        },
      },
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
    ],
  },
  {
    id: 4,
    titulo: "Horno Solar de Cartón",
    categoria: TiposDeProyectos.ENERGIAS,
    tiempoDeConstruccion: "1.5 horas",
    descripcion:
      "Experimento educativo y funcional para cocinar con el sol usando materiales simples del hogar.",
    imagen: {
      src: "https://mamiexperimentos.com/wp-content/uploads/horno-solar-casero-preparado.jpg",
      alt: "",
    },
    likes: 215,
    comentarios: 12,
    autor: {
      nombre: "José Méndez",
      avatar: "https://i.pravatar.cc/150?u=jose",
    },
    costo: "$80.00 MXN",
    dificultad: DificultadDeProyecto.FACIL,
    proyectosCompletados: 80,
    materialesId: [2, 3],
    pasos: [
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
    ],
  },
  {
    id: 5,
    titulo: "Compostera de Pallets DIY",
    descripcion:
      "Construye tu propia compostera usando materiales reciclados. Guía completa con 8 pasos detallados.",
    imagen: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/57ea6b925f-dd83dba6dda5a70ba903.png",
      alt: "DIY composting bin made from wooden pallets in backyard garden, step by step construction, organic waste, natural decomposition, eco-friendly, detailed tutorial style",
    },
    categoria: TiposDeProyectos.COMPOSTAJE,
    tiempoDeConstruccion: "2-3 horas",
    likes: 568,
    comentarios: 28,
    autor: {
      nombre: "María López",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
    },
    costo: "0",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 20,
    materialesId: [2, 3],
    pasos: [
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
    ],
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
    categoria: TiposDeProyectos.AGUA,
    tiempoDeConstruccion: "4-5 horas",
    likes: 569,
    comentarios: 45,
    autor: {
      nombre: "Carlos Ruiz",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    },
    costo: "0",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 38,
    materialesId: [2, 3],
    pasos: [
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
    ],
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
    categoria: TiposDeProyectos.HUERTOS,
    tiempoDeConstruccion: "3 horas",
    likes: 570,
    comentarios: 62,
    autor: {
      nombre: "Ana Torres",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
    },
    costo: "0",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 14,
    materialesId: [2, 3],
    pasos: [
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
    ],
  },
  {
    id: 7,
    titulo: "Sistema de Compostaje Urbano Sostenible",
    descripcion:
      "Aprende a crear tu propio sistema de compostaje casero utilizando materiales reciclados. Reduce residuos orgánicos y crea fertilizante natural para tus plantas.",
    imagen: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d093ba0402-9f2eedc3f6c5a73eecc0.png",
      alt: "sustainable urban composting system with recycled materials, eco-friendly design, green plants around",
    },
    categoria: TiposDeProyectos.COMPOSTAJE,
    tiempoDeConstruccion: "3-4 horas",
    likes: 1247,
    comentarios: 15,
    autor: {
      nombre: "Fernando Herrera",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg",
    },
    costo: "$25-40 USD",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 7,
    materialesId: [2, 5, 8],
    pasos: [
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
      {
        titulo: "",
        descripcionLarga: "",
        descripcionCorta: [""],
        imagen: { src: "", alt: "" },
      },
    ],
  },
  {
    id: 8,
    titulo: "Sistema de Compostaje Urbano Sostenible",
    descripcion:
      "Aprende a crear tu propio sistema de compostaje casero utilizando materiales reciclados. Reduce residuos orgánicos y crea fertilizante natural para tus plantas.",
    imagen: {
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d093ba0402-9f2eedc3f6c5a73eecc0.png",
      alt: "sustainable urban composting system with recycled materials, eco-friendly design, green plants around",
    },
    categoria: TiposDeProyectos.COMPOSTAJE,
    tiempoDeConstruccion: "3-4 horas",
    likes: 47,
    comentarios: 58,
    autor: {
      nombre: "Ana Torres",
      avatar:
        "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg",
    },
    costo: "$25-40 USD",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 31,
    materialesId: [6, 7, 8, 9],
    pasos: [
      {
        titulo: "Preparación del Contenedor",
        descripcionLarga:
          "Toma el contenedor plástico y realiza orificios de ventilación en los laterales y la base. Estos permitirán la circulación de aire necesaria para el proceso de compostaje.",
        descripcionCorta: [
          "Haz 15-20 orificios de 6mm",
          "Distribuye uniformemente",
          "Lija los bordes ásperos",
        ],
        imagen: {
          src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9756e7054f-5dbb5bd45838158bba9e.png",
          alt: "drilling holes in plastic container for composting, step by step tutorial",
        },
      },
      {
        titulo: "Instalación de la Malla",
        descripcionLarga:
          "Coloca la malla metálica en el fondo del contenedor. Esta servirá como base de drenaje y permitirá que el exceso de líquidos se drene adecuadamente.",
        descripcionCorta: [
          "Corta la malla al tamaño del fondo",
          "Asegura con clips plásticos",
          "Verifica que esté nivelada",
        ],
        imagen: {
          src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a0301ba896-28cbcc8e80170bbdb4c8.png",
          alt: "installing metal mesh in bottom of compost container, hands placing wire grid",
        },
      },
      {
        titulo: "Primera Capa de Material",
        descripcionLarga:
          "Agrega una capa base de material seco como hojas secas, papel triturado o cartón. Esta capa ayudará a absorber la humedad y proporcionará carbono al compost.",
        descripcionCorta: [
          "5cm de material seco",
          "Distribuye uniformemente",
          "Rocía el iniciador de compost",
        ],
        imagen: {
          src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/81538b067a-23dddfb03607e9a8de2a.png",
          alt: "adding dry leaves and organic material to compost bin, layering process",
        },
      },
      {
        titulo: "Mantenimiento y Cosecha",
        descripcionLarga:
          "Alterna capas de material verde (restos de comida) y marrón (material seco). Revuelve semanalmente y mantén la humedad adecuada para obtener compost en 3-6 meses.",
        descripcionCorta: [
          "Revolver cada 7 días",
          "Mantener humedad como esponja",
          "Cosechar cuando esté oscuro",
        ],
        imagen: {
          src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/87a86e0ed7-68acab35a88c1ff1c57c.png",
          alt: "finished dark rich compost soil in hands, successful composting result",
        },
      },
    ],
  },
  {
    id: 9,
    titulo: "Compostero de Doble Cámara",
    descripcion:
      "Sistema eficiente para procesar desechos orgánicos y obtener abono natural sin olores.",
    imagen: {
      src: "data:image/jpeg;base64,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",
      alt: "Compostero de madera",
    },
    categoria: TiposDeProyectos.COMPOSTAJE,
    tiempoDeConstruccion: "4 horas",
    likes: 120,
    comentarios: 15,
    autor: {
      nombre: "Lucía Verde",
      avatar: "https://i.pravatar.cc/150?u=lucia",
    },
    costo: "$20 USD",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 56,
    materialesId: [1, 5, 8],
    pasos: [
      {
        titulo: "Corte de madera",
        descripcionLarga:
          "Corta los listones de madera de pino según las medidas del plano (1x1m).",
        descripcionCorta: ["Medir", "Cortar", "Lijar"],
        imagen: { src: "step1.jpg", alt: "Madera cortada" },
      },
      {
        titulo: "Armado de estructura",
        descripcionLarga:
          "Une los marcos laterales usando tornillos galvanizados para evitar la corrosión.",
        descripcionCorta: ["Atornillar", "Nivelar"],
        imagen: { src: "step2.jpg", alt: "Estructura armada" },
      },
      {
        titulo: "Instalación de malla",
        descripcionLarga:
          "Coloca malla de acero en el fondo para permitir la entrada de microorganismos del suelo.",
        descripcionCorta: ["Engrapar malla", "Cortar excedentes"],
        imagen: { src: "step3.jpg", alt: "Base con malla" },
      },
      {
        titulo: "División central",
        descripcionLarga:
          "Instala la tabla divisoria que permitirá separar el compost maduro del nuevo.",
        descripcionCorta: ["Fijar división", "Verificar puertas"],
        imagen: { src: "step4.jpg", alt: "Cámaras separadas" },
      },
    ],
  },
  {
    id: 10,
    titulo: "Captador de Agua de Lluvia",
    descripcion:
      "Instalación doméstica para recolectar agua pluvial de techos para riego de huertos.",
    imagen: {
      src: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d",
      alt: "Tanque de agua",
    },
    categoria: TiposDeProyectos.AGUA,
    tiempoDeConstruccion: "2 horas",
    likes: 85,
    comentarios: 8,
    autor: {
      nombre: "Marcos Ríos",
      avatar: "https://i.pravatar.cc/150?u=marcos",
    },
    costo: "20 MXN",
    dificultad: DificultadDeProyecto.FACIL,
    proyectosCompletados: 32,
    materialesId: [12, 15, 20],
    pasos: [
      {
        titulo: "Limpieza de canaletas",
        descripcionLarga:
          "Retira hojas y sedimentos de las canaletas del techo.",
        descripcionCorta: ["Limpiar", "Revisar fugas"],
        imagen: { src: "rain1.jpg", alt: "Canaleta limpia" },
      },
      {
        titulo: "Filtro de primeras aguas",
        descripcionLarga:
          "Instala un tubo desviador para que los primeros 10 litros (sucios) no entren al tanque.",
        descripcionCorta: ["Instalar derivación", "Pegar PVC"],
        imagen: { src: "rain2.jpg", alt: "Tubo PVC" },
      },
      {
        titulo: "Conexión al tanque",
        descripcionLarga:
          "Acopla la bajada de agua al orificio superior del bidón de almacenamiento.",
        descripcionCorta: ["Sellar unión", "Colocar filtro"],
        imagen: { src: "rain3.jpg", alt: "Tanque conectado" },
      },
      {
        titulo: "Instalación de grifo",
        descripcionLarga:
          "Perfora la base del tanque e instala una llave de paso para extraer el agua.",
        descripcionCorta: ["Perforar", "Poner teflón", "Roscar grifo"],
        imagen: { src: "rain4.jpg", alt: "Grifo instalado" },
      },
    ],
  },
  {
    id: 11,
    titulo: "Huerto Vertical de Pared",
    descripcion:
      "Ideal para espacios pequeños, permite cultivar hierbas aromáticas usando palets reciclados.",
    imagen: {
      src: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d",
      alt: "Huerto en pared",
    },
    categoria: TiposDeProyectos.HUERTOS,
    tiempoDeConstruccion: "3 horas",
    likes: 210,
    comentarios: 25,
    autor: { nombre: "Elena Sol", avatar: "https://i.pravatar.cc/150?u=elena" },
    costo: "$10 MXN",
    dificultad: DificultadDeProyecto.FACIL,
    proyectosCompletados: 140,
    materialesId: [2, 7, 30],
    pasos: [
      {
        titulo: "Tratamiento del palet",
        descripcionLarga:
          "Lija toda la superficie y aplica un lasur ecológico para protegerlo de la humedad.",
        descripcionCorta: ["Lijar", "Barnizar"],
        imagen: { src: "garden1.jpg", alt: "Palet lijado" },
      },
      {
        titulo: "Forrado de cajones",
        descripcionLarga:
          "Instala malla geotextil en el interior de los huecos para contener la tierra.",
        descripcionCorta: ["Cortar tela", "Engrapar"],
        imagen: { src: "garden2.jpg", alt: "Tela negra" },
      },
      {
        titulo: "Preparación del sustrato",
        descripcionLarga:
          "Mezcla fibra de coco, humus de lombriz y perlita para un drenaje óptimo.",
        descripcionCorta: ["Mezclar", "Rellenar"],
        imagen: { src: "garden3.jpg", alt: "Tierra fértil" },
      },
      {
        titulo: "Siembra",
        descripcionLarga:
          "Trasplanta tus plántulas dejando espacio suficiente entre ellas para que crezcan.",
        descripcionCorta: ["Plantar", "Regar inicial"],
        imagen: { src: "garden4.jpg", alt: "Plantas colocadas" },
      },
    ],
  },
  {
    id: 12,
    titulo: "Hotel de Polinizadores",
    descripcion:
      "Estructura de madera y materiales naturales para atraer abejas solitarias y mariquitas.",
    imagen: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbiJLFyGq0DRfuYGJr2CvncVt3iwpBbGOaw&s",
      alt: "Hotel de bichos",
    },
    categoria: TiposDeProyectos.HUERTOS,
    tiempoDeConstruccion: "5 horas",
    likes: 340,
    comentarios: 19,
    autor: { nombre: "Dr. Fauna", avatar: "https://i.pravatar.cc/150?u=fauna" },
    costo: "$15 MXN",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 88,
    materialesId: [40, 41, 42, 43],
    pasos: [
      {
        titulo: "Marco exterior",
        descripcionLarga:
          "Crea una casita de madera con techo inclinado para desviar la lluvia.",
        descripcionCorta: ["Cortar marcos", "Unir piezas"],
        imagen: { src: "bug1.jpg", alt: "Casita vacía" },
      },
      {
        titulo: "Secciones internas",
        descripcionLarga:
          "Divide el espacio con maderas finas para crear diferentes 'habitaciones'.",
        descripcionCorta: ["Hacer divisiones"],
        imagen: { src: "bug2.jpg", alt: "Celdas internas" },
      },
      {
        titulo: "Relleno diverso",
        descripcionLarga:
          "Coloca cañas de bambú, piñas de pino, troncos perforados y paja.",
        descripcionCorta: ["Perforar", "Insertar"],
        imagen: { src: "bug3.jpg", alt: "Materiales de nido" },
      },
      {
        titulo: "Ubicación",
        descripcionLarga:
          "Cuelga el hotel a 1.5m de altura orientado al sur en un lugar soleado.",
        descripcionCorta: ["Colgar", "Orientar"],
        imagen: { src: "bug4.jpg", alt: "Hotel instalado" },
      },
    ],
  },
  {
    id: 13,
    titulo: "Horno Solar de Cartón",
    descripcion:
      "Cocina alimentos usando únicamente la energía del sol con materiales reciclados.",
    imagen: {
      src: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      alt: "Horno solar",
    },
    categoria: TiposDeProyectos.ENERGIAS,
    tiempoDeConstruccion: "1 hora",
    likes: 512,
    comentarios: 45,
    autor: { nombre: "Chef Sol", avatar: "https://i.pravatar.cc/150?u=sol" },
    costo: "10 MXN",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 210,
    materialesId: [50, 51, 52],
    pasos: [
      {
        titulo: "Caja dentro de caja",
        descripcionLarga:
          "Coloca una caja pequeña dentro de una grande dejando un espacio para el aislante.",
        descripcionCorta: ["Encajar", "Centrar"],
        imagen: { src: "solar1.jpg", alt: "Cajas de cartón" },
      },
      {
        titulo: "Aislamiento térmico",
        descripcionLarga:
          "Rellena el espacio entre las cajas con papel de periódico arrugado.",
        descripcionCorta: ["Arrugar papel", "Rellenar"],
        imagen: { src: "solar2.jpg", alt: "Periódico aislante" },
      },
      {
        titulo: "Reflectores",
        descripcionLarga:
          "Forra las solapas superiores con papel aluminio de forma que no queden arrugas.",
        descripcionCorta: ["Pegar aluminio"],
        imagen: { src: "solar3.jpg", alt: "Aluminio brillante" },
      },
      {
        titulo: "Cubierta de vidrio",
        descripcionLarga:
          "Coloca un vidrio o plástico transparente sobre la caja interior para crear efecto invernadero.",
        descripcionCorta: ["Tapar", "Sellar"],
        imagen: { src: "solar4.jpg", alt: "Horno listo" },
      },
    ],
  },
  {
    id: 14,
    titulo: "Vermicompostera de Apartamento",
    descripcion:
      "Cría de lombrices rojas californianas para procesar residuos en espacios reducidos.",
    imagen: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrSLdQKk0VW6LYopQqqE6VOx-R6JWAPUlwTw&s",
      alt: "Lombrices en tierra",
    },
    categoria: TiposDeProyectos.COMPOSTAJE,
    tiempoDeConstruccion: "40 min",
    likes: 270,
    comentarios: 14,
    autor: { nombre: "Eco Vecino", avatar: "https://i.pravatar.cc/150?u=ecov" },
    costo: "20 MXN",
    dificultad: DificultadDeProyecto.FACIL,
    proyectosCompletados: 95,
    materialesId: [60, 61],
    pasos: [
      {
        titulo: "Perforación de cubetas",
        descripcionLarga:
          "Haz agujeros pequeños en la base de las cubetas para el drenaje de lixiviados.",
        descripcionCorta: ["Taladrar", "Limpiar rebabas"],
        imagen: { src: "worm1.jpg", alt: "Cubeta perforada" },
      },
      {
        titulo: "Cama de cartón",
        descripcionLarga:
          "Crea una base húmeda con tiras de cartón y papel sin tinta.",
        descripcionCorta: ["Picar cartón", "Humedecer"],
        imagen: { src: "worm2.jpg", alt: "Base de papel" },
      },
      {
        titulo: "Introducción de lombrices",
        descripcionLarga:
          "Coloca el núcleo de lombrices sobre la cama y deja que se entierren solas.",
        descripcionCorta: ["Soltar lombrices"],
        imagen: { src: "worm3.jpg", alt: "Lombrices rojas" },
      },
      {
        titulo: "Primer alimento",
        descripcionLarga:
          "Añade una pequeña cantidad de restos de verdura picada en una esquina.",
        descripcionCorta: ["Alimentar", "Tapar"],
        imagen: { src: "worm4.jpg", alt: "Restos orgánicos" },
      },
    ],
  },
  {
    id: 15,
    titulo: "Bomba de Agua Manual (PVC)",
    descripcion:
      "Sistema mecánico simple para extraer agua de pozos poco profundos.",
    imagen: {
      src: "data:image/jpeg;base64,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",
      alt: "Tubería PVC",
    },
    categoria: TiposDeProyectos.AGUA,
    tiempoDeConstruccion: "6 horas",
    likes: 150,
    comentarios: 30,
    autor: { nombre: "Ing. Agua", avatar: "https://i.pravatar.cc/150?u=inga" },
    costo: "30 MXN",
    dificultad: DificultadDeProyecto.DIFICIL,
    proyectosCompletados: 15,
    materialesId: [70, 71, 72, 73],
    pasos: [
      {
        titulo: "Cilindro de presión",
        descripcionLarga:
          "Corta el tubo de PVC de 3 pulgadas y lija el interior perfectamente.",
        descripcionCorta: ["Cortar", "Lijar interior"],
        imagen: { src: "pump1.jpg", alt: "Tubo PVC ancho" },
      },
      {
        titulo: "Válvula de pie",
        descripcionLarga:
          "Instala la válvula de retención en la base para que el agua no retroceda.",
        descripcionCorta: ["Pegar válvula"],
        imagen: {
          src: "https://http2.mlstatic.com/D_NQ_NP_837420-CBT93139092162_092025-O.webp",
          alt: "Válvula antiretorno",
        },
      },
      {
        titulo: "El émbolo",
        descripcionLarga:
          "Crea el pistón usando arandelas de goma que sellen perfectamente contra el tubo.",
        descripcionCorta: ["Armar pistón", "Probar sello"],
        imagen: { src: "pump3.jpg", alt: "Pistón con goma" },
      },
      {
        titulo: "Palanca de accionamiento",
        descripcionLarga:
          "Monta una estructura de madera que sirva de apoyo para el brazo de la bomba.",
        descripcionCorta: ["Construir palanca"],
        imagen: { src: "pump4.jpg", alt: "Bomba montada" },
      },
    ],
  },
  {
    id: 16,
    titulo: "Banco de Semillas Comunitario",
    descripcion:
      "Organización y conservación de semillas criollas para la soberanía alimentaria.",
    imagen: {
      src: "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9",
      alt: "Semillas variadas",
    },
    categoria: TiposDeProyectos.HUERTOS,
    tiempoDeConstruccion: "2 horas",
    likes: 420,
    comentarios: 50,
    autor: { nombre: "Semillero", avatar: "https://i.pravatar.cc/150?u=semi" },
    costo: "30 MXN",
    dificultad: DificultadDeProyecto.FACIL,
    proyectosCompletados: 200,
    materialesId: [80, 81, 82],
    pasos: [
      {
        titulo: "Limpieza y secado",
        descripcionLarga:
          "Extrae las semillas y déjalas secar a la sombra hasta que no tengan humedad.",
        descripcionCorta: ["Secar", "Limpiar"],
        imagen: { src: "seed1.jpg", alt: "Semillas secando" },
      },
      {
        titulo: "Clasificación",
        descripcionLarga:
          "Separa por especie, variedad y fecha de recolección.",
        descripcionCorta: ["Etiquetar", "Clasificar"],
        imagen: { src: "seed2.jpg", alt: "Sobres de papel" },
      },
      {
        titulo: "Almacenamiento",
        descripcionLarga:
          "Guarda las semillas en frascos de vidrio herméticos con un poco de sílice.",
        descripcionCorta: ["Envasar", "Sellar"],
        imagen: { src: "seed3.jpg", alt: "Frascos de vidrio" },
      },
      {
        titulo: "Registro",
        descripcionLarga:
          "Crea una ficha técnica para cada variedad incluyendo requerimientos de suelo.",
        descripcionCorta: ["Escribir fichas"],
        imagen: { src: "seed4.jpg", alt: "Cuaderno de registro" },
      },
    ],
  },
  {
    id: 17,
    titulo: "Deshidratador Solar de Alimentos",
    descripcion:
      "Conserva frutas y verduras por meses usando calor solar indirecto.",
    imagen: {
      src: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d",
      alt: "Fruta seca",
    },
    categoria: TiposDeProyectos.ENERGIAS,
    tiempoDeConstruccion: "5 horas",
    likes: 290,
    comentarios: 22,
    autor: {
      nombre: "Naturaleza",
      avatar: "https://i.pravatar.cc/150?u=natura",
    },
    costo: "50 MXN",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 40,
    materialesId: [90, 91, 92, 93],
    pasos: [
      {
        titulo: "Cámara de calor",
        descripcionLarga:
          "Construye una caja con fondo negro para absorber la radiación solar.",
        descripcionCorta: ["Pintar de negro", "Aislar"],
        imagen: {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdo9WSzxk-HHe23KHr6L7PZT0LStzv9iMpg&s",
          alt: "Caja negra",
        },
      },
      {
        titulo: "Bandejas de secado",
        descripcionLarga:
          "Fabrica marcos con malla fina que permita el flujo de aire por arriba y abajo.",
        descripcionCorta: ["Hacer marcos", "Poner malla"],
        imagen: {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOzpgBQjECaJDvxZ-eVwD7NDOAphdwtYGSw&s",
          alt: "Bandejas madera",
        },
      },
      {
        titulo: "Chimenea de ventilación",
        descripcionLarga:
          "Crea una apertura superior para que el aire caliente y húmedo escape.",
        descripcionCorta: ["Cortar salida"],
        imagen: {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZayoq_qfQBiR9KiRRnotNP8belo9GRZKbkw&s",
          alt: "Salida aire",
        },
      },
      {
        titulo: "Prueba de temperatura",
        descripcionLarga:
          "Coloca un termómetro y verifica que alcance entre 45°C y 60°C.",
        descripcionCorta: ["Monitorear"],
        imagen: {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgYFw42OJ1ZUUObDqWOzAf5fFPFu1TJ5xDQ&s",
          alt: "Termómetro solar",
        },
      },
    ],
  },
  {
    id: 18,
    titulo: "Biodigestor Casero Experimental",
    descripcion:
      "Genera biogás para cocinar a partir de desechos orgánicos y estiércol.",
    imagen: {
      src: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51",
      alt: "Tanque biodigestor",
    },
    categoria: TiposDeProyectos.ENERGIAS,
    tiempoDeConstruccion: "8 horas",
    likes: 410,
    comentarios: 56,
    autor: {
      nombre: "Bio Energía",
      avatar: "https://i.pravatar.cc/150?u=bioe",
    },
    costo: "100 MXN",
    dificultad: DificultadDeProyecto.EXPERTO,
    proyectosCompletados: 12,
    materialesId: [100, 101, 102],
    pasos: [
      {
        titulo: "Contenedor principal",
        descripcionLarga:
          "Usa un bidón de 200 litros con cierre hermético para la fermentación.",
        descripcionCorta: ["Preparar bidón"],
        imagen: { src: "gas1.jpg", alt: "Bidón azul" },
      },
      {
        titulo: "Carga y descarga",
        descripcionLarga:
          "Instala tubos de entrada para la mezcla y de salida para el biol (fertilizante líquido).",
        descripcionCorta: ["Poner tubos"],
        imagen: { src: "gas2.jpg", alt: "Tubos laterales" },
      },
      {
        titulo: "Salida de gas",
        descripcionLarga:
          "Coloca una manguera en la parte superior con una válvula de seguridad.",
        descripcionCorta: ["Válvula gas"],
        imagen: { src: "gas3.jpg", alt: "Manguera superior" },
      },
      {
        titulo: "Activación",
        descripcionLarga:
          "Llena el sistema con agua y estiércol para iniciar la generación de bacterias metanogénicas.",
        descripcionCorta: ["Mezclar", "Esperar"],
        imagen: { src: "gas4.jpg", alt: "Mezcla inicial" },
      },
    ],
  },
  {
    id: 19,
    titulo: "Sistema de Acuaponía Simple",
    descripcion:
      "Cultiva peces y plantas en un ciclo cerrado donde los desechos de los peces nutren a las plantas.",
    imagen: {
      src: "https://images.unsplash.com/photo-1558449028-b53a39d100fc",
      alt: "Peces y plantas",
    },
    categoria: TiposDeProyectos.HUERTOS,
    tiempoDeConstruccion: "10 horas",
    likes: 600,
    comentarios: 80,
    autor: {
      nombre: "Aqua Cultor",
      avatar: "https://i.pravatar.cc/150?u=aqua",
    },
    costo: "1000 MXN",
    dificultad: DificultadDeProyecto.EXPERTO,
    proyectosCompletados: 25,
    materialesId: [110, 111, 112, 113],
    pasos: [
      {
        titulo: "Tanque de peces",
        descripcionLarga:
          "Prepara un tanque de al menos 100 litros con aireación constante.",
        descripcionCorta: ["Oxigenar", "Limpiar"],
        imagen: { src: "aqua1.jpg", alt: "Acuario" },
      },
      {
        titulo: "Cama de cultivo",
        descripcionLarga:
          "Instala una bandeja superior llena de arlita o grava volcánica.",
        descripcionCorta: ["Poner sustrato"],
        imagen: { src: "aqua2.jpg", alt: "Cama de piedras" },
      },
      {
        titulo: "Sifón de campana",
        descripcionLarga:
          "Construye el mecanismo que permite el llenado y vaciado automático de la cama.",
        descripcionCorta: ["Armar sifón"],
        imagen: { src: "aqua3.jpg", alt: "Sifón PVC" },
      },
      {
        titulo: "Ciclado del nitrógeno",
        descripcionLarga:
          "Espera 2 semanas para que las bacterias conviertan el amoníaco en nitratos.",
        descripcionCorta: ["Medir pH", "Esperar"],
        imagen: { src: "aqua4.jpg", alt: "Kit de test" },
      },
    ],
  },
  {
    id: 20,
    titulo: "Lámpara de Botella de Vidrio",
    descripcion:
      "Recicla botellas de vino para crear iluminación ambiental LED de bajo consumo.",
    imagen: {
      src: "https://images.unsplash.com/photo-1534073828943-f801091bb18c",
      alt: "Lámpara artesanal",
    },
    categoria: TiposDeProyectos.ENERGIAS,
    tiempoDeConstruccion: "1.5 horas",
    likes: 180,
    comentarios: 10,
    autor: { nombre: "Luz Eco", avatar: "https://i.pravatar.cc/150?u=luz" },
    costo: "20 MXN",
    dificultad: DificultadDeProyecto.FACIL,
    proyectosCompletados: 112,
    materialesId: [120, 121, 122],
    pasos: [
      {
        titulo: "Corte de botella",
        descripcionLarga:
          "Usa un cortador de botellas y choque térmico para separar la base.",
        descripcionCorta: ["Marcar", "Calentar", "Enfriar"],
        imagen: { src: "lamp1.jpg", alt: "Botella cortada" },
      },
      {
        titulo: "Pulido",
        descripcionLarga:
          "Lija los bordes con lija de agua para evitar cortes y dejar un acabado suave.",
        descripcionCorta: ["Lijar bordes"],
        imagen: { src: "lamp2.jpg", alt: "Borde pulido" },
      },
      {
        titulo: "Instalación eléctrica",
        descripcionLarga: "Monta el portalámparas y el cableado de seguridad.",
        descripcionCorta: ["Cablear", "Aislar"],
        imagen: { src: "lamp3.jpg", alt: "Socket instalado" },
      },
      {
        titulo: "Ensamblado final",
        descripcionLarga:
          "Coloca la bombilla LED y fija la botella a la base de madera.",
        descripcionCorta: ["Probar luz"],
        imagen: { src: "lamp4.jpg", alt: "Lámpara encendida" },
      },
    ],
  },
  {
    id: 21,
    titulo: "Filtro de Agua de Emergencia",
    descripcion: "Purificador biológico usando capas de arena, carbón y grava.",
    imagen: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6qta1aTlOr4br2P__NCSiY785-ET2oxx1Vg&s",
      alt: "Agua filtrada",
    },
    categoria: TiposDeProyectos.AGUA,
    tiempoDeConstruccion: "1 hora",
    likes: 95,
    comentarios: 12,
    autor: {
      nombre: "Supervivencia",
      avatar: "https://i.pravatar.cc/150?u=super",
    },
    costo: "20 MXN",
    dificultad: DificultadDeProyecto.FACIL,
    proyectosCompletados: 78,
    materialesId: [130, 131, 132],
    pasos: [
      {
        titulo: "Capa de algodón",
        descripcionLarga:
          "Coloca algodón en el cuello de una botella invertida como primera barrera.",
        descripcionCorta: ["Compactar"],
        imagen: { src: "filter1.jpg", alt: "Algodón" },
      },
      {
        titulo: "Carbón activado",
        descripcionLarga:
          "Añade una capa de carbón triturado para eliminar químicos y olores.",
        descripcionCorta: ["Machacar carbón"],
        imagen: { src: "filter2.jpg", alt: "Carbón negro" },
      },
      {
        titulo: "Arena y grava",
        descripcionLarga:
          "Intercala capas de arena fina y grava para filtrar partículas grandes.",
        descripcionCorta: ["Rellenar capas"],
        imagen: { src: "filter3.jpg", alt: "Capas visibles" },
      },
      {
        titulo: "Filtrado inicial",
        descripcionLarga:
          "Vierte agua y descarta los primeros litros hasta que salga transparente.",
        descripcionCorta: ["Limpiar filtro"],
        imagen: { src: "filter4.jpg", alt: "Agua clara" },
      },
    ],
  },
  {
    id: 22,
    titulo: "Cercado Vivo de Cactus",
    descripcion:
      "Uso de especies suculentas para delimitar terrenos de forma natural y defensiva.",
    imagen: {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrrBJGJzpVhBVjcfWYgT4He4yRzJOSoi1Bg&s",
      alt: "Cactus en hilera",
    },
    categoria: TiposDeProyectos.HUERTOS,
    tiempoDeConstruccion: "2 días",
    likes: 130,
    comentarios: 7,
    autor: { nombre: "Rancho", avatar: "https://i.pravatar.cc/150?u=rancho" },
    costo: "Bajo",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 20,
    materialesId: [140, 141],
    pasos: [
      {
        titulo: "Selección de esquejes",
        descripcionLarga:
          "Corta brazos de cactus maduros y déjalos cicatrizar por 3 días.",
        descripcionCorta: ["Cortar", "Secar"],
        imagen: { src: "fence1.jpg", alt: "Cactus cortado" },
      },
      {
        titulo: "Zanja de siembra",
        descripcionLarga:
          "Realiza una pequeña zanja de 20cm de profundidad siguiendo la línea de la cerca.",
        descripcionCorta: ["Cavar"],
        imagen: { src: "fence2.jpg", alt: "Zanja en tierra" },
      },
      {
        titulo: "Plantación",
        descripcionLarga:
          "Coloca los cactus muy juntos entre sí para crear una barrera impenetrable.",
        descripcionCorta: ["Enterrar"],
        imagen: { src: "fence3.jpg", alt: "Cactus plantados" },
      },
      {
        titulo: "Sujeción",
        descripcionLarga:
          "Coloca tutores de madera temporales mientras las raíces se establecen.",
        descripcionCorta: ["Atar tutores"],
        imagen: { src: "fence4.jpg", alt: "Cerca terminada" },
      },
    ],
  },
  {
    id: 23,
    titulo: "Mueble de Cartón Reciclado",
    descripcion:
      "Diseño de estantería ultra resistente usando técnicas de ingeniería de papel.",
    imagen: {
      src: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b",
      alt: "Estante de cartón",
    },
    categoria: TiposDeProyectos.COMPOSTAJE,
    tiempoDeConstruccion: "4 horas",
    likes: 255,
    comentarios: 18,
    autor: { nombre: "Papelero", avatar: "https://i.pravatar.cc/150?u=pape" },
    costo: "Gratis",
    dificultad: DificultadDeProyecto.MEDIO,
    proyectosCompletados: 45,
    materialesId: [150, 151],
    pasos: [
      {
        titulo: "Triplicado de láminas",
        descripcionLarga:
          "Pega tres capas de cartón corrugado para crear paneles de alta resistencia.",
        descripcionCorta: ["Pegar", "Prensar"],
        imagen: { src: "carton1.jpg", alt: "Cartón grueso" },
      },
      {
        titulo: "Corte de encastres",
        descripcionLarga:
          "Usa un bisturí para cortar las ranuras donde se unirán las piezas sin pegamento.",
        descripcionCorta: ["Cortar ranuras"],
        imagen: { src: "carton2.jpg", alt: "Piezas cortadas" },
      },
      {
        titulo: "Ensamblado",
        descripcionLarga:
          "Une las piezas mediante presión siguiendo el orden de la base hacia arriba.",
        descripcionCorta: ["Encajar"],
        imagen: { src: "carton3.jpg", alt: "Estructura armada" },
      },
      {
        titulo: "Acabado final",
        descripcionLarga:
          "Forra con papel periódico o pintura ecológica para proteger de la humedad.",
        descripcionCorta: ["Pintar"],
        imagen: { src: "carton4.jpg", alt: "Estantería final" },
      },
    ],
  },
];

export const comentariosEnProyecto: ComentarioType[] = [
  {
    id: 1,
    idProyecto: 8,
    autor: "Pedro Silva",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
    tiempoDeLaPublicacion: "Hace 2 horas",
    contenido:
      " ¿Alguien ha probado esto en clima muy húmedo? Me preocupa que se forme demasiada humedad dentro del contenedor.",
    likes: 12,
    respuestas: [
      {
        id: 1,
        idComentarioPadre: 1,
        autor: " María González",
        avatar: "",
        likes: 0,
        tiempoDeLaPublicacion: "Hace 1 hora",
        contenido:
          "Yo vivo en zona muy húmeda y funciona perfecto. Solo agrega más material seco y revuelve más frecuentemente. También puedes hacer más orificios de ventilación.",
      },
    ],
  },
  {
    id: 2,
    idProyecto: 8,
    autor: "Laura Hernández",
    avatar:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg",
    tiempoDeLaPublicacion: "Hace 1 día",
    contenido: "Excelente",
    likes: 5,
    respuestas: [],
  },

  {
    id: 3,
    idProyecto: 1,
    avatar: "https://i.pravatar.cc/150?u=alejandro",
    autor: "Alejandro Pérez",
    tiempoDeLaPublicacion: "Hace 2 horas",
    contenido:
      "¡Excelente guía! Justo lo que necesitaba para empezar mi huerto en el balcón. Los pasos están muy claros.",
    likes: 12,
    respuestas: [
      {
        id: 101,
        avatar: "https://i.pravatar.cc/150?u=lucia",
        autor: "Lucía Verde (Autora)",
        tiempoDeLaPublicacion: "Hace 1 hora",
        contenido:
          "¡Hola Alejandro! Sí, el roble es incluso más resistente a la humedad que el pino.",
        likes: 5,
      },
      {
        id: 102,
        avatar: "https://i.pravatar.cc/150?u=marcos",
        autor: "Marcos Ríos",
        tiempoDeLaPublicacion: "Hace 30 min",
        contenido: "Confirmo, yo usé roble y tras un año sigue perfecto.",
        likes: 2,
      },
    ],
  },
  {
    id: 4,
    idProyecto: 1,
    avatar: "https://i.pravatar.cc/150?u=sofia",
    autor: "Sofía Martínez",
    tiempoDeLaPublicacion: "Hace 5 horas",
    contenido:
      "¿Es necesario usar madera de pino o puedo reciclar alguna otra que tenga en casa? Me preocupa la humedad.",
    likes: 8,
    respuestas: [],
  },
  {
    id: 5,
    idProyecto: 10,
    avatar: "https://i.pravatar.cc/150?u=ricardo",
    autor: "Ricardo Gómez",
    tiempoDeLaPublicacion: "Hace 1 día",
    contenido:
      "He completado el proyecto y funciona de maravilla. Como consejo adicional: asegúrense de lijar bien los bordes en el paso 2.",
    likes: 24,
    respuestas: [],
  },
  {
    id: 6,
    idProyecto: 15,
    avatar: "https://i.pravatar.cc/150?u=valeria",
    autor: "Valeria Ríos",
    tiempoDeLaPublicacion: "Hace 2 días",
    contenido:
      "Me encanta la iniciativa de la página. ¿Van a subir más proyectos sobre energía solar próximamente?",
    likes: 15,
    respuestas: [],
  },
  {
    id: 7,
    idProyecto: 12,
    avatar: "https://i.pravatar.cc/150?u=tomas",
    autor: "Tomás Castro",
    tiempoDeLaPublicacion: "Hace 3 días",
    contenido:
      "Intenté hacer el filtro de agua pero creo que compacté demasiado la arena. El agua sale muy lento, ¿alguna recomendación?",
    likes: 3,
    respuestas: [],
  },
  {
    id: 8,
    idProyecto: 12,
    avatar: "https://i.pravatar.cc/150?u=isabel",
    autor: "Isabel Allende",
    tiempoDeLaPublicacion: "Hace 1 semana",
    contenido:
      "La descripción de los materiales me ayudó mucho a presupuestar el proyecto antes de empezar. Gracias por compartir.",
    likes: 19,
    respuestas: [],
  },
  {
    id: 9,
    idProyecto: 6,
    avatar: "https://i.pravatar.cc/150?u=juan",
    autor: "Juan Diego",
    tiempoDeLaPublicacion: "Hace 1 semana",
    contenido:
      "¡Proyecto terminado! Mis plantas de tomate están creciendo mucho mejor con este sistema de riego.",
    likes: 31,
    respuestas: [],
  },
  {
    id: 10,
    idProyecto: 6,
    avatar: "https://i.pravatar.cc/150?u=carla",
    autor: "Carla Méndez",
    tiempoDeLaPublicacion: "Hace 2 semanas",
    contenido:
      "Muy buena la explicación de la vermicompostera. No sabía que era tan sencillo tener una en un departamento.",
    likes: 10,
    respuestas: [],
  },
];

export const respuestaAComentariosEnProyecto = [
  {
    id: 1,
    idComentarioPadre: 1,
    autor: " María González",
    avatar: "",
    likes: 0,
    tiempoDeLaPublicacion: "Hace 1 hora",
    contenido:
      "Yo vivo en zona muy húmeda y funciona perfecto. Solo agrega más material seco y revuelve más frecuentemente. También puedes hacer más orificios de ventilación.",
  },
];

//   src: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800",
