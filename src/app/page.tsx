import { Menubar } from "primereact/menubar";
import { menuEnd, menuItems, menuStart } from "./data";
import { SeccionHero } from "./components/organisms/heroSeccion";
import { SeccionCategoriasDeProyectos } from "./components/organisms/categoriasDeProyectos";
import { SeccionProyectosDestacados } from "./components/organisms/proyectosDestacados";
import { SeccionComoFunciona } from "./components/organisms/comoFunciona";
import { SeccionProyectosDeLaComunidad } from "./components/organisms/proyectosDeLaComunidad";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
      <header
        id="header"
        className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50"
      >
        <Menubar model={menuItems} start={menuStart} end={menuEnd} />
      </header>
      <main className="flex overflow-hidden min-h-screen w-full flex-col items-center justify-between ">
        {SeccionHero}
        {SeccionCategoriasDeProyectos}
        {SeccionProyectosDestacados}
        {SeccionComoFunciona}
        {/*{SeccionProyectosDeLaComunidad}*/}
        <section
          id="materiales-populares"
          className="py-10 px-8 w-screen max-w-[1500px]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-display font-bold text-primary md:mb-3">
                  Materiales Populares
                </h2>
                <p className="hidden md:flex text-lg text-gray-600">
                  Conoce todos los productos disponibles en nuestra tienda.
                </p>
              </div>
              <Button className="whitespace-nowrap" label="Ver tienda" text />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 place-items-center">
              <Card
                className="card-materiales overflow-hidden group"
                style={{
                  border: 0,
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
                title="Pallet de Madera"
                header={
                  <div className="h-32 bg-white rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d55f6609c0-208c6ad9245214d490bf.png"
                      alt="wooden pallet on white background, clean product shot"
                    />
                  </div>
                }
                footer={
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$25</span>
                    <Button icon="pi pi-plus" rounded aria-label="Plus" />
                  </div>
                }
              >
                <p className="text-xl">Reciclado certificado</p>
              </Card>
              <Card
                className="card-materiales overflow-hidden group"
                style={{
                  border: 0,
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
                title="Tierra Orgánica"
                header={
                  <div className="h-32 bg-white rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9333cbbe84-051939e814b32f123a90.png"
                      alt="bag of organic soil and compost on white background"
                    />
                  </div>
                }
                footer={
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$18</span>
                    <Button icon="pi pi-plus" rounded aria-label="Plus" />
                  </div>
                }
              >
                <p className="text-xl">20 kg premium</p>
              </Card>
              <Card
                className="card-materiales overflow-hidden group"
                style={{
                  border: 0,
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
                title="Kit de Semillas"
                header={
                  <div className="h-32 bg-white rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/b9d3070768-b02eb999347357dada92.png"
                      alt="seed starter kit with small pots on white background"
                    />
                  </div>
                }
                footer={
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$12</span>
                    <Button icon="pi pi-plus" rounded aria-label="Plus" />
                  </div>
                }
              >
                <p className="text-xl">15 variedades</p>
              </Card>
              <Card
                className="card-materiales overflow-hidden group"
                style={{
                  border: 0,
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
                title="Kit Herramientas"
                header={
                  <div className="h-32 bg-white rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/69a72c9293-ce54d7be3457afa04591.png"
                      alt="gardening tools set on white background, shovel and rake"
                    />
                  </div>
                }
                footer={
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$35</span>
                    <Button icon="pi pi-plus" rounded aria-label="Plus" />
                  </div>
                }
              >
                <p className="text-xl">5 piezas básicas</p>
              </Card>
              <Card
                className="card-materiales overflow-hidden group"
                style={{
                  border: 0,
                  boxShadow: "none",
                  backgroundColor: "transparent",
                }}
                title="Pallet de Madera"
                header={
                  <div className="h-32 bg-white rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d55f6609c0-208c6ad9245214d490bf.png"
                      alt="wooden pallet on white background, clean product shot"
                    />
                  </div>
                }
                footer={
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">$25</span>
                    <Button icon="pi pi-plus" rounded aria-label="Plus" />
                  </div>
                }
              >
                <p className="text-xl">Reciclado certificado</p>
              </Card>
            </div>
          </div>
        </section>
        {/* <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left"></div>
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
        </div>*/}
      </main>
    </div>
  );
}
