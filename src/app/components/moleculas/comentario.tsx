import { ComentarioType } from "@/app/types";

export const Comentario = ({
  avatar,
  autor,
  tiempoDeLaPublicacion,
  contenido,
  likes,
  esRespuesta,
}: ComentarioType) => {
  const nombre = autor.trim().split(" ");
  return (
    <div className="flex items-start space-x-4">
      {esRespuesta ? null : (
        <img src={avatar} alt={nombre[0]} className="w-10 h-10 rounded-full" />
      )}
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-2">
          <h4 className="font-semibold text-gray-900">{autor.trim()}</h4>
          <span className="text-sm text-gray-500">{tiempoDeLaPublicacion}</span>
        </div>
        <p className="text-gray-600 mb-3">{contenido}</p>
        {esRespuesta ? null : (
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-primary flex items-center space-x-1">
              <i data-fa-i2svg="" className="pi pi-thumbs-up-fill"></i>
              <span>{likes}</span>
            </button>
            <button className="text-gray-500 hover:text-primary">
              Responder
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
