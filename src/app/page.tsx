import Image from "next/image";
import { Menubar } from "primereact/menubar";

import { Button } from "primereact/button";

export default function Home() {
  const items = [
    {
      label: "Inicio",
    },
    {
      label: "Proyectos",
    },
    {
      label: "Comunidad",
    },
    {
      label: "Materiales",
      icon: "pi pi-search",
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
    {
      label: "Blog",
    },
  ];

  const start = (
    <div className="flex items-center justify-center gap-2">
      <div className="rounded-xl bg-linear-to-br from-lime-900 to-lime-700 w-[3rem] h-[3rem] flex items-center justify-center">
        <img
          alt="logo"
          src="/hoja.svg"
          height="80"
          className="w-[1.5rem]"
        ></img>
      </div>
      <span className="text-2xl font-bold text-lime-900">EcoCreadores</span>
    </div>

    // <i className="pi pi-check" style={{ fontSize: "2rem", color: "green" }}></i>
  );

  const end = (
    <div className="flex gap-2">
      <Button label="Iniciar Sesión" text />
      <Button label="Compartir proyecto" />
    </div>
  );

  return (
    <div className="flex bg-yellow-50 min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-[1500px] flex-col items-center justify-between py-4 px-8 bg-white dark:bg-black sm:items-start">
        <div className=" w-full">
          <Menubar model={items} start={start} end={end} />
        </div>

        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="bg-red-300 w-full flex justify-center">
          <Button
            label="Click me!"
            icon="pi pi-check"
            className="bg-[--primary-color]"
          />
        </div>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
