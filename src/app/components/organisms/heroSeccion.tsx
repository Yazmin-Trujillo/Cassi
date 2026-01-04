import { footerHero } from "@/app/data";
import { Card } from "primereact/card";

export const SeccionHero = (
  <section
    id="hero-section"
    className="pt-32 pb-20 max-w-[1500px] h-[720px] flex items-center"
  >
    <div className="max-w-7xl mx-auto flex gap-16 items-center">
      <div className="w-1/2">
        <Card
          // header={encabezadoHero}
          footer={footerHero}
          style={{
            border: 0,
            boxShadow: "none",
            backgroundColor: "transparent",
          }}
          className="myCardTitle"
          title="Aprende, Crea y Comparte Proyectos Ecológicos"
        >
          <p className="m-0 text-xl">
            Descubre guías paso a paso para proyectos de sustentabilidad,
            agroecología y medio ambiente. Comparte tu experiencia y adquiere
            los materiales necesarios en un solo lugar.
          </p>
        </Card>
      </div>
      <div className="relative">
        <div className="absolute -top-8 -left-8 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0df34b17c3-821eaa01d60a5725810a.png"
            alt="sustainable urban garden with raised beds, composting system, rainwater collection, people working together in community garden, vibrant vegetables, modern eco-friendly design, bright natural lighting, photorealistic"
          />
        </div>
      </div>
    </div>
  </section>
);
