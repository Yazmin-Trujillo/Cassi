import { MaterialType } from "@/app/types";
import { twMerge } from "tailwind-merge";
import { Button } from "../atomos/button";

export const TarjetaDelMaterial = ({
  id,
  material,
  costo,
  imagen,
  descripcion,
}: MaterialType) => {
  return (
    <div
      key={id}
      className={twMerge(
        "bg-gray-50 rounded-lg p-6 max-w-[28rem] shadow-xl h-full flex flex-col justify-between",
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">{material}</h3>
        <span className="text-primary font-medium">{costo}</span>
      </div>
      <div className="h-32 overflow-hidden rounded-lg mb-4">
        <img
          className="w-full h-full object-cover"
          src={imagen.srcImg}
          alt={imagen.altImg}
        />
      </div>
      <p className="text-sm text-gray-600 mb-3">{descripcion}</p>
      <Button kind="Secondary" classNameButton="w-full">
        Agregar al carrito
      </Button>
    </div>
  );
};
