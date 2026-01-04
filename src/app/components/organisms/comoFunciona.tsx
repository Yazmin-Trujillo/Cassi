export const SeccionComoFunciona = (
  <section
    id="como-funciona"
    className="py-20 px-0 w-screen bg-gradient-to-br from-primary to-secondary text-white"
  >
    <div className="max-w-7xl mx-auto px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl! font-display! font-bold mb-4 text-white!">
          ¿Cómo Funciona?
        </h2>
        <p className="text-lg! text-green-100! max-w-2xl mx-auto">
          Tres simples pasos para comenzar tu proyecto sustentable
        </p>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div id="paso-1" className="text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold">1</span>
          </div>
          <h3 className="text-2xl! text-white! font-bold mb-4">
            Elige tu Proyecto
          </h3>
          <p className="text-green-100! leading-relaxed!">
            Explora nuestra biblioteca de proyectos y selecciona el que más te
            inspire. Cada uno incluye guías paso a paso detalladas.
          </p>
        </div>
        <div id="paso-2" className="text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold">2</span>
          </div>
          <h3 className="text-2xl! text-white! font-bold mb-4">
            Obtén Materiales
          </h3>
          <p className="text-green-100! leading-relaxed!">
            Compra los materiales necesarios directamente desde la plataforma.
            Todo lo que necesitas en un solo lugar.
          </p>
        </div>
        <div id="paso-3" className="text-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold">3</span>
          </div>
          <h3 className="text-2xl! text-white! font-bold mb-4">
            Construye y Comparte
          </h3>
          <p className="text-green-100! leading-relaxed!">
            Sigue la guía paso a paso y comparte tu experiencia con la
            comunidad. Inspira a otros con tu proyecto.
          </p>
        </div>
      </div>
    </div>
  </section>
);
