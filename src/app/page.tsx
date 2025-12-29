import { Image } from "primereact/image";
import { Menubar } from "primereact/menubar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";

export default function Home() {
  const items = [
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

  const start = (
    <div className="flex items-center justify-center gap-2">
      <div className="rounded-xl bg-linear-to-br from-lime-900 to-lime-700 w-[3rem] h-[3rem] flex items-center justify-center">
        <img
          alt="logo"
          src="/hoja.svg"
          height="80"
          className="w-[1.5rem]"
        ></img>
      </div>
      <span className="text-2xl font-bold text-lime-900">EcoCreadores</span>
    </div>

    // <i className="pi pi-check" style={{ fontSize: "2rem", color: "green" }}></i>
  );

  const end = (
    <div className="flex gap-2">
      <Button label="Iniciar Sesión" text />
      <Button label="Compartir proyecto" />
    </div>
  );

  const recycleHeader = (
    <div className="size-[4rem] bg-[var(--primary-color)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
      <img
        alt="recycle"
        src="/recycle.svg"
        style={{ width: "2rem", color: "white" }}
      ></img>
    </div>
  );

  const recycleFooter = (
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

  const dropletHeader = (
    <div className="size-[4rem] bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
      <img
        alt="droplet"
        src="/droplet.svg"
        style={{ width: "2rem", color: "white" }}
      ></img>
    </div>
  );

  const dropletFooter = (
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

  const solarPanelHeader = (
    <div className="size-[4rem] bg-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
      <img
        alt="solarPanel"
        src="/solarPanel.svg"
        style={{ width: "2rem", color: "white" }}
      ></img>
    </div>
  );

  const solarPanelFooter = (
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

  const carrotHeader = (
    <div className="size-[4rem] bg-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
      <img
        alt="carrot"
        src="/carrot.svg"
        style={{ width: "2rem", color: "white" }}
      ></img>
    </div>
  );

  const carrotFooter = (
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

  const proyectoCard1Header = (
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
        <i className="text-xs" data-fa-i2svg="">
          <svg
            className="svg-inline--fa fa-clock"
            width="0.9rem"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="clock"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
            ></path>
          </svg>
        </i>
        <span>2-3 horas</span>
      </div>
    </div>
  );

  const footer = (
    <div className="flex flex-col gap-8">
      <div>
        <Button className="myBoxShadow" label="Explorar proyectos" />
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

  return (
    <div className="flex bg-yellow-50 min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-[1500px] flex-col items-center justify-between py-4 px-8 bg-white dark:bg-black sm:items-start">
        <div className=" w-full">
          <Menubar model={items} start={start} end={end} />
        </div>

        <div className="flex p-8 gap-2">
          <div className="w-1/2">
            <Card
              footer={footer}
              style={{ border: 0, boxShadow: "none" }}
              className="myCardTitle"
              title="Aprende, Crea y Comparte Proyectos Ecológicos"
            >
              <p className="m-0 text-xl">
                Descubre guías paso a paso para proyectos de sustentabilidad,
                agroecología y medio ambiente. Comparte tu experiencia y
                adquiere los materiales necesarios en un solo lugar.
              </p>
            </Card>
          </div>
          <div className="w-1/2">
            <Image
              imageClassName="rounded-xl"
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0df34b17c3-821eaa01d60a5725810a.png"
              alt="Image"
              width="100%"
            />
          </div>
        </div>
        <div className="flex flex-col p-8 w-full items-center gap-4">
          <h2>Categorías de Proyectos</h2>
          <p>
            Explora diferentes áreas de sustentabilidad y encuentra el proyecto
            perfecto para ti
          </p>
          <div className="flex gap-4">
            <Card
              className="group my-header bg-gradient-to-br! from-green-50! to-emerald-50! hover:border-[var(--compostaje-color)] hover:shadow-xl transition cursor-pointer border-2 border-transparent"
              title="Compostaje"
              header={recycleHeader}
              footer={recycleFooter}
            >
              <p className="m-0 text-xl">
                Transforma residuos orgánicos en abono natural
              </p>
            </Card>
            <Card
              className="group my-header bg-gradient-to-br! from-blue-50! to-cyan-50! hover:border-blue-400 hover:shadow-xl transition cursor-pointer border-2 border-transparent"
              title="Captación de Agua"
              header={dropletHeader}
              footer={dropletFooter}
            >
              <p className="m-0 text-xl">
                Sistemas para recolectar y reutilizar agua de lluvia
              </p>
            </Card>
            <Card
              className="group my-header bg-gradient-to-br! from-amber-50! to-yellow-50! hover:border-amber-400 hover:shadow-xl transition cursor-pointer border-2 border-transparent"
              title="Energía Solar"
              header={solarPanelHeader}
              footer={solarPanelFooter}
            >
              <p className="m-0 text-xl">
                Aprovecha la energía del sol para tu hogar
              </p>
            </Card>
            <Card
              className="group my-header bg-linear-to-br! from-rose-50 to-pink-50 hover:border-rose-400 hover:shadow-xl transition cursor-pointer border-2 border-transparent"
              title="Huertos Urbanos"
              header={carrotHeader}
              footer={carrotFooter}
            >
              <p className="m-0 text-xl">
                Cultiva tus propios alimentos en espacios pequeños
              </p>
            </Card>
          </div>
        </div>
        <section id="proyectos-destacados" className="py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-primary mb-3">
                  Proyectos Destacados
                </h2>
                <p className="text-lg text-gray-600">
                  Aprende paso a paso con nuestras guías completas
                </p>
              </div>
              <Button label="Ver Todos los Proyectos" outlined />
            </div>
            <div className="grid grid-cols-3 gap-8">
              <Card
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
                title="Compostera de Pallets DIY"
                header={proyectoCard1Header}
                footer={carrotFooter}
              >
                <p className="text-xl">
                  Construye tu propia compostera usando materiales reciclados.
                  Guía completa con 8 pasos detallados.
                </p>
              </Card>
              <div
                id="proyecto-card-1"
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
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
                    <i className="text-xs" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-clock"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="clock"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                        ></path>
                      </svg>
                    </i>
                    <span>2-3 horas</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Compostera de Pallets DIY
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Construye tu propia compostera usando materiales reciclados.
                    Guía completa con 8 pasos detallados.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <i className="text-red-500" data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-heart"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="heart"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                            ></path>
                          </svg>
                        </i>
                        <span>342</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <i data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-comment"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="comment"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                            ></path>
                          </svg>
                        </i>
                        <span>28</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        María López
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <button className="flex-1 mr-2 px-4 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition">
                      Ver Guía
                    </button>
                    <button className="px-4 py-2.5 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition">
                      <i data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-cart-shopping"
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
                    </button>
                  </div>
                </div>
              </div>

              <div
                id="proyecto-card-2"
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ada6b4c393-d460d2499c8385da5171.png"
                    alt="rainwater harvesting system with barrels and gutters on house roof, DIY installation tutorial, sustainable water collection, pipes and filters, eco home improvement"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Agua
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-primary flex items-center space-x-1">
                    <i className="text-xs" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-clock"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="clock"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                        ></path>
                      </svg>
                    </i>
                    <span>4-5 horas</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Sistema de Captación Pluvial
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Instala un sistema completo para captar y almacenar agua de
                    lluvia. Ahorra hasta 40% en tu consumo.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <i className="text-red-500" data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-heart"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="heart"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                            ></path>
                          </svg>
                        </i>
                        <span>489</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <i data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-comment"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="comment"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                            ></path>
                          </svg>
                        </i>
                        <span>45</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        Carlos Ruiz
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <button className="flex-1 mr-2 px-4 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition">
                      Ver Guía
                    </button>
                    <button className="px-4 py-2.5 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition">
                      <i data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-cart-shopping"
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
                    </button>
                  </div>
                </div>
              </div>

              <div
                id="proyecto-card-3"
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
                <div className="h-64 overflow-hidden relative">
                  <Image
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/68b5883b56-700ba9f8c57721fb3d5e.png"
                    alt="vertical garden on apartment balcony with recycled bottles and containers, urban gardening, fresh herbs and vegetables growing, DIY hydroponic system, sustainable living"
                  />
                  <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Huerto
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-primary flex items-center space-x-1">
                    <i className="text-xs" data-fa-i2svg="">
                      <svg
                        className="svg-inline--fa fa-clock"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="clock"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                        ></path>
                      </svg>
                    </i>
                    <span>3 horas</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    Huerto Vertical en Balcón
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Crea un jardín vertical usando materiales reciclados.
                    Perfecto para espacios pequeños.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <i className="text-red-500" data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-heart"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="heart"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                            ></path>
                          </svg>
                        </i>
                        <span>567</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <i data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-comment"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="comment"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                            ></path>
                          </svg>
                        </i>
                        <span>62</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image
                        src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        Ana Torres
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <button className="flex-1 mr-2 px-4 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-secondary transition">
                      Ver Guía
                    </button>
                    <button className="px-4 py-2.5 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition">
                      <i data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-cart-shopping"
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
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"></div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
