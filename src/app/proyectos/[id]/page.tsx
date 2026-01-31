import { TodosLosProyectos } from "@/app/data";

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

  return <div className="pt-8 text-primary">{data?.titulo}</div>;
}
