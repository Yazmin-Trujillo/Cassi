import { Button } from "../components/atomos/button";

export default function Comunidad() {
  return (
    <div className="pt-16 flex gap-4">
      <Button type="Primary">Primario</Button>
      <Button type="Secondary">Secundary</Button>
      <Button type="Text">Text</Button>
      <Button type="OnlyIcon" iconTransition icon="Carrot"></Button>
      <Button type="Primary" icon="Droplet" iconLeft iconTransition>
        Primario
      </Button>
      <Button type="Secondary" icon="Plus" iconRight iconTransition>
        Secundary
      </Button>
      <Button type="Text">Text</Button>
      <Button type="OnlyIcon" icon="Plus"></Button>
      <Button type="Primary" iconLeft iconRight icon="Droplet" iconTransition>
        Primario
      </Button>
    </div>
  );
}
