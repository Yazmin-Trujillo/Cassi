import { MaterialesPopulares } from "@/app/data";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export const SeccionMaterialesPopulares = (
  <section
    id="materiales-populares"
    className="py-10 px-8 w-screen max-w-[1500px]"
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <div>
          <h2 className="text-4xl font-display font-bold text-primary md:mb-3">
            Materiales Populares
          </h2>
          <p className="hidden md:flex text-lg text-gray-600">
            Conoce todos los productos disponibles en nuestra tienda.
          </p>
        </div>
        <Button className="whitespace-nowrap" label="Ver tienda" text />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 place-items-center">
        {MaterialesPopulares.map((producto, index) => {
          return (
            <Card
              key={producto.title + index}
              className="card-materiales overflow-hidden group h-full"
              style={{
                border: 0,
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
              title={producto.title}
              header={
                <div className="h-32 bg-white rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    src={producto.header.srcImg}
                    alt={producto.header.altImg}
                  />
                </div>
              }
              footer={
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {producto.footer.precio}
                  </span>
                  <Button icon="pi pi-plus" rounded aria-label="Plus" />
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
