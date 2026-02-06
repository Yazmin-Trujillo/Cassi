import { ExperienciasCompartidas } from "@/app/data";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export const SeccionExperienciasCompartidas = (
  <section
    id="community-section"
    className="py-10 px-8 w-screen max-w-[1500px]"
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2>Experiencias Compartidas</h2>
        <Button
          icon="pi pi-plus"
          aria-label="Plus"
          label="Compartir"
          className="flex-col gap-0"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ExperienciasCompartidas.map((experiencia, index) => {
          return (
            <Card
              key={experiencia.autor + index}
              className="experiencias-compartidas overflow-hidden shadow-lg! hover:shadow-2xl! min-w-2xs group"
              header={
                <div className="flex justify-between gap-3 items-center px-4">
                  <div className="flex flex-1 gap-4">
                    <img
                      className="w-12! h-12! rounded-full"
                      src={experiencia.avatar.src}
                      alt={experiencia.avatar.alt}
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">
                        {experiencia.autor}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {experiencia.tiempoDePublicacion}
                      </p>
                    </div>
                  </div>

                  <i
                    className="pi pi-ellipsis-h text-gray-400 w-8"
                    data-fa-i2svg=""
                  ></i>
                </div>
              }
              footer={
                <>
                  <div className="h-56 rounded-2xl overflow-hidden mb-3">
                    <img
                      className="w-full h-full object-cover"
                      src={experiencia.imagen.srcImg}
                      alt={experiencia.imagen.altImg}
                    />
                  </div>
                  <div className="flex items-center justify-between text-gray-600 text-sm">
                    <button className="flex items-center gap-2">
                      <i className="pi pi-heart-fill text-red-500"></i>
                      <span>{experiencia.likes}</span>
                    </button>
                    <button className="flex items-center gap-2">
                      <i className="pi pi-comment"></i>
                      <span>{experiencia.comentarios}</span>
                    </button>
                    <button className="flex items-center gap-2">
                      <i data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-share"
                          width="1rem"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="share"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
                          ></path>
                        </svg>
                      </i>
                      <span>{experiencia.reenvios}</span>
                    </button>
                  </div>
                </>
              }
            >
              <p className="text-xl">{experiencia.descripcion}</p>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
