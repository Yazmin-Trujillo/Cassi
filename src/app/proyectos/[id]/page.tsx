import { Comentario } from "@/app/components/moleculas/comentario";
import { HeroDelProyecto } from "@/app/components/moleculas/heroDelProyecto";
import { TarjetaDelMaterial } from "@/app/components/moleculas/tarjetaDelMaterial";
import { SeccionExperienciasCompartidas } from "@/app/components/organismos/experienciasCompartidas";
import {
  comentariosEnProyecto,
  ExperienciasCompartidas,
  Materiales,
  TodosLosProyectos,
} from "@/app/data";
import { Button } from "primereact/button";

type Proyecto = {
  params: Promise<{
    id: string;
  }>;
};

async function getData(id: number) {
  const proyecto = TodosLosProyectos.find((proyecto) => {
    return proyecto.id === id;
  });

  return proyecto;

  // const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  //  }

  //  return res.json();
}

export default async function Proyecto({ params }: Proyecto) {
  const { id } = await params;

  const data = await getData(Number(id));

  if (!data) {
    return <div>El producto no existe</div>;
  } else {
    const categoria = data.categoria;
    const dificultad = data.dificultad;
    const tituloDelProyecto = data.titulo;
    const autor = data.autor.nombre;
    const descripcion = data.descripcion;
    const tiempoDeConstruccion = data.tiempoDeConstruccion;
    const costo = data.costo;
    const proyectosCompletados = data.proyectosCompletados;
    const srcImg = data.imagen.src;
    const altImg = data.imagen.alt;
    const materialesId = data.materialesId;
    const materiales = Materiales.filter((material) =>
      materialesId.includes(material.id),
    );
    const pasos = data.pasos;
    const tituloSeccionExperienciasCompartidas = " Proyectos de la Comunidad";
    const descripcionSeccionExperienciasCompartidas =
      " Mira cómo otros usuarios han completado este proyecto";
    const datosDeLasExperiencias = ExperienciasCompartidas.filter(
      (experiencia) => experiencia.proyectoPadre === data.id,
    );

    return (
      <main className="flex flex-col gap-16">
        <HeroDelProyecto
          categoria={categoria}
          dificultad={dificultad}
          titulo={tituloDelProyecto}
          autor={autor}
          descripcion={descripcion}
          tiempoDeConstruccion={tiempoDeConstruccion}
          costo={costo}
          proyectosCompletados={proyectosCompletados}
          srcImg={srcImg}
          altImg={altImg}
        />
        <section id="materials-section" className="bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Materiales Necesarios
              </h3>
              <p className="text-lg text-gray-600">
                Todo lo que necesitas para completar tu proyecto
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-6">
                  {materiales.map((item) => {
                    const srcImg = item.imagen.srcImg;
                    const altImg = item.imagen.altImg;
                    const id = item.id;
                    const material = item.material;
                    const costo = item.costo;
                    const imagen = { srcImg, altImg };
                    const descripcion = item.descripcion;
                    return TarjetaDelMaterial({
                      id,
                      material,
                      costo,
                      imagen,
                      descripcion,
                    });
                  })}
                </div>
              </div>

              <div className="bg-[#dcfce7] rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Kit Completo</h3>
                <div className="space-y-3 mb-6">
                  {materiales.map((item) => {
                    const id = item.id;
                    const material = item.material;
                    const costo = item.costo;
                    return (
                      <div key={id} className="flex justify-between">
                        <span className="text-gray-600">{material}</span>
                        <span className="text-primary">{costo}</span>
                      </div>
                    );
                  })}
                  <div className="border-t border-primary pt-3 flex justify-between font-bold">
                    <span className="text-primary">Total</span>
                    <span className="text-primary">$33.23</span>
                  </div>
                </div>
                <div className="bg-secondary text-white p-3 rounded-lg mb-4 text-center">
                  <span className="font-medium">
                    Ahorra $10 con el kit completo
                  </span>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                  Comprar Kit Completo - $23.23
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="step-by-step" className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Guía Paso a Paso
              </h2>
              <p className="text-lg text-gray-600">
                Sigue estos simples pasos para crear tu sistema de compostaje
              </p>
            </div>

            <div className="space-y-12">
              {pasos.map((paso, index) => (
                <div
                  key={index + paso.titulo}
                  className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center"
                >
                  <div
                    className={`${(index + 1) % 2 === 0 ? "md:order-2" : ""}`}
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {paso.titulo}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {paso.descripcionLarga}
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      {paso.descripcionCorta.map((item, index) => (
                        <li key={index + item} className="flex items-center">
                          <i className="pi pi-check text-secondary mr-2"></i>
                          {item.charAt(0).toUpperCase().concat(item.slice(1))}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-80 overflow-hidden rounded-xl">
                    <img
                      className="w-full h-full object-cover"
                      src={paso.imagen.src}
                      alt={paso.imagen.alt ?? paso.titulo}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {SeccionExperienciasCompartidas({
          titulo: tituloSeccionExperienciasCompartidas,
          descripcion: descripcionSeccionExperienciasCompartidas,
          etiquetaDelBoton: "Mi experiencia",
          datosDeLasExperiencias,
        })}

        <section id="comments-section" className="bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comentarios y Preguntas
            </h2>

            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Comparte tu experiencia
              </h3>
              <div className="flex space-x-4">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                  alt="Usuario"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                    rows={3}
                    placeholder="¿Cómo fue tu experiencia? ¿Algún consejo para otros usuarios?"
                  ></textarea>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-500 hover:text-gray-700">
                        <i data-fa-i2svg="" className="pi pi-image"></i>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <i data-fa-i2svg="" className="pi pi-video"></i>
                      </button>
                    </div>
                    <Button className="bg-secondary! border-secondary! text-white py-2 rounded-lg hover:bg-primary! transition-colors">
                      Publicar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {comentariosEnProyecto
              ?.filter((com) => com?.idProyecto === Number(id))
              ?.map((item) => (
                <Comentario key={item.id} comentario={item} />
              ))}
          </div>
        </section>
      </main>
    );
  }
}
