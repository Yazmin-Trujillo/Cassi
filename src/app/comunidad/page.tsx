import { Button } from "../components/atomos/button";

export default function Comunidad() {
  return (
    <div className="pt-16 flex gap-4 flex-col">
      <div className="flex gap-4 w-full">
        <Button severity="Primary" classNameButton="w-1/2 justify-center">
          Primario
        </Button>
        <Button severity="Secondary">Secundary</Button>
      </div>
      <div className="pt-16 flex gap-4">
        <Button severity="Primary">Primario</Button>
        <Button severity="Secondary">Secundary</Button>
        <Button severity="Text">Text</Button>
        <Button severity="OnlyIcon" iconTransition icon="Carrot"></Button>
        <Button severity="Primary" icon="Droplet" iconLeft iconTransition>
          Primario
        </Button>
        <Button severity="Secondary" icon="Plus" iconRight iconTransition>
          Secundary
        </Button>
        <Button severity="Text">Text</Button>
        <Button severity="OnlyIcon" icon="Plus"></Button>
        <Button
          severity="Primary"
          iconLeft
          iconRight
          icon="Droplet"
          iconTransition
        >
          Primario
        </Button>
      </div>
    </div>
  );
}
