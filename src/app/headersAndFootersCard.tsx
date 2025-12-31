import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { EncabezadoProyectosDestacados, TiposDeProyectos } from "./types";

export const recycleHeader = (
  <div className="size-[4rem] bg-[var(--primary-color)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
    <img
      alt="recycle"
      src="/recycle.svg"
      style={{ width: "2rem", color: "white" }}
    ></img>
  </div>
);

export const recycleFooter = (
  <div className="flex items-center text-sm text-[var(--compostaje-color)] font-semibold">
    <span>124 proyectos</span>
    <i className="ml-2 group-hover:translate-x-1 transition" data-fa-i2svg="">
      <svg
        className="svg-inline--fa fa-arrow-right"
        width="0.9rem"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="arrow-right"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        ></path>
      </svg>
    </i>
  </div>
);

export const dropletHeader = (
  <div className="size-[4rem] bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
    <img
      alt="droplet"
      src="/droplet.svg"
      style={{ width: "2rem", color: "white" }}
    ></img>
  </div>
);

export const dropletFooter = (
  <div className="flex items-center text-sm text-blue-600 font-semibold">
    <span>87 proyectos</span>
    <i className="ml-2 group-hover:translate-x-1 transition" data-fa-i2svg="">
      <svg
        className="svg-inline--fa fa-arrow-right"
        width="0.9rem"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="arrow-right"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        ></path>
      </svg>
    </i>
  </div>
);

export const solarPanelHeader = (
  <div className="size-[4rem] bg-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
    <img
      alt="solarPanel"
      src="/solarPanel.svg"
      style={{ width: "2rem", color: "white" }}
    ></img>
  </div>
);

export const solarPanelFooter = (
  <div className="flex items-center text-sm text-amber-600 font-semibold">
    <span>156 proyectos</span>
    <i className="ml-2 group-hover:translate-x-1 transition" data-fa-i2svg="">
      <svg
        className="svg-inline--fa fa-arrow-right"
        width="0.9rem"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="arrow-right"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        ></path>
      </svg>
    </i>
  </div>
);

export const carrotHeader = (
  <div className="size-[4rem] bg-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
    <img
      alt="carrot"
      src="/carrot.svg"
      style={{ width: "2rem", color: "white" }}
    ></img>
  </div>
);

export const carrotFooter = (
  <div className="flex items-center text-sm text-rose-600 font-semibold">
    <span>203 proyectos</span>
    <i className="ml-2 group-hover:translate-x-1 transition" data-fa-i2svg="">
      <svg
        className="svg-inline--fa fa-arrow-right"
        width="0.9rem"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="arrow-right"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
        ></path>
      </svg>
    </i>
  </div>
);

export const proyectoCard1Header = (
  <div className="h-64 overflow-hidden relative">
    <img
      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/57ea6b925f-dd83dba6dda5a70ba903.png"
      alt="DIY composting bin made from wooden pallets in backyard garden, step by step construction, organic waste, natural decomposition, eco-friendly, detailed tutorial style"
    />
    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
      Compostaje
    </div>
    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-primary flex items-center space-x-1">
      <i className="pi pi-clock"></i>
      <span>2-3 horas</span>
    </div>
  </div>
);

export const proyectoCard1Footer = (
  <>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <i className="pi pi-heart-fill text-red-500"></i>
          <span>342</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="pi pi-comment"></i>
          <span>28</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium text-gray-700">María López</span>
      </div>
    </div>
    <Divider />
    <div className="flex items-center justify-between gap-4 w-full">
      <Button className="w-1/2">Ver Guía</Button>
      <Button
        style={{ borderColor: "#8fbc3f", color: "#8fbc3f" }}
        outlined
        className="w-1/2"
      >
        <i data-fa-i2svg="">
          <svg
            className="svg-inline--fa fa-cart-shopping"
            width="1rem"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="cart-shopping"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            ></path>
          </svg>
        </i>{" "}
        Materiales
      </Button>
    </div>
  </>
);

export const encabezadoProyectosDestacados = ({
  srcImg,
  altImg,
  tipoDeproyecto,
  horasDeConstruccion,
}: EncabezadoProyectosDestacados) => (
  <div className="h-64 overflow-hidden relative">
    <img
      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      src={srcImg}
      alt={altImg}
    />
    <div
      className={`absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-semibold ${
        tipoDeproyecto === TiposDeProyectos.Compostaje
          ? "bg-primary"
          : tipoDeproyecto === TiposDeProyectos.Agua
          ? "bg-[var(--captación-de-agua)]"
          : tipoDeproyecto === TiposDeProyectos.Energias
          ? "bg-[var(--energía-solar)]"
          : "bg-[var(--huertos-urbanos)]"
      }`}
    >
      {tipoDeproyecto}
    </div>
    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-primary flex items-center space-x-1">
      <i className="pi pi-clock"></i>
      <span>{horasDeConstruccion}</span>
    </div>
  </div>
);

export const FooterProyectosDestacados = () => (
  <>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <i className="pi pi-heart-fill text-red-500"></i>
          <span>342</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="pi pi-comment"></i>
          <span>28</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-medium text-gray-700">María López</span>
      </div>
    </div>
    <Divider />
    <div className="flex items-center justify-between gap-4 w-full">
      <Button className="w-1/2">Ver Guía</Button>
      <Button
        style={{ borderColor: "#8fbc3f", color: "#8fbc3f" }}
        outlined
        className="w-1/2"
      >
        <i data-fa-i2svg="">
          <svg
            className="svg-inline--fa fa-cart-shopping"
            width="1rem"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="cart-shopping"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            ></path>
          </svg>
        </i>{" "}
        Materiales
      </Button>
    </div>
  </>
);
