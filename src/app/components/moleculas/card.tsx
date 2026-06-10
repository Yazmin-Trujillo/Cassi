import { CardProps } from "@/app/types";
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  srcImg?: string;
  altImg?: string;
  title?: string;
  titleSize?: "Small" | "Medium" | "Big";
  subtitle?: string;
  content?: string;
  id?: number;
  header?: ReactNode;
  footer?: ReactNode;
};

export const Card = ({
  id,
  title,
  titleSize,
  subtitle,
  content,
  srcImg,
  altImg,
  header,
  footer,
}: Props) => {
  const classNameSize = (() => {
    switch (titleSize) {
      case "Small":
        return "text-2xl";
      case "Medium":
        return "text-3xl md:text-4xl xl:text-5xl";
      case "Big":
        return "text-4xl md:text-5xl";
      default:
        return "text-3xl md:text-4xl xl:text-5xl";
    }
  })();

  return (
    <div
      id="card"
      className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl min-w-2xs group bg-white rounded-xl"
    >
      <div className="p-card-header">
        <div className="h-64 overflow-hidden relative">
          {srcImg ? (
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              src={srcImg}
              alt={altImg || title}
            />
          ) : (
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              src="https://img.freepik.com/vector-gratis/fondo-estilo-comic_23-2148809728.jpg"
              alt="Fondo determinado"
            />
          )}
          {header}
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-4">
        <div className="">
          {title ? (
            <div className={twMerge("font-bold text-primary", classNameSize)}>
              {title}
            </div>
          ) : null}
          {subtitle ? (
            <div className="font-bold capitalize">{subtitle}</div>
          ) : null}
        </div>
        <div className="">
          <p className="text-xl line-clamp-3">{content}</p>
        </div>
        {footer}
      </div>
    </div>
  );
};
