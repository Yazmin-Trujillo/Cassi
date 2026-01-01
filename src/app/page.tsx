import { Image } from "primereact/image";
import { Menubar } from "primereact/menubar";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { SeccionProyectosDestacados } from "./components/organisms/proyectosDestacados";
import { SeccionCategoriasDeProyectos } from "./components/organisms/categoriasDeProyectos";

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
  );

  const end = (
    <div className="flex gap-2">
      <Button label="Iniciar Sesión" text />
      <Button label="Compartir proyecto" />
    </div>
  );

  const footer = (
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
        {SeccionCategoriasDeProyectos}
        {SeccionProyectosDestacados}
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
