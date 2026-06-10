import Link from "next/link";
import { Button } from "../components/atomos/button";
import { Card } from "../components/moleculas/card";
import { EtiquetaDeCategorias } from "../utils";

export default function Comunidad() {
  return (
    <>
      <Card
        title="Compostera de Pallets DIY"
        subtitle="subtitle"
        content="Construye tu propia compostera usando materiales reciclados. Guía completa con 8 pasos detallados."
        /* header={
          <>
            {EtiquetaDeCategorias("residuos", "absolute top-4 left-4")}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-primary flex items-center space-x-1">
              <i className="pi pi-clock"></i>
              <span>{"1 hora"}</span>
            </div>
          </>
        }
       </> footer={
          <div className="p-card-footer" data-pc-section="footer">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <i className="pi pi-heart-fill text-red-500"></i>
                  <span>47</span>
                </div>
                <div className="flex items-center space-x-1">
                  <i className="pi pi-comment"></i>
                  <span>58</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  alt="Ana Torres"
                  className="w-8 h-8 rounded-full"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                />
                <span className="text-sm font-medium text-gray-700">
                  Ana Torres
                </span>
              </div>
            </div>
            <div
              className="justify-center p-divider p-component p-divider-horizontal p-divider-solid p-divider-left"
              aria-orientation="horizontal"
              role="separator"
              data-pc-name="divider"
              data-pc-section="root"
            >
              <div
                className="p-divider-content"
                data-pc-section="content"
              ></div>
            </div>
            <div className="flex items-center justify-between gap-4 w-full">
              <Link href={`/proyectos/${5}`} className="w-1/2">
                <button
                  className="w-full p-button p-component cursor-pointer p-3 rounded-xl  flex gap-2"
                  data-pc-name="button"
                  data-pc-section="root"
                >
                  Ver Guía
                </button>
              </Link>
              <button
                className="w-1/2 p-button p-component border-secondary text-secondary p-button-outlined cursor-pointer p-3 rounded-xl  flex gap-2"
                data-pc-name="button"
                data-pc-section="root"
              >
                <i data-fa-i2svg="">
                  <svg
                    className="svg-inline--fa fa-cart-shopping"
                    width="1rem"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="cart-shopping"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                    ></path>
                  </svg>
                </i>{" "}
                Materiales
              </button>
            </div>
          </div>
        }*/
      ></Card>
      <div className="pt-16 flex gap-4 flex-col">
        <div className="flex gap-4 w-full">
          <Button kind="Primary" classNameButton="w-1/2 justify-center">
            Primario
          </Button>
          <Button kind="Outlined">Secundary</Button>
        </div>
        <div className="pt-16 flex gap-4">
          <Button kind="Primary">Primario</Button>
          <Button kind="Outlined">Secundary</Button>
          <Button kind="Text">Text</Button>
          <Button kind="Icon" iconTransition icon="Carrot"></Button>
          <Button kind="Primary" icon="Droplet" iconLeft iconTransition>
            Primario
          </Button>
          <Button kind="Outlined" icon="Plus" iconRight iconTransition>
            Secundary
          </Button>
          <Button kind="Text">Text</Button>
          <Button kind="Icon" icon="Plus"></Button>
          <Button
            kind="Primary"
            iconLeft
            iconRight
            icon="Droplet"
            iconTransition
          >
            Primario
          </Button>
        </div>
      </div>
    </>
  );
}
