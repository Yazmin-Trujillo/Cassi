type Props = {
  avatarSrc: string;
  avatarAlt: string | null | undefined;
  autor: string;
  tiempoDePublicacion: string;
};
export const EncabezadoExperienciasCompartidas = ({
  autor,
  avatarAlt,
  avatarSrc,
  tiempoDePublicacion,
}: Props) => {
  return (
    <div className="flex justify-between gap-3 items-center px-4">
      <div className="flex flex-1 gap-4">
        <img
          className="w-12! h-12! rounded-full"
          src={avatarSrc}
          alt={avatarAlt ?? "avatar"}
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{autor}</h4>
          <p className="text-xs text-gray-500">{tiempoDePublicacion}</p>
        </div>
      </div>

      <i className="pi pi-ellipsis-h text-gray-400 w-8" data-fa-i2svg=""></i>
    </div>
  );
};
