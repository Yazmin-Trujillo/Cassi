import { Button } from "../components/atomos/button";

export default function Comunidad() {
  return (
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
        <Button kind="Primary" iconLeft iconRight icon="Droplet" iconTransition>
          Primario
        </Button>
      </div>
    </div>
  );
}
