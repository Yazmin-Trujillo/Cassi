import { twMerge } from "tailwind-merge";
import { TiposDeProyectos } from "./types";
import { Tag } from "primereact/tag";

export const EtiquetaDeCategorias = (
  tipoDeProyecto: string,
  className?: string,
) => (
  <Tag
    rounded
    className={twMerge(
      tipoDeProyecto === TiposDeProyectos.COMPOSTAJE
        ? "p-tag-compost"
        : tipoDeProyecto === TiposDeProyectos.AGUA
          ? "p-tag-agua"
          : tipoDeProyecto === TiposDeProyectos.ENERGIAS
            ? "p-tag-energia"
            : tipoDeProyecto === TiposDeProyectos.HUERTOS
              ? "p-tag-huerto"
              : "bg-green-600",
      className,
    )}
    value={tipoDeProyecto}
  ></Tag>
);
