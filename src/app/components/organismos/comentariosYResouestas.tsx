import { ComentarioType } from "@/app/types";
import { Comentario } from "../moleculas/comentario";

type Props = {
  id: number;
  avatar: string;
  autor: string;
  tiempoDeLaPublicacion: string;
  contenido: string;
  likes: number;
  respuestas: ComentarioType[];
};

export const ComentariosYRespuestas = ({
  id,
  avatar,
  autor,
  tiempoDeLaPublicacion,
  contenido,
  likes,
  respuestas,
}: Props) => {
  return (
    <div key={id} className="space-y-6">
      <div className="bg-white rounded-xl p-6">
        {Comentario({
          avatar,
          autor,
          tiempoDeLaPublicacion,
          contenido,
          likes,
        })}
        {respuestas.map((item) => (
          <div className="ml-14 mt-4 space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              {Comentario({
                avatar: item.avatar,
                autor: item.autor,
                tiempoDeLaPublicacion: item.tiempoDeLaPublicacion,
                contenido: item.contenido,
                likes: item.likes,
                esRespuesta: true,
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
