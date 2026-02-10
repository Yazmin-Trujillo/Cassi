import { ComentarioType } from "@/app/types";

export const Comentario = ({
  comentario,
  isRes,
}: {
  comentario: ComentarioType;
  isRes?: boolean;
}) => {
  const nombre = comentario.autor.trim().split(" ");
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-start space-x-4">
          {isRes ? null : (
            <img
              src={comentario.avatar}
              alt={nombre[0]}
              className="w-10 h-10 rounded-full"
            />
          )}
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h4 className="font-semibold text-gray-900">
                {comentario.autor.trim()}
              </h4>
              <span className="text-sm text-gray-500">
                {comentario.tiempoDeLaPublicacion}
              </span>
            </div>
            <p className="text-gray-600 mb-3">{comentario.contenido}</p>
            {isRes ? null : (
              <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-primary flex items-center space-x-1">
                  <i data-fa-i2svg="" className="pi pi-thumbs-up-fill"></i>
                  <span>{comentario.likes}</span>
                </button>
                <button className="text-gray-500 hover:text-primary">
                  Responder
                </button>
              </div>
            )}
          </div>
        </div>
        {comentario.respuestas && comentario.respuestas.length > 0 && (
          <div className="respuestas-hilos">
            {comentario.respuestas.map((respuesta) => (
              <div className="ml-14 mt-4 space-y-4">
                <div className="bg-gray-50 rounded-lg">
                  <Comentario key={respuesta.id} comentario={respuesta} isRes />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
