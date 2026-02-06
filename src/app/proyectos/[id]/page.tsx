import { HeroDelProyecto } from "@/app/components/moleculas/heroDelProyecto";
import { TarjetaDelMaterial } from "@/app/components/moleculas/tarjetaDelMaterial";
import { Materiales, TodosLosProyectos } from "@/app/data";

type ProyectoType = {
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

export default async function Proyecto({ params }: ProyectoType) {
  const { id } = await params;

  const data = await getData(Number(id));

  if (!data) {
    return <div>El producto no existe</div>;
  } else {
    const categoria = data.categoria;
    const dificultad = data.dificultad;
    const titulo = data.titulo;
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

    return (
      <main className="flex flex-col gap-16">
        <HeroDelProyecto
          categoria={categoria}
          dificultad={dificultad}
          titulo={titulo}
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-80 overflow-hidden rounded-xl">
                    <img
                      className="w-full h-full object-cover"
                      src={paso.imagen.src}
                      alt={paso.imagen.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="user-projects" className="bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Proyectos de la Comunidad
              </h2>
              <p className="text-lg text-gray-600">
                Mira cómo otros usuarios han completado este proyecto
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/36bc5bc3c7-af991a2dad1a9fb5873d.png"
                    alt="urban balcony composting setup by user, plants around compost bin"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                      alt="María"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        María González
                      </h4>
                      <p className="text-sm text-gray-500">Hace 2 semanas</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Perfecto para mi balcón pequeño. En 4 meses ya tengo
                    compost para mis plantas. Los pasos fueron muy claros y
                    fáciles de seguir."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <span className="text-sm text-gray-500">5.0</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/75732e3dac-634f6d140d901fda81af.png"
                    alt="backyard composting system with multiple containers, family garden project"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                      alt="Carlos"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Carlos Ruiz
                      </h4>
                      <p className="text-sm text-gray-500">Hace 1 mes</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Hice 3 contenedores siguiendo la guía. Ahora mi familia
                    recicla todos los residuos orgánicos. El kit de materiales
                    llegó completo y en perfectas condiciones."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-gray-300" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <span className="text-sm text-gray-500">4.8</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/89ae2a9314-6373d017f3efc30e19d1.png"
                    alt="indoor composting setup in kitchen, compact design with herbs growing"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                      alt="Ana"
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Ana Martínez
                      </h4>
                      <p className="text-sm text-gray-500">Hace 3 días</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Lo adapté para usar en la cocina. Sin olores y muy
                    eficiente. Mis hierbas nunca habían crecido tan bien con
                    este compost casero."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                      <i className="text-yellow-400" data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-star"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <span className="text-sm text-gray-500">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="comments-section" className="bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Comentarios y Preguntas
            </h2>

            <div className="bg-white rounded-xl p-6 mb-8">
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
                        <i data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-image"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="image"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
                            ></path>
                          </svg>
                        </i>
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <i data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-video"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="video"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
                            ></path>
                          </svg>
                        </i>
                      </button>
                    </div>
                    <button className="bg-secondary text-white px-6 py-2 rounded-lg font-medium hover:bg-eco-dark transition-colors">
                      Publicar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                    alt="Pedro"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900">
                        Pedro Silva
                      </h4>
                      <span className="text-sm text-gray-500">
                        Hace 2 horas
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">
                      ¿Alguien ha probado esto en clima muy húmedo? Me preocupa
                      que se forme demasiada humedad dentro del contenedor.
                    </p>
                    <div className="flex items-center space-x-4">
                      <button className="text-gray-500 hover:text-primary flex items-center space-x-1">
                        <i data-fa-i2svg="">
                          <svg
                            className="svg-inline--fa fa-thumbs-up"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="thumbs-up"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"
                            ></path>
                          </svg>
                        </i>
                        <span>12</span>
                      </button>
                      <button className="text-gray-500 hover:text-primary">
                        Responder
                      </button>
                    </div>
                  </div>
                </div>

                <div className="ml-14 mt-4 space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <h5 className="font-medium text-gray-900">
                        María González
                      </h5>
                      <span className="text-sm text-gray-500">Hace 1 hora</span>
                    </div>
                    <p className="text-gray-600">
                      Yo vivo en zona muy húmeda y funciona perfecto. Solo
                      agrega más material seco y revuelve más frecuentemente.
                      También puedes hacer más orificios de ventilación.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                    alt="Laura"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-gray-900">
                        Laura Hernández
                      </h4>
                      <span className="text-sm text-gray-500">Hace 1 día</span>
                    </div>
                    <p className="text-gray-600 mb-3">Excelente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
