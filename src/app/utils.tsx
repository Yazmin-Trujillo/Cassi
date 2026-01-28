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
      tipoDeProyecto === TiposDeProyectos.Compostaje
        ? ""
        : tipoDeProyecto === TiposDeProyectos.Agua
          ? "p-tag-agua"
          : tipoDeProyecto === TiposDeProyectos.Energias
            ? "p-tag-energia"
            : tipoDeProyecto === TiposDeProyectos.Huertos
              ? "p-tag-huerto"
              : "bg-green-600",
      className,
    )}
    value={tipoDeProyecto}
  ></Tag>
);
