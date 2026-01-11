import { ComoFunciona } from "@/app/data";
import { twMerge } from "tailwind-merge";

export const SeccionComoFunciona = (
  <section
    id="como-funciona"
    className="flex py-10 px-0 w-full md:my-10 md:bg-gradient-to-br from-primary to-secondary text-white"
  >
    <div className="max-w-7xl mx-auto px-12">
      <div className="text-center mb-8 md:mb-16">
        <h2 className="text-4xl! font-display! font-bold md:mb-4 md:text-white!">
          ¿Cómo Funciona?
        </h2>
        <p className="hidden md:flex justify-center text-lg! text-green-100! max-w-2xl mx-auto">
          Unos simples pasos para comenzar tu proyecto sustentable.
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-12">
        {ComoFunciona.map((paso, index) => {
          return (
            <div
              key={paso.titulo + index}
              id={`paso-${index + 1}`}
              className="md:text-center flex flex-row gap-4 md:flex-col max-w-md place-items-center"
            >
              <div>
                <div
                  className={twMerge(
                    "w-16 h-16 rounded-full md:border-transparent flex items-center justify-center mx-auto",
                    index === 1
                      ? "bg-primary border-2 border-accent"
                      : index === 2
                      ? "bg-secondary"
                      : index === 3
                      ? "bg-secondary border-2 border-primary "
                      : "bg-primary",
                    "md:bg-white/20 md:backdrop-blur md:mb-6 md:w-20 md:h-20 md:border-transparent"
                  )}
                >
                  <span className="text-4xl font-bold">{index + 1}</span>
                </div>
              </div>
              <div className="w-auto flex flex-col md:gap-4">
                <h3 className="md:text-2xl! md:text-white! font-bold ">
                  {paso.titulo}
                </h3>
                <p className="text-base! md:hidden leading-relaxed!">
                  {paso.descripcion}
                </p>
                <p className="hidden md:flex text-base! text-green-100! leading-relaxed!">
                  {paso.descripcionLarge}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
