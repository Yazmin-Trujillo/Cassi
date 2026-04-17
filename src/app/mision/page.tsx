import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { SeccionProyectosDeLaComunidad } from "../components/organismos/proyectosDeLaComunidad";
import { SeccionExperienciasCompartidas } from "../components/organismos/experienciasCompartidas";

export default function Mision() {
  return (
    <div className="flex flex-col gap-16">
      <section id="mission-hero" className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-10"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4f92d86601-cbc3e4851bc93d705744.png"
            alt="Abstract organic shapes and eco-friendly patterns, soft green and earth tones, clean vector style, subtle background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-100/50 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-100! text-secondary! font-semibold text-sm! mb-6 tracking-wide uppercase">
            Nuestra Misión
          </span>
          <h2 className="mb-8 leading-tight">
            Dejar de preocuparnos para empezar a{" "}
            <span className="text-brand-600 relative">
              ocuparnos.
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-brand-500/30"
                viewBox="0 0 200 12"
                fill="currentColor"
              >
                <path d="M0,10 Q100,0 200,10 L200,12 Q100,2 0,12 Z"></path>
              </svg>
            </span>
          </h2>
          <p className="mb-12 leading-relaxed">
            En un mundo lleno de noticias sobre crisis climática, creemos que la
            sustentabilidad no debería ser un lujo, sino una herramienta al
            alcance de cualquier persona con un martillo, un par de semillas o
            una vieja caja de madera.
          </p>
          <h3>¿Qué hacemos aquí?</h3>
          <p className="mb-12">
            Esta no es solo una biblioteca de proyectos; es un manual de
            resistencia creativa. Nos dedicamos a simplificar soluciones
            complejas para que puedas:
          </p>
          <ul className="text-primary list-disc list-inside flex flex-col mb-12">
            <li>
              <span className="font-bold">Generar</span> tu propia energía.
            </li>
            <li>
              <span className="font-bold">Captar</span> y honrar cada gota de
              agua.
            </li>
            <li>
              <span className="font-bold">Recuperar</span> lo que otros llaman
              "basura".
            </li>
            <li>
              <span className="font-bold">Construir</span> espacios que
              respiren.
            </li>
            <li>
              <span className="font-bold">Cultivar</span> tu propia libertad
              alimentaria.
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              icon="pi pi-plus-circle icon transition duration-500"
              label="Comenzar un Proyecto"
              className="myBoxShadow"
            />
            <Button
              label="Ver tutorial"
              outlined
              style={{ marginLeft: "0.5em" }}
            />
          </div>
        </div>
      </section>
      <section id="philosophy" className="w-full py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/61c7995212-2f46388b36390e85a2cb.png"
                  alt="person building a wooden planter box DIY sustainable project bright natural lighting"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-brand-light">
                      <i data-fa-i2svg="">
                        <svg
                          className="svg-inline--fa fa-hammer"
                          width="1rem"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="hammer"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">
                        Proyectos DIY
                      </h4>
                      <p className="text-sm!">Hecho por ti, para ti.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
                Nuestra Filosofía
              </h2>
              <p className="text-xl text-white! bg-brand inline-block px-4 py-1 rounded-lg font-semibold mb-8">
                La "Triple A"
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 shrink-0 bg-secondary rounded-2xl flex items-center justify-center text-brand-dark font-bold text-2xl border border-gray-200">
                    A
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">
                      Accesibilidad
                    </h3>
                    <p className="text-brand-slate leading-relaxed text-lg">
                      Proyectos diseñados para presupuestos reales y materiales
                      que ya tienes en casa. No necesitas herramientas de miles
                      de dólares para empezar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 shrink-0 bg-primary rounded-2xl flex items-center justify-center text-brand-dark font-bold text-2xl border border-gray-200">
                    A
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">
                      Autonomía
                    </h3>
                    <p className="text-brand-slate leading-relaxed text-lg">
                      Menos dependencia del sistema tradicional y más confianza
                      en tus propias manos. Recupera el control sobre tus
                      recursos básicos.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 shrink-0 bg-accent rounded-2xl flex items-center justify-center text-brand-dark font-bold text-2xl shadow-sm">
                    A
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">
                      Acción Real
                    </h3>
                    <p className="text-brand-slate leading-relaxed text-lg">
                      Un paso a paso honesto. Sin tecnicismos innecesarios, solo
                      guías claras, listas de materiales precisas y resultados
                      medibles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {SeccionExperienciasCompartidas({})}
      <section id="cta" className="py-24 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            className="w-full h-full object-cover"
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/54d4900dfc-24f661c310d7a24e2267.png"
            alt="Lush green forest canopy from below, dark moody tones"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white! mb-6">
            ¿Listo para ensuciarte las manos por el planeta?
          </h2>
          <p className="text-stone-100! mb-10">
            Únete a miles de personas que ya están transformando su entorno con
            proyectos prácticos y sostenibles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              label="Crear Cuenta Gratis"
              className="myBoxShadow bg-secondary! text-white!"
            />
            <Button
              label="Explorar Proyectos"
              outlined
              style={{ marginLeft: "0.5em", color: "white" }}
            />
          </div>
        </div>
      </section>
      <section
        id="impact-stats"
        className="py-16 bg-white border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200">
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-primary mb-2">15k+</div>
              <div className="text-sm text-primary font-medium uppercase tracking-wide">
                Proyectos Creados
              </div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-secondary mb-2">50k</div>
              <div className="text-sm text-secondary font-medium uppercase tracking-wide">
                Usuarios Activos
              </div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-primary mb-2">120t</div>
              <div className="text-sm text-primary font-medium uppercase tracking-wide">
                CO2 Reducido
              </div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-secondary font-medium uppercase tracking-wide">
                Código Abierto
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer
        id="footer"
        className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary from-lime-900 to-lime-700 rounded-xl flex items-center justify-center">
                  <i data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-leaf"
                      width="1rem"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="leaf"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.2 5.4c-25.9 5.9-50 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"
                      ></path>
                    </svg>
                  </i>
                </div>
                <span className="font-bold text-xl text-white">
                  EcoProyectos
                </span>
              </a>
              <p className="text-sm! text-slate-400! mb-6">
                Haciendo la sustentabilidad accesible, práctica y comunitaria
                para todos.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <i className="text-xl" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-instagram"
                      width="1rem"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      ></path>
                    </svg>
                  </i>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <i className="text-xl" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-twitter"
                      width="1rem"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="twitter"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      ></path>
                    </svg>
                  </i>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <i className="text-xl" data-fa-i2svg="">
                    <svg
                      className="svg-inline--fa fa-youtube"
                      width="1rem"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="youtube"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                      ></path>
                    </svg>
                  </i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Plataforma</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors"
                  >
                    Explorar Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors"
                  >
                    Tienda de Materiales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors"
                  >
                    Comunidad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors"
                  >
                    Nuestra Misión
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Soporte</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors"
                  >
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors"
                  >
                    Guías de Seguridad
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors"
                  >
                    Envíos y Devoluciones
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-400 transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Boletín</h4>
              <p className="text-sm! text-slate-400! mb-4">
                Recibe nuevos proyectos y tips ecológicos cada semana.
              </p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-brand-500 text-sm"
                />
                <Button
                  type="submit"
                  label="Suscribirse"
                  className="myBoxShadow bg-secondary! text-white! text-sm!"
                />
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm!">
              © 2026 EcoProyectos. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
