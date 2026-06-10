import { twMerge } from "tailwind-merge";
import { Icon, Category } from "./types";

export const EtiquetaCategorias = (
  tipoDeProyecto: string,
  label: boolean,
  className?: string,
) => {
  console.log("que es", tipoDeProyecto);
  return (
    <div
      key={tipoDeProyecto}
      className={twMerge(
        tipoDeProyecto === Category.RESIDUOS
          ? "bg-secondary"
          : tipoDeProyecto === Category.AGUA
            ? "bg-agua"
            : tipoDeProyecto === Category.ENERGIAS
              ? "bg-energia"
              : tipoDeProyecto === Category.BIOCONSTRUCCION
                ? "bg-bioconstruccion"
                : tipoDeProyecto === Category.BIODIVERSIDAD
                  ? "bg-biodiversidad"
                  : "bg-green-600",
        "rounded-full ",
        label
          ? "w-auto font-bold text-[0.8rem] leading-[1.5] text-white py-[.4rem] px-[1rem]"
          : "w-8 h-4",
        className,
      )}
    >
      {label ? tipoDeProyecto : undefined}
    </div>
  );
};

export function changeIcon(nuevoId: Icon) {
  const uso = document.querySelector("#mi-icono-contenedor use");
  uso?.setAttribute("xlink:href", "#" + nuevoId);
}
