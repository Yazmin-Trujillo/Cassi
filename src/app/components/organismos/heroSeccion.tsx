import { footerHero } from "@/app/data";
import { Card } from "primereact/card";

export const SeccionHero = (
  <section
    id="hero-section"
    className="max-w-[1500px] flex w-full items-center h-dvh md:h-auto pb-10 md:pb-0 md:h-[720px] bg-gradient-to-br from-green-50 via-white to-emerald-50"
  >
    <div className="max-w-7xl mx-auto flex gap-16 items-center relative w-full h-full md:p-8 xl:p-16">
      <div className="md:w-1/2 md:relative absolute bottom-0 left-0 right-0 z-1">
        <Card
          // header={encabezadoHero}
          footer={footerHero}
          style={{
            border: 0,
            boxShadow: "none",
            backgroundColor: "transparent",
            paddingBottom: "2rem",
          }}
          className="myCardTitle"
          title={
            <>
              <div className="md:hidden text-3xl text-white">
                Aprende Sustentabilidad
              </div>
              <div className="hidden text-primary md:flex text-4xl xl:text-5xl ">
                Aprende, Crea y Comparte Proyectos Ecológicos
              </div>
            </>
          }
        >
          <p className="hidden md:flex m-0 text-xl">
            Descubre guías paso a paso para proyectos de sustentabilidad,
            agroecología y medio ambiente. Comparte tu experiencia y adquiere
            los materiales necesarios en un solo lugar.
          </p>
          <p className="text-gray-200! md:hidden">
            Proyectos paso a paso para un futuro más verde
          </p>
        </Card>
      </div>
      <div className="relative w-full h-full md:w-1/2">
        <div className="absolute -top-8 -left-8 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="relative h-full md:h-[500px] md:rounded-2xl overflow-hidden shadow-2xl">
          <img
            className="w-full h-full object-cover md:hidden"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9ef40fa642-1e7f70893cab75327a9d.png"
            alt="lush green garden with vegetables and sustainable living elements, natural lighting, eco-friendly atmosphere"
          />
          <img
            className="hidden md:flex w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0df34b17c3-821eaa01d60a5725810a.png"
            alt="sustainable urban garden with raised beds, composting system, rainwater collection, people working together in community garden, vibrant vegetables, modern eco-friendly design, bright natural lighting, photorealistic"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
        </div>
      </div>
    </div>
  </section>
);
