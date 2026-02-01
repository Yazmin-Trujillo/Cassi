import { DificultadDeProyecto, TiposDeProyectos } from "@/app/types";
import { EtiquetaDeCategorias } from "@/app/utils";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { twMerge } from "tailwind-merge";

type Props = {
  categoria: TiposDeProyectos;
  dificultad: DificultadDeProyecto;
  titulo: string;
  autor: string;
  descripcion: string;
  tiempoDeConstruccion: string;
  costo: string;
  proyectosCompletados: number;
  srcImg: string;
  altImg: string;
  className?: string;
};

export const HeroDelProyecto = ({
  categoria,
  dificultad,
  titulo,
  autor,
  descripcion,
  tiempoDeConstruccion,
  costo,
  proyectosCompletados,
  srcImg,
  altImg,
  className,
}: Props) => {
  return (
    <section id="hero-project" className={twMerge("bg-green-100!", className)}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center md:max-h-[400px]">
          <Card
            header={
              <div className="flex items-center space-x-2 px-4 md:px-0">
                {EtiquetaDeCategorias(categoria)}
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">
                  Nivel:{" "}
                  <span className="font-semibold text-primary">
                    {dificultad}
                  </span>
                </span>
              </div>
            }
            footer={
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <i className="pi pi-clock text-primary"></i>
                  <span className="text-primary">{tiempoDeConstruccion}</span>
                </div>
                <Divider layout="vertical" />
                <div className="flex items-center space-x-2">
                  <i className="pi pi-dollar text-primary"></i>
                  <span className="text-primary">{costo}</span>
                </div>
                <Divider layout="vertical" />
                <div className="flex items-center space-x-2">
                  <i className="pi pi-users text-primary"></i>
                  <span className="text-primary">
                    {proyectosCompletados} hechos
                  </span>
                </div>
              </div>
            }
            style={{
              border: 0,
              boxShadow: "none",
              backgroundColor: "transparent",
              paddingBottom: "2rem",
            }}
            className="myCardTitle"
            title={
              <div className="text-3xl md:text-4xl xl:text-5xl">{titulo}</div>
            }
            subTitle={autor}
          >
            <p className="flex m-0 text-xl">{descripcion}</p>
          </Card>
          <div className="h-full max-h-[400px] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover"
              src={srcImg}
              alt={altImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
