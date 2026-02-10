import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { EncabezadoExperienciasCompartidas } from "../moleculas/encabezadoExperienciasCompartidas";
import { FooterExperienciasCompartidas } from "../moleculas/footerExperienciasCompartidas";
import { ExperienciasCompartidasType } from "@/app/types";

type Props = {
  titulo: string;
  descripcion?: string;
  etiquetaDelBoton?: string;
  datosDeLasExperiencias: ExperienciasCompartidasType[];
};

export const SeccionExperienciasCompartidas = ({
  titulo,
  descripcion,
  etiquetaDelBoton,
  datosDeLasExperiencias,
}: Props) => {
  return (
    <section
      id="community-section"
      className="w-screen max-w-[1500px] bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="items-center text-center md:text-start md:items-start mb-12 flex flex-col md:flex-row justify-between gap-6 ">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{titulo}</h2>
            {descripcion ? (
              <p className="text-lg text-gray-600">{descripcion}</p>
            ) : null}
          </div>
          <Button
            icon="pi pi-plus-circle icon transition duration-500"
            aria-label="Plus"
            label={etiquetaDelBoton ?? "Compartir"}
            className="text-start! hover-group"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datosDeLasExperiencias.map((experiencia, index) => {
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
                key={experiencia.id + index}
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
                <p className="text-xl line-clamp-3">
                  {experiencia.descripcion}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
