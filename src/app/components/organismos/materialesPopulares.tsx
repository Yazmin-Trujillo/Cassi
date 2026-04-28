import { MaterialesPopulares } from "@/app/data";
import { Card } from "primereact/card";
import { Button } from "../atomos/button";
import { Header } from "../moleculas/header";

export const SeccionMaterialesPopulares = (
  <section id="materiales-populares" className="px-8 w-screen max-w-[1500px]">
    <div className="max-w-7xl mx-auto">
      <Header
        title="Materiales Populares"
        content="Conoce todos los productos disponibles en nuestra tienda."
        button
        buttonContent="Ver tienda"
      />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 place-items-center">
        {MaterialesPopulares.map((producto, index) => {
          return (
            <Card
              key={producto.id + index}
              className="card-materiales overflow-hidden group shadow-lg! hover:shadow-2xl! h-full flex flex-col justify-between"
              style={{
                border: 0,
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
              title={producto.material}
              header={
                <div className="h-64 bg-white rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    src={producto.imagen.srcImg}
                    alt={producto.imagen.altImg}
                  />
                </div>
              }
              footer={
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {producto.costo}
                  </span>
                  <Button kind="Icon" icon="Plus" classNameButton="p-2" />
                </div>
              }
            >
              <p className="text-xl">{producto.descripcion}</p>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
