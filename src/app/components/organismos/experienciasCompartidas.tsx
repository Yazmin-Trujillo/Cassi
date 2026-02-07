import { ExperienciasCompartidas } from "@/app/data";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { EncabezadoExperienciasCompartidas } from "../moleculas/encabezadoExperienciasCompartidas";
import { FooterExperienciasCompartidas } from "../moleculas/footerExperienciasCompartidas";

export const SeccionExperienciasCompartidas = (
  <section
    id="community-section"
    className="py-10 px-8 w-screen max-w-[1500px]"
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2>Experiencias Compartidas</h2>
        <Button
          icon="pi pi-plus"
          aria-label="Plus"
          label="Compartir"
          className="flex-col gap-0"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ExperienciasCompartidas.slice(0, 3).map((experiencia, index) => {
          const autor = experiencia.autor.slice(0, 16);
          const avatarSrc = experiencia.avatar.src;
          const avatarAlt = experiencia.avatar.alt.trim();
          const tiempoDePublicacion = experiencia.tiempoDePublicacion;
          const imagenAlt = experiencia.imagen.altImg;
          const imagenSrc = experiencia.imagen.srcImg;
          const likes = experiencia.likes;
          const comentarios = experiencia.comentarios;
          const reenvios = experiencia.reenvios;
          return (
            <Card
              key={experiencia.autor + index}
              className="experiencias-compartidas overflow-hidden shadow-lg! hover:shadow-2xl! min-w-2xs group"
              header={EncabezadoExperienciasCompartidas({
                avatarSrc,
                autor,
                avatarAlt,
                tiempoDePublicacion,
              })}
              footer={FooterExperienciasCompartidas({
                imagenSrc,
                imagenAlt,
                likes,
                comentarios,
                reenvios,
              })}
            >
              <p className="text-xl line-clamp-3">{experiencia.descripcion}</p>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
