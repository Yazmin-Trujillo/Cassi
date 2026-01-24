"use client";
import { Menubar } from "primereact/menubar";
import { useRouter } from "next/navigation";
import { menuEnd, menuStart } from "@/app/menuItems";

export default function Menu() {
  const router = useRouter();

  const menuItems = [
    {
      label: "Inicio",
      icon: "pi pi-home",
      command: () => {
        router.push("/");
      },
    },
    {
      label: "Proyectos",
      icon: "pi pi-star",
      command: () => {
        router.push("/proyectos");
      },
    },
    {
      label: "Comunidad",
      icon: "pi pi-users",
    },
    {
      label: "Materiales",
      icon: "pi pi-shop",
    },
    {
      label: "Blog",
      items: [
        {
          label: "Components",
          icon: "pi pi-bolt",
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
            },
          ],
        },
      ],
    },
  ];

  return (
    <header id="header" className="bg-white/95 shadow-sm max-w-[1500px] w-full">
      <Menubar model={menuItems} start={menuStart} end={menuEnd} />
    </header>
  );
}
